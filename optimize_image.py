import os
from PIL import Image

img_path = 'assets/covers/linggen-cover.png'
out_path = 'assets/covers/linggen-cover.jpg'

img = Image.open(img_path)
# Convert RGBA to RGB for JPEG
if img.mode in ('RGBA', 'P'):
    img = img.convert('RGB')

# The card on desktop is likely around 300-400px wide. 
# We can set max width to 800px for Retina display crispness.
img.thumbnail((800, 1200), Image.Resampling.LANCZOS)

# Save as JPEG with optimization
img.save(out_path, 'JPEG', quality=82, optimize=True)

old_size = os.path.getsize(img_path) / 1024
new_size = os.path.getsize(out_path) / 1024

print(f"Original size: {old_size:.2f} KB")
print(f"Optimized size: {new_size:.2f} KB")
