#!/bin/bash
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
DATA_DIR="$SCRIPT_DIR/../data"

mkdir -p "$DATA_DIR"

echo "Downloading Pine Script language-reference.json..."
curl -sL "https://raw.githubusercontent.com/iamrichardD/mcp-server-pinescript/refs/heads/main/docs/processed/language-reference.json" \
  -o "$DATA_DIR/language-reference.json"

echo "Downloaded to $DATA_DIR/language-reference.json"
python3 -c "
import json, sys
with open('$DATA_DIR/language-reference.json') as f:
    d = json.load(f)
print(f\"  Functions: {len(d.get('functions', {}))}\")
print(f\"  Variables: {len(d.get('variables', {}))}\")
" 2>/dev/null || echo "  (install python3 to see stats)"
