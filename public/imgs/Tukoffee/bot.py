import sys, os
from pathlib import Path
files = []
_dir = str(Path.cwd()).split('/')[-1]
for f in os.listdir():
    if not f.endswith('.py'):
        files.append(f"/imgs/{_dir}/{f}")

print(files)