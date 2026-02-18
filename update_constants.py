
import re

file_path = 'lib/constants.ts'

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

def replacer(match):
    block = match.group(0)
    # Extract name
    name_match = re.search(r'name: "(.*?)",', block)
    if not name_match:
        return block
    
    name = name_match.group(1)
    
    # Check if metaTitle already exists to avoid double addition (idempotency)
    if 'metaTitle:' in block:
        return block

    # Generate meta fields
    meta_title = f'{name} | Axis Packaging'
    meta_desc = f'Custom {name.lower()} tailored to your brand. High-quality, sustainable packaging solutions available at Axis Packaging.'
    
    # Insert before slug (or at the end of the object)
    # The pattern matches the whole object content, let's inject before "slug:"
    if 'slug:' in block:
        return block.replace('slug:', f'metaTitle: "{meta_title}",\n    metaDescription: "{meta_desc}",\n    slug:')
    else:
        return block

# Pattern to match each object in the array
# We assume the structure is consistent as seen in the view_file output
# {
#   name: "...",
#   ...
#   slug: "...",
# }
# We'll match from { to }, non-greedy? 
# The objects are simple enough.
pattern = re.compile(r'\{\s+name:.*?\s+slug:.*?\s+\},', re.DOTALL)

new_content = pattern.sub(replacer, content)

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(new_content)

print("Updated lib/constants.ts")
