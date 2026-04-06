#!/bin/bash
# 小游戏门户本地预览（请用本脚本端口，避免与 8765 上其他项目冲突）
cd "$(dirname "$0")"
PORT="${1:-5179}"
echo "正在启动: http://127.0.0.1:${PORT}/"
echo "按 Ctrl+C 停止"
exec python3 -m http.server "$PORT"
