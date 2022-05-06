# Module 4
## Exercise 3 

### Exercise Three - References

### Prerequisite - checkout to exercise3 branch
```
miguel.coria ~/Documents/advanced-git-exercises [exercise2] $ git checkout exercise3
Switched to branch 'exercise3'
Your branch is up to date with 'origin/exercise3'.
```

### Exercises
1. Check the value of your HEAD variable (hint: look in .git) and confirm you're pointed at the exercise3 branch.  
```
miguel.coria ~/Documents/advanced-git-exercises [exercise3] $ cat .git/HEAD
ref: refs/heads/exercise3
```

```
miguel.coria ~/Documents/advanced-git-exercises [exercise3] $  git branch
  exercise2
* exercise3
  master
  ```

2. Use show-ref to look at your other heads.  
```
miguel.coria ~/Documents/advanced-git-exercises [exercise3] $ git show-ref --heads
6f67c3eaf7a11e0f69cfa4f5356d14aa587a1111 refs/heads/exercise2
e348ebc1187cb3b4066b1e9432a614b464bf9d07 refs/heads/exercise3
43388fee19744e8893467331d7853a6475a227b8 refs/heads/master
```
Look at the reference for my `master branch`:  
```
miguel.coria ~/Documents/advanced-git-exercises [exercise3] $ git show-ref --heads | grep master
43388fee19744e8893467331d7853a6475a227b8 refs/heads/master
```

As we can see our `master` branch is pointint to the initial commit:  
```
miguel.coria ~/Documents/advanced-git-exercises [exercise3] $ git cat-file -p 43388
tree 581caa0fe56cf01dc028cc0b089d364993e046b6
author Nina Zakharenko <nina@nnja.io> 1507168309 -0700
committer Nina Zakharenko <nina@nnja.io> 1507168309 -0700

Initial commit
```

Our `Exercise3` branch is pointing to `Exercise2` branch from the last commit:  
```
miguel.coria ~/Documents/advanced-git-exercises [exercise3] $ git cat-file -p e348e
tree cbcdf5dda7853d595fe0b1942cb0d1d72eb910f3
parent 43388fee19744e8893467331d7853a6475a227b8
author Nina Zakharenko <nina@nnja.io> 1507168872 -0700
committer Nina Zakharenko <nina@nnja.io> 1507168872 -0700

Testing the emergency git-casting system
```

3. Create a lightweight tag and confirm that it's pointing at the right commit.  
Creating the tag:  
```
miguel.coria ~/Documents/advanced-git-exercises [exercise3] $ git tag my-exercise3-tag
miguel.coria ~/Documents/advanced-git-exercises [exercise3] $ git tag                 
my-exercise3-tag
```
...and conforming that is pointing to the correct commit:  
```
miguel.coria ~/Documents/advanced-git-exercises [exercise3] $ git show-ref --tags
e348ebc1187cb3b4066b1e9432a614b464bf9d07 refs/tags/my-exercise3-tag
```
```
Doing a reverse look up:  
miguel.coria ~/Documents/advanced-git-exercises [exercise3] $ git tag --points-at e348ebc
my-exercise3-tag
```

4. Create an annotated tag, and use git show to see more information about it.  
```
miguel.coria ~/Documents/advanced-git-exercises [exercise3] $ git tag -a "exercise3-annotated-tag" -m "This is my annotated tag for exercise 3"

miguel.coria ~/Documents/advanced-git-exercises [exercise3] $ git show exercise3-annotated-tag
tag exercise3-annotated-tag
Tagger: Miguel Coria <miguel.coria@unosquare.com>
Date:   Fri May 6 08:20:29 2022 -0600

This is my annotated tag for exercise 3

commit e348ebc1187cb3b4066b1e9432a614b464bf9d07 (HEAD -> exercise3, tag: my-git-tag, tag: my-exercise3-tag, tag: exercise3-annotated-tag, origin/exercise3)
Author: Nina Zakharenko <nina@nnja.io>
Date:   Wed Oct 4 19:01:12 2017 -0700

    Testing the emergency git-casting system

diff --git a/hello.txt b/hello.txt
index 980a0d5..b31a35b 100644
--- a/hello.txt
+++ b/hello.txt
@@ -1 +1,2 @@
 Hello World!
+This is a test of the emergency git-casting system.
```

5. Get into a "detached HEAD" state by checking out a specific commit, then confirm that your HEAD is pointing at this commit rather than at a branch.  
Verifying the latest commit directly:  

```
git log --oneline
e348ebc (HEAD -> exercise3, tag: my-git-tag, tag: my-exercise3-tag, tag: exercise3-annotated-tag, origin/exercise3) Testing the emergency git-casting system
43388fe (origin/master, origin/exercise7, origin/exercise4, origin/exercise2, origin/HEAD, master) Initial commit

miguel.coria ~/Documents/advanced-git-exercises [exercise3] $ git checkout e348ebc
Note: switching to 'e348ebc'.

You are in 'detached HEAD' state. You can look around, make experimental
changes and commit them, and you can discard any commits you make in this
state without impacting any branches by switching back to a branch.

If you want to create a new branch to retain commits you create, you may
do so (now or later) by using -c with the switch command. Example:

  git switch -c <new-branch-name>

Or undo this operation with:

  git switch -

Turn off this advice by setting config variable advice.detachedHead to false

HEAD is now at e348ebc Testing the emergency git-casting system
```

6. Make a new commit, then switch branches to confirm that you're leaving a commit behind.  
```
miguel.coria ~/Documents/advanced-git-exercises [(HEAD detached at e348ebc)] $ echo "This is a test file" > dangle.txt
miguel.coria ~/Documents/advanced-git-exercises [(HEAD detached at e348ebc)] $ git add dangle.txt
miguel.coria ~/Documents/advanced-git-exercises [(HEAD detached at e348ebc)] $ git commit -m "This is a dangling commit"
[detached HEAD fb3dd08] This is a dangling commit
 1 file changed, 1 insertion(+)
 create mode 100644 dangle.txt
 ```

 Let's show the commits:  
 ```
miguel.coria ~/Documents/advanced-git-exercises [(HEAD detached from e348ebc)] $ git log --oneline
fb3dd08 (HEAD) This is a dangling commit
e348ebc (tag: my-git-tag, tag: my-exercise3-tag, tag: exercise3-annotated-tag, origin/exercise3, exercise3) Testing the emergency git-casting system
43388fe (origin/master, origin/exercise7, origin/exercise4, origin/exercise2, origin/HEAD, master) Initial commit
```

As we can see the `HEAD` is pointing to the `dangling commit`:  
```
miguel.coria ~/Documents/advanced-git-exercises [(HEAD detached from e348ebc)] $ cat .git/HEAD
fb3dd08b4c58a29475beb21bc4b755760e20585f
```

If we try to checkout thhe branch a warning shows:  
```
miguel.coria ~/Documents/advanced-git-exercises [(HEAD detached from e348ebc)] $ git checkout exercise3 
Warning: you are leaving 1 commit behind, not connected to
any of your branches:

  fb3dd08 This is a dangling commit

If you want to keep it by creating a new branch, this may be a good time
to do so with:

 git branch <new-branch-name> fb3dd08

Switched to branch 'exercise3'
Your branch is up to date with 'origin/exercise3'.
```

