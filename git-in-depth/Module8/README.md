# Module 8

## Rebase and Amend  
### Git amend  
Amend is a quick and easy shortcut that lest you marke changes to the previous commit.  
![Git ammend](https://github.com/Unosquare-CoE-JavaScript/miguel-juarez-coria/blob/main/git-in-depth/assets/images/git-ammend.png "Git ammend")

### Git rebase  
This make resolving merge conflicts much easier.  It's a recommendation use `git rebase` in local.

### Merge vs Rebase  
![Merge vs Rebase](https://github.com/Unosquare-CoE-JavaScript/miguel-juarez-coria/blob/main/git-in-depth/assets/images/merge-vs-rebase.png "Merge vs Rebase")
- Both are important commands and any is not better than the other. `git merge` will create extra commit and can be confusing get a lot of merge un our history. `git rebase` modifies the history of the ccommits and it must be used carefully.  

### Fixup & Autosquash  
**Fixup** is used to ammend any arbitrary commit:  
1. `git add new files`  
2. `git commit --fixup <SHA>`  
    - It's create a nre commit, the message starts with 'fixup!'  
3. `git rebase -i --autosquash <SHA>^`  
4. git will generate the right todos for you.  

**Autosquash**  
It's the same as `fixup` but will mix commits and messages, except the first line.  
![Merge vs Rebase](https://github.com/Unosquare-CoE-JavaScript/miguel-juarez-coria/blob/main/git-in-depth/assets/images/merge-vs-rebase.png "Merge vs Rebase")

**Rebase Abort**  
If things are going wrong `git rebase --abort`  
> `Rebase pro-tip`  
Before you `rebase/fixup/squash/reorder`:  
> - Make a copy of the current branch:  
>   `git branch my_branch_backup`  
> If rebase "succeds" but you messed up:  
>   `git reset my_branch_backup --hard`  

**Rebase advantages**  
- You can slice and dice your git history.  
- It's easy to fix previous mistakes in code.  
- You can keep your git history neat and clean.  

**Commit early & often VS Good commits**  
- Git best practice: "commit often, perfect later, publish once"  
- When working locally:  
    - Commit whenever you make changes! 
    - It'll help you be a more productive developer.  
- Before pushing work to a shared repo:  
    - Rebase a clean up to commit history  

*Never rewrite public history*  
- Rebase commits are copies  
- If other people are working on the same repository they would be working on diferrent commits  
- You could cause massive merge conflicts  
- Even worse, you can cause people to lose their work!  




