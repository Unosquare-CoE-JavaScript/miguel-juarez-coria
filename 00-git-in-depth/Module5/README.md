# Module 5

## Merging and Rebasing
Under the hood, `merge commits are just commits`.  
One commit may have more than 1 parent:  
![One commit - 2 parents example](https://github.com/Unosquare-CoE-JavaScript/miguel-juarez-coria/blob/main/git-in-depth/assets/images/one-commit-two-parents.png "One commit - 2 parents example")  

## Merge conflicts  
- Attempt to merge, but files have diverged.  
- Git stops until the conflicts are resolved.  
![Merge conlicts](https://github.com/Unosquare-CoE-JavaScript/miguel-juarez-coria/blob/main/git-in-depth/assets/images/merge-conlicts.png "Merge conlicts")  

Git uses a tool called `RERERE - REuse REcorded REsolution` to resolve conflicst in your commits. Git save how you resolve a problem and the next time Git will reuse the same resolution.  

It's useful for `long lived feature branch (refactoring)` and `rebasing`.  
**Who do we use it?**  
Turn it on `git config rerere.enabled true`: It applies only to your current projects  
Use `--global` flag to enable for all projects  
