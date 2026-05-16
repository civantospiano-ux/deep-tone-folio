#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")/.."

# Build the project normally
bun run build

# Start the dev server briefly to capture the rendered HTML
echo "Starting dev server to capture static HTML..."
PORT=4173
bun run dev --port "$PORT" --host 127.0.0.1 &
DEV_PID=$!

# Wait for server to be ready
for i in $(seq 1 30); do
  if curl -s "http://127.0.0.1:$PORT/" > /dev/null 2>&1; then
    break
  fi
  sleep 1
done

# Create static output directory
STATIC_DIR="dist-static"
rm -rf "$STATIC_DIR"
mkdir -p "$STATIC_DIR"

# Fetch the rendered HTML
curl -s "http://127.0.0.1:$PORT/" > "$STATIC_DIR/index.html"

# Kill the dev server
kill $DEV_PID 2>/dev/null || true
wait $DEV_PID 2>/dev/null || true

# Copy client assets
cp -r dist/client/assets "$STATIC_DIR/assets"

# Add .nojekyll for GitHub Pages
touch "$STATIC_DIR/.nojekyll"

echo "Static site built in $STATIC_DIR/"
ls -la "$STATIC_DIR/"
echo "Done!"
