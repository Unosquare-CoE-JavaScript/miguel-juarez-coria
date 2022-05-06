# Module 6

## History & Diffs  
**Goods commits are important**  
- Good commits help preserve the history of a code base.  
- They help with:  
    - debugging & troubleshooting  
    - creating release notes  
    - code reviews  
    - rolling back  
    - associating the code with an issue or ticket  

**Anatomy of a good commit**  
- Good commit message  
- Encapsulates one logical idea  
- Doesn't introduce breaking changes  

**Git log --since**
- The site is slow. What changed since yesterday?  
    - `git log --since="yesterday"`  
    - `git log --since="2 weeks ago"`  

**Git log --grep**  
- Search for commit messages that match a regualr expression:  
    - `git log -grep <regexp>`  
    - Can be mixed & matched with other git flags.  
    - Example: `git log --grep=mail --author=nina --since=2.ago`

**Git Show and Diffs**  
- show commits and contents: `git show <commit>`  
- show files changed in commit: `git show <commit> --stat`  
- look at a file from another commit: `git show <commit>:<file>`  

- Diffs shows you changes:  
    - between commits  
    - between the staging area and the repository  
    - what's in the working area  
- unstaged changes `git diff`  
- staged changes `git diff --staged`  

Example of diff commits and branches:  
![Diff commits & branches](https://github.com/Unosquare-CoE-JavaScript/miguel-juarez-coria/blob/main/git-in-depth/assets/images/diff-commits-and-branches.png "Diff commits & branches")

Which branches are merged with master: `git branch --merged master`  
Which branches are not merged with master yet: `git branch --no-merged master`  

