#!/bin/bash
# Image optimization script for Lost Galaxy: Survivors website
# Converts PNG screenshots to optimized JPEG and WebP formats

set -e

SRC_DIR="assets"
DEST_DIR="assets/optimized"
MAX_WIDTH=1920
JPEG_QUALITY=85
WEBP_QUALITY=80

# Create destination directory
mkdir -p "$DEST_DIR"

# Check for required tools
if ! command -v sips &> /dev/null; then
    echo "Error: sips command not found. This script requires macOS."
    exit 1
fi

echo "Optimizing images in $SRC_DIR/"

# Process PNG files
for png_file in "$SRC_DIR"/screenshot-*.png "$SRC_DIR"/screenshot-*.jpg "$SRC_DIR"/screenshot-*.jpeg; do
    # Skip if no files match
    [ -e "$png_file" ] || continue
    
    filename=$(basename "$png_file")
    name="${filename%.*}"
    ext="${filename##*.}"
    
    echo "Processing: $filename"
    
    # Determine output paths
    jpg_output="$DEST_DIR/$name.jpg"
    webp_output="$DEST_DIR/$name.webp"
    
    # Convert to JPEG using sips (macOS built-in)
    if [ "$ext" = "png" ] || [ "$ext" = "jpg" ] || [ "$ext" = "jpeg" ]; then
        echo "  Creating JPEG..."
        sips -s format jpeg -s formatOptions $JPEG_QUALITY --resampleWidth $MAX_WIDTH "$png_file" --out "$jpg_output" > /dev/null 2>&1
        
        # Get original dimensions for comparison
        original_size=$(stat -f%z "$png_file" 2>/dev/null || stat -c%s "$png_file" 2>/dev/null)
        new_size=$(stat -f%z "$jpg_output" 2>/dev/null || stat -c%s "$jpg_output" 2>/dev/null)
        
        reduction=$((100 - (new_size * 100 / original_size)))
        echo "  JPEG: ${original_size} -> ${new_size} bytes (${reduction}% reduction)"
    fi
    
    # Create WebP if cwebp is available
    if command -v cwebp &> /dev/null; then
        echo "  Creating WebP..."
        # Use JPEG as source for WebP if we created one, otherwise use original
        webp_source="$jpg_output"
        [ ! -f "$webp_source" ] && webp_source="$png_file"
        
        cwebp -quiet -q $WEBP_QUALITY -resize $MAX_WIDTH 0 "$webp_source" -o "$webp_output"
        
        if [ -f "$webp_output" ]; then
            webp_size=$(stat -f%z "$webp_output" 2>/dev/null || stat -c%s "$webp_output" 2>/dev/null)
            echo "  WebP: ${webp_size} bytes"
        fi
    else
        echo "  Skipping WebP (cwebp not installed)"
    fi
    
    echo ""
done

# Process existing JPG files that aren't screenshots (like trailer-poster.jpg, header.jpg)
for jpg_file in "$SRC_DIR"/*.jpg "$SRC_DIR"/*.jpeg; do
    # Skip screenshot files we already processed
    [[ "$jpg_file" == *"screenshot-"* ]] && continue
    [ -e "$jpg_file" ] || continue
    
    filename=$(basename "$jpg_file")
    name="${filename%.*}"
    
    echo "Processing: $filename"
    
    jpg_output="$DEST_DIR/$name.jpg"
    
    echo "  Optimizing JPEG..."
    sips -s format jpeg -s formatOptions $JPEG_QUALITY "$jpg_file" --out "$jpg_output" > /dev/null 2>&1
    
    original_size=$(stat -f%z "$jpg_file" 2>/dev/null || stat -c%s "$jpg_file" 2>/dev/null)
    new_size=$(stat -f%z "$jpg_output" 2>/dev/null || stat -c%s "$jpg_output" 2>/dev/null)
    
    reduction=$((100 - (new_size * 100 / original_size)))
    echo "  Optimized JPEG: ${original_size} -> ${new_size} bytes (${reduction}% reduction)"
    echo ""
done

echo "Optimization complete!"
echo "Optimized images saved to: $DEST_DIR/"
echo ""
echo "To use optimized images in the website:"
echo "1. Update image references in game-data.js to point to 'assets/optimized/'"
echo "2. Or replace original images with optimized versions:"
echo "   cp -r $DEST_DIR/* $SRC_DIR/"
echo ""
echo "Recommended: Use WebP with JPEG fallback for modern browsers."
echo "Install WebP tools: brew install webp"