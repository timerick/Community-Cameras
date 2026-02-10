#!/usr/bin/env python3
"""
Build script to convert absolute paths back to relative paths for local development.
Usage: python build-for-local.py
"""

import os
import sys

def replace_in_file(filepath, replacements):
    """Replace multiple strings in a file."""
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
        
        for old, new in replacements:
            if old in content:
                content = content.replace(old, new)
                print(f"✓ Updated: {old} → {new}")
            else:
                print(f"✗ Not found: {old}")
        
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        
        return True
    except Exception as e:
        print(f"✗ Error processing {filepath}: {e}")
        return False

def build_for_local():
    """Convert all paths to relative (local dev) format."""
    print("🔨 Building for LOCAL DEVELOPMENT...")
    print("=" * 60)
    
    html_dir = os.path.dirname(os.path.abspath(__file__)) + "/html"
    
    if not os.path.exists(html_dir):
        print(f"✗ Error: html directory not found at {html_dir}")
        sys.exit(1)
    
    # navbar.html replacements: production → local
    navbar_path = os.path.join(html_dir, "navbar.html")
    navbar_replacements = [
        ('href="/index"', 'href="./index.html"'),
        ('href="/goatmountain"', 'href="./goatmountain.html"'),
        ('href="/grainelevators"', 'href="./grainelevators.html"'),
        ('href="/skimmerhorns"', 'href="./skimmerhorns.html"'),
        ('href="/kootenaylake"', 'href="./kootenaylake.html"'),
        ('href="/drivebccameras"', 'href="./drivebccameras.html"'),
        ('href="/airport"', 'href="./airport.html"'),
    ]
    
    # load-navbar.js replacements: production → local
    js_path = os.path.join(html_dir, "load-navbar.js")
    js_replacements = [
        ("fetch('/navbar.html',", "fetch('./navbar.html',"),
    ]
    
    print(f"\n📄 Updating {os.path.basename(navbar_path)}...")
    replace_in_file(navbar_path, navbar_replacements)
    
    print(f"\n📄 Updating {os.path.basename(js_path)}...")
    replace_in_file(js_path, js_replacements)
    
    print("\n" + "=" * 60)
    print("✅ BUILD COMPLETE - Ready for local testing!")
    print("=" * 60)

if __name__ == "__main__":
    build_for_local()
