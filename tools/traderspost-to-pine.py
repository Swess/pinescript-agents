#!/usr/bin/env python3
"""
TradersPost CSV to Pine Script Converter

Converts TradersPost trade export CSV to Pine Script array format
for use with the traderspost-replay.pine strategy.

Usage:
    python tools/traderspost-to-pine.py /path/to/traderspost_trades.csv

Output:
    Pine Script code to paste into traderspost-replay.pine
"""

import csv
import json
import sys
from datetime import datetime


def parse_iso_to_unix_ms(iso_string: str) -> int:
    """Convert ISO timestamp to Unix timestamp in milliseconds."""
    # Handle format: "2026-01-02T19:15:00Z"
    try:
        dt = datetime.fromisoformat(iso_string.replace('Z', '+00:00'))
        return int(dt.timestamp() * 1000)
    except Exception:
        return 0


def main():
    if len(sys.argv) < 2:
        print("Usage: python traderspost-to-pine.py <csv_file>")
        print("\nConverts TradersPost CSV export to Pine Script array format.")
        sys.exit(1)

    csv_file = sys.argv[1]

    trades = []

    with open(csv_file, 'r', encoding='utf-8') as f:
        reader = csv.DictReader(f)
        for row in reader:
            signal_payload = row.get('Signal Payload', '')
            if not signal_payload:
                continue

            try:
                payload = json.loads(signal_payload)
                time_str = payload.get('time', '')
                action = payload.get('action', '')
                sentiment = payload.get('sentiment', '')
                price = payload.get('price', '0')
                quantity = payload.get('quantity', '1')

                timestamp_ms = parse_iso_to_unix_ms(time_str)
                # Direction: 1 = long entry, -1 = short entry, 0 = exit
                if sentiment == 'long':
                    direction = 1
                elif sentiment == 'short':
                    direction = -1
                else:  # 'flat' or any other = exit
                    direction = 0
                price_float = float(price)
                qty_int = int(quantity)

                if timestamp_ms > 0 and price_float > 0:
                    trades.append({
                        'time': timestamp_ms,
                        'direction': direction,
                        'price': price_float,
                        'qty': qty_int,
                        'time_str': time_str,
                        'sentiment': sentiment
                    })
            except (json.JSONDecodeError, ValueError) as e:
                print(f"Warning: Failed to parse row: {e}", file=sys.stderr)
                continue

    # Sort by timestamp
    trades.sort(key=lambda x: x['time'])

    # Generate Pine Script code
    print("// ═══════════════════════════════════════════════════════════════════════════════")
    print("// GENERATED TRADE DATA - Paste this into traderspost-replay.pine")
    print(f"// Generated from: {csv_file}")
    print(f"// Total trades: {len(trades)}")
    print("// ═══════════════════════════════════════════════════════════════════════════════")
    print()

    # Generate timestamps array
    times = [str(t['time']) for t in trades]
    print(f"var array<int> tradeTimes = array.from({', '.join(times)})")

    # Generate directions array (1=long, -1=short, 0=exit)
    directions = [str(t['direction']) for t in trades]
    print(f"var array<int> tradeDirections = array.from({', '.join(directions)})")

    # Generate prices array
    prices = [f"{t['price']:.2f}" for t in trades]
    print(f"var array<float> tradePrices = array.from({', '.join(prices)})")

    # Generate quantities array
    qtys = [str(t['qty']) for t in trades]
    print(f"var array<int> tradeQtys = array.from({', '.join(qtys)})")

    print()

    # Print summary
    long_entries = sum(1 for t in trades if t['direction'] == 1)
    short_entries = sum(1 for t in trades if t['direction'] == -1)
    exits = sum(1 for t in trades if t['direction'] == 0)
    print(f"// Summary: {long_entries} long entries, {short_entries} short entries, {exits} exits")

    if trades:
        print(f"// Date range: {trades[0]['time_str']} to {trades[-1]['time_str']}")

    print()
    print("// Trade details:")
    for i, t in enumerate(trades):
        if t['direction'] == 1:
            trade_type = "LONG"
        elif t['direction'] == -1:
            trade_type = "SHORT"
        else:
            trade_type = "EXIT"
        print(f"// {i+1}. {t['time_str']} | {trade_type:5} | ${t['price']:.2f} | qty={t['qty']}")


if __name__ == '__main__':
    main()
