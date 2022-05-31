# Module 7

## Fixing Mistakes  
### Git checkout  
    - checkout
    - reset
    - revert
    - clean

Restore working tree files or switch branches  
![Restore working tree files or switch branches](https://github.com/Unosquare-CoE-JavaScript/miguel-juarez-coria/blob/main/git-in-depth/assets/images/restore-working-tree-files-or-switch-branches.png "Restore working tree files or switch branches")

**Whats happens when you git checkout a branch?**  
1. Change to point to a new branch  
2. Copy the commit shapshot to the staging area  
3. Update the working area with the branches content  

**Whats happens when you git checkout a file?**  
Git replace the `working area` copy with the version from the current `staging area`, *this is a disruptive operation*.  
 ![Git checkout files](https://github.com/Unosquare-CoE-JavaScript/miguel-juarez-coria/blob/main/git-in-depth/assets/images/git-checkout-files.png "Git checkout files")
> This operation overwrites files in the working directory without warning  

**Whats happens when you overwrite files with staging area copy?**  
1. Overwrite the working area file with the staging area version from the last commit `git checkout --<file_path>`  
> This operation overwrites files in the working directory without warning  

**Whats happens when you git checkout <commit> --file?**  
1. Update the stagging area to match the commit.  
2. Update the working area to match the staging area. 
> This operation overwrites files in the working directory without warning  

**Whats happens when you git checkout to a specific commit?**  
1. Copies to both working area & staging area: `git checkout <commit> --<file>`  
2. Restore a deleted file: `git checkout <deleting_commit>ˆ --<file_path>`  
> This operation overwrites files in the working directory without warning  

### Git Clean & Reset  
1. `git clean` will clean your working area by **deleting** untracked files.  
2. Use the `--dry-run` flag to see what would be deleted (The `-f` to do the deletion, `-d` to delete files and directories)  
3. `git reset` perform different actions depending on the arguments:  
    - with a path  
    - without a path  
> A big difference between `git reset` and `git checkout` is `git checkout` will move the **head** but the branch stays where it was. `git reset` moves the head and it'll move the branch reference, meaning your branch is now modified.  
4. For **commits** `git reset` moves the head pointer and optionally modifies files.  
5. For **file paths** `git reset` does not move the head pointer, it's just going to modify files.  

## Git Revert 
1. Git revert creates a new commit that introduces the opposite changes from the specified commit.  
2. The original commit stays in the repository.  
    - **Tip:** Use revert if you're undoing a commit that has already been shared. Revert **does not** change history.
