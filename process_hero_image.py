import os
from PIL import Image, ImageEnhance
import numpy as np

src_path = r"C:\Users\sugan\.gemini\antigravity-ide\brain\8202d6da-37b7-4fdd-9f50-389554f3002c\.user_uploaded\media_1789555043735.jpg"
out_dir = r"c:\Users\sugan\OneDrive\Documents\Desktop\Folders\my-portfolio-app\portfolio\public\assets"
os.makedirs(out_dir, exist_ok=True)

img = Image.open(src_path).convert("RGB")
w, h = img.size
print(f"Original size: {w}x{h}")

# Precision crop:
# Head top: ~120
# Bottom: ~625 (right below laptop keyboard base and hands, completely cutting out ~400px of empty counter!)
# Left: 70, Right: 730
crop_box = (70, 110, 730, 625)
cropped = img.crop(crop_box)
cw, ch = cropped.size
print(f"Cropped size: {cw}x{ch}")

# Global continuous color balance (NO hard masks or blotches):
# Subtle 3-way split tone:
# Shadows & midtones: gently push cool cyan/blue (+5% B, -3% R in lower luminance)
# Highlights: preserve warm skin and golden yellow outfit
arr = np.array(cropped, dtype=np.float32)

r = arr[:, :, 0]
g = arr[:, :, 1]
b = arr[:, :, 2]
lum = (0.299 * r + 0.587 * g + 0.114 * b) / 255.0

# Shadow/midtone weighting (smooth continuous function):
shadow_mid = np.clip(1.0 - lum * 1.2, 0.0, 1.0)
# Cool toning in shadows/midtones:
r_toned = r * (1.0 - shadow_mid * 0.06)
g_toned = g * (1.0 + shadow_mid * 0.02)
b_toned = b * (1.0 + shadow_mid * 0.10)

# Gentle filmic S-curve for rich blacks and smooth highlight roll-off:
def filmic_curve(channel):
    norm = np.clip(channel / 255.0, 0.0, 1.0)
    # Smooth contrast curve
    curved = np.where(
        norm < 0.5,
        0.5 * np.power(norm * 2.0, 1.08),
        1.0 - 0.5 * np.power((1.0 - norm) * 2.0, 1.08)
    )
    return np.clip(curved * 255.0, 0, 255)

r_out = filmic_curve(r_toned)
g_out = filmic_curve(g_toned)
b_out = filmic_curve(b_toned)

graded_arr = np.stack([r_out, g_out, b_out], axis=2).astype(np.uint8)
graded_img = Image.fromarray(graded_arr)

# Subtle vibrance
enhancer = ImageEnhance.Color(graded_img)
vibrant_img = enhancer.enhance(1.04)

# Contrast
c_enhancer = ImageEnhance.Contrast(vibrant_img)
final_img = c_enhancer.enhance(1.03)

out_png = os.path.join(out_dir, "suganya-portrait.png")
out_webp = os.path.join(out_dir, "suganya-portrait.webp")
out_hero_jpg = r"c:\Users\sugan\OneDrive\Documents\Desktop\Folders\my-portfolio-app\portfolio\public\heroImg.jpg"

final_img.save(out_png, format="PNG", optimize=True)
final_img.save(out_webp, format="WEBP", quality=95)
final_img.save(out_hero_jpg, format="JPEG", quality=95)

print("Exported smooth, high-fidelity, artifact-free image successfully!")
