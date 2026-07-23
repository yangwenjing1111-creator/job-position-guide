# 同步把 init_db.py 的 POSITIONS taboos 改为"0基础快速补齐"
import importlib.util, json, re

spec = importlib.util.spec_from_file_location('init_db', 'init_db.py')
m = importlib.util.module_from_spec(spec)
spec.loader.exec_module(m)

with open('taboos_map.json', encoding='utf-8') as f:
    mp = json.load(f)

P = m.POSITIONS
missing = []
for p in P:
    if p['id'] in mp:
        p['taboos'] = mp[p['id']]
    else:
        missing.append(p['id'])
if missing:
    raise SystemExit('init_db.py 缺映射: ' + ','.join(missing))

# 括号深度定位 POSITIONS 块并整体替换
raw = open('init_db.py', encoding='utf-8').read()
mm = re.search(r'POSITIONS\s*=\s*\[', raw)
start = mm.start()
eq = raw.index('[', start)
depth = 0
end = -1
for i in range(eq, len(raw)):
    if raw[i] == '[':
        depth += 1
    elif raw[i] == ']':
        depth -= 1
        if depth == 0:
            end = i
            break
head = raw[:eq]
tail = raw[end + 1:]
# JSON 用双引号字符串，是合法 Python 字面量；ensure_ascii=False 保留中文
body = json.dumps(P, ensure_ascii=False, indent=2)
open('init_db.py', 'w', encoding='utf-8').write(head + body + tail)
print('init_db.py 已更新', len(P), '岗 taboos')
