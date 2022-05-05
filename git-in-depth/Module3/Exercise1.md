# Module 3
## Exercise 1  

### Exercise Two - Staging and Stashing  

### Prerequisite - clonning the repo
```
miguel.coria ~/Documents  $ git clone https://github.com/nnja/advanced-git-exercises.git
Cloning into 'advanced-git-exercises'...
remote: Enumerating objects: 28, done.
remote: Counting objects: 100% (3/3), done.
remote: Compressing objects: 100% (3/3), done.
remote: Total 28 (delta 0), reused 0 (delta 0), pack-reused 25
Receiving objects: 100% (28/28), done.
Resolving deltas: 100% (1/1), done.
miguel.coria ~/Documents  $ 

```

### Exercises
1. Use `git ls-files -s` to view the contents of the staging area.
```
miguel.coria ~/Documents/advanced-git-exercises [exercise2] $ git ls-files -s
100644 980a0d5f19a64b4b30a87d4206aade58726b60e3 0	hello.txt
```

2. Make a change and try to stage it interactively (`git add -p`).
```
miguel.coria ~/Documents/advanced-git-exercises [exercise2] $ echo "This is a test of the emergency git-casting system." >> hello.txt

miguel.coria ~/Documents/advanced-git-exercises [exercise2] $ git add -p
diff --git a/hello.txt b/hello.txt
index 980a0d5..b31a35b 100644
--- a/hello.txt
+++ b/hello.txt
@@ -1 +1,2 @@
 Hello World!
+This is a test of the emergency git-casting system.
(1/1) Stage this hunk [y,n,q,a,d,e,?]? ?
y - stage this hunk
n - do not stage this hunk
q - quit; do not stage this hunk or any of the remaining ones
a - stage this hunk and all later hunks in the file
d - do not stage this hunk or any of the later hunks in the file
e - manually edit the current hunk
? - print help
@@ -1 +1,2 @@
 Hello World!
+This is a test of the emergency git-casting system.
(1/1) Stage this hunk [y,n,q,a,d,e,?]? y

miguel.coria ~/Documents/advanced-git-exercises [exercise2] $ git status
On branch exercise2
Your branch is up to date with 'origin/exercise2'.

Changes to be committed:
  (use "git restore --staged <file>..." to unstage)
	modified:   hello.txt

```

3. Use `git reset` to undo the staging of your file.
```
miguel.coria ~/Documents/advanced-git-exercises [exercise2] $ git reset hello.txt
Unstaged changes after reset:
M	hello.txt

miguel.coria ~/Documents/advanced-git-exercises [exercise2] $ git status
On branch exercise2
Your branch is up to date with 'origin/exercise2'.

Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
	modified:   hello.txt

no changes added to commit (use "git add" and/or "git commit -a")
```

4. Stash your change with a unique stash message, then unstash and apply it back to the `exercise2` branch.
```
miguel.coria ~/Documents/advanced-git-exercises [exercise2] $ git stash
Saved working directory and index state WIP on exercise2: 43388fe Initial commit

miguel.coria ~/Documents/advanced-git-exercises [exercise2] $ git status
On branch exercise2
Your branch is up to date with 'origin/exercise2'.

nothing to commit, working tree clean
```

To see our stash list:  
```
miguel.coria ~/Documents/advanced-git-exercises [exercise2] $ git stash show stash@{0}
 hello.txt | 1 +
 1 file changed, 1 insertion(+)
```

Applying our change:  
```
miguel.coria ~/Documents/advanced-git-exercises [exercise2] $ git stash apply stash@{0}
On branch exercise2
Your branch is up to date with 'origin/exercise2'.

Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
	modified:   hello.txt

no changes added to commit (use "git add" and/or "git commit -a")
```




