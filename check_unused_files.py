import os

EXCLUDE_DIRS = {'.git', 'node_modules', '.agent', '__pycache__', '.vscode', '.idea'}
EXTENSIONS_TO_SCAN = {'.html', '.css', '.js', '.ts', '.tsx', '.jsx', '.json', '.md'}
ENTRY_POINTS = {'index.html', 'playground.html', 'about.html', 'resume.html'}

def get_all_files(root_dir):
    all_files = []
    for root, dirs, files in os.walk(root_dir):
        # Filter directories in-place
        dirs[:] = [d for d in dirs if d not in EXCLUDE_DIRS]
        
        for file in files:
            if file == '.DS_Store':
                continue
            full_path = os.path.join(root, file)
            rel_path = os.path.relpath(full_path, root_dir)
            all_files.append(rel_path)
    return all_files

def is_referenced(target_file, all_files, root_dir):
    target_basename = os.path.basename(target_file)
    target_name_no_ext = os.path.splitext(target_basename)[0]
    
    # Check if it's an entry point
    if target_file in ENTRY_POINTS:
        return True

    # Check content of scan-able files
    for file in all_files:
        if file == target_file:
            continue
            
        _, ext = os.path.splitext(file)
        if ext not in EXTENSIONS_TO_SCAN:
            continue
            
        try:
            with open(os.path.join(root_dir, file), 'r', encoding='utf-8', errors='ignore') as f:
                content = f.read()
                # Check for relative path or basename match
                # This is a heuristic.
                if target_basename in content:
                    return True
                # If target is index.html, handled by ENTRY_POINTS
                # If target is foo.png, check if foo.png is in content
        except Exception:
            continue
            
    return False

def main():
    root_dir = os.getcwd()
    all_files = get_all_files(root_dir)
    unused_files = []

    print(f"Scanning {len(all_files)} files...")

    for file in all_files:
        if not is_referenced(file, all_files, root_dir):
            unused_files.append(file)

    print("\n--- Potentially Unused Files ---")
    for f in sorted(unused_files):
        print(f)

if __name__ == "__main__":
    main()
