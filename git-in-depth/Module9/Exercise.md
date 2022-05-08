# Module 9
## Exercise 8

### Exercise Eight - Forks And Remote Repos  

### Prerequisite
You should have the `advanced-git-exercises` repository cloned locally. Checkout the `master` branch:  

### Exercises  
1. Create your own Github fork of https://github.com/nnja/advanced-git-exercises.  
![Fork repository](https://github.com/Unosquare-CoE-JavaScript/miguel-juarez-coria/blob/main/git-in-depth/assets/fork-repository.png "Fork repository")
Look at your git remotes. Rename your origin remote (nnja's copy) to upstream.  
2. Add your personal fork as the origin remote.  
    - First, if you checked out `advanced-git-exercises` from Nina's Github, you should see something like this:  
    ```
    miguel.coria ~/Documents/advanced-git-exercises [exercise7-2] $ git remote -v
    origin	https://github.com/nnja/advanced-git-exercises.git (fetch)
    origin	https://github.com/nnja/advanced-git-exercises.git (push)
    ```
    Let's rename the `origin` remote to `upstream`:  
    ```
    miguel.coria ~/Documents/advanced-git-exercises [exercise7-2] $ git remote rename origin upstream
    Renaming remote references: 100% (11/11), done.
    miguel.coria ~/Documents/advanced-git-exercises [exercise7-2] $ git remote -v
    upstream	https://github.com/nnja/advanced-git-exercises.git (fetch)
    upstream	https://github.com/nnja/advanced-git-exercises.git (push)
    ```
    Now, let's add a new remote - our fork of the repo. We'll call it origin. Substitute the url with the correct url for your fork. You can find the full url on the Github page for your fork, in the dropdown when you click "Clone or download"
    ```
    miguel.coria ~/Documents/advanced-git-exercises [exercise7-2] $ git remote add origin https://github.com/mcoriaunosquare/advanced-git-exercises.git
    miguel.coria ~/Documents/advanced-git-exercises [exercise7-2] $ git remote -v
    origin	https://github.com/mcoriaunosquare/advanced-git-exercises.git (fetch)
    origin	https://github.com/mcoriaunosquare/advanced-git-exercises.git (push)
    upstream	https://github.com/nnja/advanced-git-exercises.git (fetch)
    upstream	https://github.com/nnja/advanced-git-exercises.git (push)
    ```


3. Nina will make a change to her copy of the repo. Make a different change to your local repo, then use git pull --rebase to merge them.   
```
miguel.coria ~/Documents/advanced-git-exercises [exercise7-2] $ git checkout master
Switched to branch 'master'
Your branch is ahead of 'upstream/master' by 1 commit.
  (use "git push" to publish your local commits)

miguel.coria ~/Documents/advanced-git-exercises [master] $ git push -u origin master
branch 'master' set up to track 'origin/master'.
Everything up-to-date
```

Now we'll make a new `feature` branch locally and add a change to it.:  
```
miguel.coria ~/Documents/advanced-git-exercises [master] $ git checkout -b 'feature'
Switched to a new branch 'feature'
miguel.coria ~/Documents/advanced-git-exercises [feature] $ echo "Change to local repo" > local_change.txt
miguel.coria ~/Documents/advanced-git-exercises [feature] $ git add local_change.txt
miguel.coria ~/Documents/advanced-git-exercises [feature] $ git commit -m "Change to local repo"
[feature df42413] Change to local repo
 1 file changed, 1 insertion(+)
 create mode 100644 local_change.txt
```
Now that we have a change in our local repo feature branch, and a change in our `upstream` repo, let's pull in the changes from the `upstream` repo without an unsightly merge commit in our feature branch:  
```
miguel.coria ~/Documents/advanced-git-exercises [feature] $ git pull --rebase upstream master
From https://github.com/nnja/advanced-git-exercises
 * branch            master     -> FETCH_HEAD
Current branch feature is up to date.
miguel.coria ~/Documents/advanced-git-exercises [feature] $ git log --oneline
df42413 (HEAD -> feature) Change to local repo
43ad443 (origin/master, master) Master has continued to change
43388fe (upstream/master, upstream/exercise7, upstream/exercise4, upstream/exercise2, upstream/HEAD) Initial commit
```


