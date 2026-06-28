
fpath = r"C:\development\hermes-travel-wiki\pages\index.js"
with open(fpath, 'r', encoding='utf-8') as f:
    content = f.read()

# Check what the actual chars are at the problem area
idx = content.find('sectionInner: { maxWidth: "1200px"')
if idx >= 0:
    snippet = content[idx:idx+150]
    print("FOUND area:")
    print(repr(snippet))
else:
    print("sectionInner not found")

# Count actual backslash-n sequences (not real newlines)
backslash_n = content.count('\\n')
real_newline = content.count('\n')
print(f"Literal backslash-n count: {backslash_n}")
print(f"Real newline count: {real_newline}")
