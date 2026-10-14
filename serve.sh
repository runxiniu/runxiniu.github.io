#!/usr/bin/env sh
set -eu
cd "$(dirname "$0")"
exec python3 -m http.server "${1:-4001}" --bind 127.0.0.1
