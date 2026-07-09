#!/bin/bash
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
MANUAL_DIR="$(cd "$SCRIPT_DIR/../../manual" && pwd)"

echo "Downloading Pine Script v6 reference manual..."

TMP_DIR=$(mktemp -d)
git clone --depth 1 https://github.com/codenamedevan/pinescriptv6.git "$TMP_DIR"

# Remove old manual content
rm -rf "$MANUAL_DIR"/*

# Copy all content
cp -r "$TMP_DIR"/concepts "$TMP_DIR"/reference "$TMP_DIR"/visuals "$TMP_DIR"/writing_scripts "$MANUAL_DIR/"
cp "$TMP_DIR"/*.md "$MANUAL_DIR/"

# Cleanup
rm -rf "$TMP_DIR"

echo "Manual downloaded to $MANUAL_DIR"
echo "Files: $(find "$MANUAL_DIR" -name '*.md' | wc -l) markdown files"
