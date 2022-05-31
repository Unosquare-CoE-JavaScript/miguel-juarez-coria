# Module 3

## Git Areas and Stashing
**Working Areas, Staging, Areas, Repository**  
![Working Areas, Staging, Areas, Repository](https://github.com/Unosquare-CoE-JavaScript/miguel-juarez-coria/blob/main/git-in-depth/assets/images/working-area-staging-area-repo.png "Working Areas, Staging, Areas, Repository")

- The stagging area is how gits knows what will change between the current commit and the next commit.  
- Tip: a "clean" staging area isn't empty!  
- Consider the baseline staging area as being an exact copy of the latest commit.  

The plumbing command `ls-files -s` whill show you what's in the stagging area:  

    miguel.coria ~/Documents/courses [main] $ git ls-files -s
    100644 146d9c9dc41f1921f2b202f5eeadd797f0e124ef 0	.DS_Store
    100644 e32c300ba12c18dd6b25506269e883ca2170749b 0	git-in-depth/.DS_Store
    100644 7a29782bf7073dd1de061b7b65085f0c9a6facb1 0	git-in-depth/Module1/.DS_Store
    100644 b6c0e84e5c6bca28beb8ec63cdc94e5e9f48009d 0	git-in-depth/Module1/README.md
    100644 db732f5e8bd810e9a6aebba00c9fe91f77ea78f3 0	git-in-depth/Module2/Exercise1.md
    100644 20b91dbea9c3a6316129084e6c67696f69b7d8bf 0	git-in-depth/Module2/README.md
    100644 7e17a4d1ab789411ede2c64ca76d8ebb351cc9fd 0	git-in-depth/README.md
    100644 4042ac2468bea7834a8a06775d3006f19f3597f6 0	git-in-depth/assets/.DS_Store
    100644 169f5389928fe5b95ed4f2e83e064a19ff6806b4 0	git-in-depth/assets/images/.DS_Store
    100644 a52f4037ab1fa1cc6ff92cb9472f6b61492420fb 0	git-in-depth/assets/images/commit-example.png
    100644 1007a6f0176eb8432a65490c851fc3b0f6caf54f 0	git-in-depth/assets/images/exercise-1.png
    100644 23b48334f5e94346e9c9f7f17c46ba8ca960d826 0	git-in-depth/assets/images/exercise-2.png
    100644 a38747af452955e7cfde347a0034015184fcef00 0	git-in-depth/assets/images/exercise-3.png
    100644 d2918013327b2c6cc9d68e22723aa0b688515c1a 0	git-in-depth/assets/images/exercise-4.png
    100644 f6f8489dda2bf676776dbfff5b446864f2a95a8c 0	git-in-depth/assets/images/exercise-5.png
    100644 db8f8464506cc4ebcc7781baa66f057e43ddf373 0	git-in-depth/assets/images/how-you-dont-use git.png
    100644 60599c69dbf0281e1e73ef7547f2b5ae450bc256 0	git-in-depth/assets/images/tree-and-blobs-structure.png
    100644 a603eb65452b1743907f215b0a75efe19da7bdbc 0	git-in-depth/assets/images/tree-and-blobs.png

**Moving files in & out of the staging area**  
- Add file to the next commit: `git add <file>`  
- Delete file in the next commit: `git rm <file>`  
- Rename a file in the next commit: `git mv <file>`  

To add all the files (modified, deleted and added) to the stage we will use:  
`git add -A`  

To select which files to add to the stage:  
`git add -p`

## Git Stash  
- Save un-commited work.  
- The stash is **safe** from destructive operations.  
    Basic usage:  
    - stash changes `git stash`  
    - list changes `git stash list`  
    - show the contents `git stash show stash@{0}`  
    - apply the last stash `git stash apply`  
    - apply a specific stash `git stash apply stash @{0}`  
    
    Advanced stashing:  
    - Keep untracked files: `git stash --include-untracked`  
    - Keep all files: `git stash --all`  
    - Name stashes for easy reference: `git stash save "WIP: Starting to develop"`  
    - Start a new branch from a stash: `git stash branch <optional stah name>`  
    - grab s single file from a stash: `git checkout <stash name> --<filename>`  

