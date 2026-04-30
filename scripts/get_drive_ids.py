"""
Run this script to generate the config entries for Google Drive files.
For each PDF in your Drive folder:
  1. Right-click the file → Share → Copy link
  2. Paste the link below in the links dict

Format of a Drive share link:
  https://drive.google.com/file/d/FILE_ID/view?usp=sharing

The FILE_ID is the part between /d/ and /view
"""

import re

def extract_id(link):
    match = re.search(r'/d/([a-zA-Z0-9_-]{25,})', link)
    return match.group(1) if match else None

def drive_view(file_id):
    return f"https://drive.google.com/file/d/{file_id}/view"

# Paste your share links here (filename: link)
links = {
    # PAPERS - paste share link for each
    "HR_CR_MMS": "",
    "GFRP": "",
    "Stacking_Fault_Energy": "",
    "Materials_Chemistry_2021": "",
    "Materials_Characterization_2023": "",
    "TMS_2023": "",
    "Steel_Research_2024": "",
    "Materials_Today_2024": "",
    "Metallurgical_2025": "",
    "TMS_2025": "",
    "Materials_Today_2025_Hot_Def": "",
    "Materials_Science_Tech_2025": "",

    # PATENTS - paste share link for each
    "MMS_HR_Patent": "",
    "MMS_CR_Patent": "",
    "US_Patent": "",
    "API_X70_Patent": "",
    "CR_Strip_Patent": "",
    "BSK46_Patent": "",
    "DP600_Patent": "",
    "SPFH590_Patent": "",
    "MMS_Ductility_Patent": "",
}

print("\n--- Extracted Drive IDs ---\n")
for name, link in links.items():
    if link:
        fid = extract_id(link)
        if fid:
            print(f"{name}: {drive_view(fid)}")
        else:
            print(f"{name}: INVALID LINK")
    else:
        print(f"{name}: NOT PROVIDED")
