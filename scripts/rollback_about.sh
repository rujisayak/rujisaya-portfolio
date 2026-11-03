#!/usr/bin/env bash
# Rollback script to restore previous About Me and Hero state before November 3, 2026 update
set -e

BACKUP_DIR="backups/pre-about-update-20261103"

if [ ! -d "$BACKUP_DIR" ]; then
  echo "Error: Backup directory $BACKUP_DIR not found."
  exit 1
fi

echo "Restoring files from $BACKUP_DIR..."
cp "$BACKUP_DIR/index.html" public/index.html
cp "$BACKUP_DIR/styles.css" public/styles.css
cp "$BACKUP_DIR/app.js" public/app.js
cp "$BACKUP_DIR/cmsInitialData.json" db/cmsInitialData.json
cp "$BACKUP_DIR/seedFallback.json" db/seedFallback.json

echo "Files restored successfully!"
echo "To commit and deploy reverted version, run:"
echo "git commit -am 'revert: restore previous about me and hero content' && git push origin main"
