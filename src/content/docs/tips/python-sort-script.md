---
title: "Python File Sorting Script"
date: "2024-01-01"
description: "Script to automatically sort school subject files into directories by keyword matching."
pageOrder: 5
---

A Python script that scans files in a directory and sorts them into subject-specific folders based on keyword matching.

## How It Works

The script reads filenames and checks for subject keywords (Biology, Chemistry, Physics, Maths, etc.). It then moves each file into the corresponding folder.

## Script

```python
import os
import shutil

# Define subject folders and their keywords
subject_map = {
    "Biology": ["bio", "biology"],
    "Catechism": ["catechism", "cate"],
    "Chemistry": ["chem", "chemistry"],
    "Computer Science": ["computer", "cs", "comp"],
    "English": ["english", "eng"],
    "General": ["general"],
    "Maths": ["maths", "math", "mathematics"],
    "Physics": ["physics", "phy"],
}

source_dir = "."  # change to your target folder

for filename in os.listdir(source_dir):
    if os.path.isfile(os.path.join(source_dir, filename)):
        name_lower = filename.lower()
        for subject, keywords in subject_map.items():
            if any(kw in name_lower for kw in keywords):
                dest_dir = os.path.join(source_dir, subject)
                os.makedirs(dest_dir, exist_ok=True)
                shutil.move(
                    os.path.join(source_dir, filename),
                    os.path.join(dest_dir, filename)
                )
                print(f"Moved {filename} -> {subject}/")
                break
```

## Usage

1. Save the script as `sort_files.py` in the folder containing your unsorted files
2. Update the `subject_map` with your own subjects and keywords
3. Run `python sort_files.py`
