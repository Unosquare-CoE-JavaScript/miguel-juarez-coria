# Module 8
## Exercise 7

### Exercise Seven - Rebase and Amend  

### Prerequisite
Checkout the `exercise7` branch:  `git checkout exercise7`  

### Exercises  
1. Make a commit, then practice using the --amend option to make another change to the previous commit.  
```
miguel.coria ~/Documents/advanced-git-exercises [exercise7] $ echo "This is the first file" > first.txt
miguel.coria ~/Documents/advanced-git-exercises [exercise7] $ echo "This is the second file" > second.txt
miguel.coria ~/Documents/advanced-git-exercises [exercise7] $ git add first.txt
miguel.coria ~/Documents/advanced-git-exercises [exercise7] $ git commit -m "Committing two new files"
[exercise7 653157f] Committing two new files
 1 file changed, 1 insertion(+)
 create mode 100644 first.txt
 ```

The file `second.txt` has beeen forgotted in the commit, I'll add it:  
```
miguel.coria ~/Documents/advanced-git-exercises [exercise7] $ git add second.txt
miguel.coria ~/Documents/advanced-git-exercises [exercise7] $ git commit --amend
[exercise7 e8e1f4f] Committing two new files
 Date: Sat May 7 23:54:44 2022 -0600
 2 files changed, 2 insertions(+)
 create mode 100644 first.txt
 create mode 100644 second.txt
```

2. Make two non-conflicting changes to two different branches. Rebase one branch onto the other.  

Let's get things set up for a simple rebase demo. Checkout `master`, and let's pretend that we have a new feature branch, called `exercise7-2`:
```
miguel.coria ~/Documents/advanced-git-exercises [exercise7] $ git checkout master
Switched to branch 'master'
Your branch is up to date with 'origin/master'.
miguel.coria ~/Documents/advanced-git-exercises [master] $ git checkout -b exercise7-2
Switched to a new branch 'exercise7-2'
miguel.coria ~/Documents/advanced-git-exercises [exercise7-2] $ git log --oneline
43388fe (HEAD -> exercise7-2, origin/master, origin/exercise7, origin/exercise4, origin/exercise2, origin/HEAD, master) Initial commit
```

Now let's create a new feature and commit it to our feature branch:  
```
miguel.coria ~/Documents/advanced-git-exercises [exercise7-2] $ echo "New feature" > feature.txt
miguel.coria ~/Documents/advanced-git-exercises [exercise7-2] $ git add feature.txt
miguel.coria ~/Documents/advanced-git-exercises [exercise7-2] $ git commit -m "Adding a new feature"
[exercise7-2 582c024] Adding a new feature
 1 file changed, 1 insertion(+)
 create mode 100644 feature.txt
```

At the same time, let's pretend that our `master` branch has continued to evolve while we were working on this feature:  
```
miguel.coria ~/Documents/advanced-git-exercises [exercise7-2] $ git checkout master
Switched to branch 'master'
Your branch is up to date with 'origin/master'.
miguel.coria ~/Documents/advanced-git-exercises [master] $ echo "Master has continued to change" >> hello.txt
miguel.coria ~/Documents/advanced-git-exercises [master] $ git add hello.txt
miguel.coria ~/Documents/advanced-git-exercises [master] $ git commit -m "Master has continued to change"
[master 43ad443] Master has continued to change
 1 file changed, 1 insertion(+)
 ```

 Switching back to our feature branch. It's a good idea to periodically merge in the` master` branch, to keep things up to date and minimize the number of conflicts when the feature branch is eventually merged into `master`. Instead of creating unsightly merge commits though, let's use rebase to replay our feature commits on top of `master`'s commits.  
```
miguel.coria ~/Documents/advanced-git-exercises [master] $ git checkout exercise7-2
Switched to branch 'exercise7-2'
miguel.coria ~/Documents/advanced-git-exercises [exercise7-2] $ git rebase master
Successfully rebased and updated refs/heads/exercise7-2.
miguel.coria ~/Documents/advanced-git-exercises [exercise7-2] $ git log --oneline
3878e22 (HEAD -> exercise7-2) Adding a new feature
43ad443 (master) Master has continued to change
43388fe (origin/master, origin/exercise7, origin/exercise4, origin/exercise2, origin/HEAD) Initial commit
```

3. Make another change to your current branch. Use an interactive rebase (git rebase -i) to rebase the two branches. Try squashing your two commits and rewording the message during the rebase.  

Let's set up our feature branch for a very simple interactive rebase. Add another new feature and commit it:  
```
miguel.coria ~/Documents/advanced-git-exercises [exercise7-2] $  echo "Another new feature" > another_feature.txt
miguel.coria ~/Documents/advanced-git-exercises [exercise7-2] $ git add another_feature.txt
miguel.coria ~/Documents/advanced-git-exercises [exercise7-2] $ git commit -m "Adding another new feature"
[exercise7-2 8e9ccb8] Adding another new feature
 1 file changed, 1 insertion(+)
 create mode 100644 another_feature.txt
 ```

Now we have two new commits on top of `master`.  
When we're done with our feature, we want to clean these commits up by combining them using `squash`, and changing the commit message using `reword`.  
We have some options for which ref to use. All the options below will get the same result:  
```
miguel.coria ~/Documents/advanced-git-exercises [exercise7-2] $ git rebase -i HEAD~2
[detached HEAD 24e9d04] Adding two new features
 Date: Sun May 8 00:01:51 2022 -0600
 1 file changed, 1 insertion(+)
 create mode 100644 feature.txt
[detached HEAD 38fdb86] Adding two new features
 Date: Sun May 8 00:01:51 2022 -0600
 2 files changed, 2 insertions(+)
 create mode 100644 another_feature.txt
 create mode 100644 feature.txt
Successfully rebased and updated refs/heads/exercise7-2.
```

Now, take a look at your git log:  
```
miguel.coria ~/Documents/advanced-git-exercises [exercise7-2] $ git log --oneline
38fdb86 (HEAD -> exercise7-2) Adding two new features
43ad443 (master) Master has continued to change
43388fe (origin/master, origin/exercise7, origin/exercise4, origin/exercise2, origin/HEAD) Initial commit
```





