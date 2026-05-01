import os
from PIL import Image

in_path = 'assets/covers/linggen-cover.jpg'
out_path = 'assets/covers/linggen-cover.webp'

img = Image.open(in_path)
# Reduce dimensions slightly to 600x900 (perfect for grid cards, even on retina)
img.thumbnail((600, 900), Image.Resampling.LANCZOS)

# Save as WebP
img.save(out_path, 'WEBP', quality=75, method=6)

old_size = os.path.getsize(in_path) / 1024
new_size = os.path.getsize(out_path) / 1024

print(f"Old JPG size: {old_size:.2f} KB")
print(f"New WebP size: {new_size:.2f} KB")
