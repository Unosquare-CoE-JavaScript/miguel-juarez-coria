# Module 7
## Exercise 6

### Exercise Six - Fixing Mistakes

### Prerequisite
You should have the `advanced-git-exercises` repository cloned locally. Checkout the `exercise` branch:  `git checkout exercise6`  

### Exercises  
1. Make bad changes to a file, then use `git checkout` to fix it. Use `git checkout` to reset your file back to an earlier point in time.  
```
miguel.coria ~/Documents/advanced-git-exercises [exercise6] $ echo "Bad data" > hello.template
miguel.coria ~/Documents/advanced-git-exercises [exercise6] $ cat hello.template
Bad data
```
Oops, we messed up our hello.template. No worries, the mistake hasn't been committed yet, so we'll just check out the last committed version of hello.template from the repository, overwriting the working area:  
```
miguel.coria ~/Documents/advanced-git-exercises [exercise6] $ git checkout -- hello.template
miguel.coria ~/Documents/advanced-git-exercises [exercise6] $ cat hello.template
[greeting] [noun]!
This is a test of the emergency git-casting system.
```
And, all is right again. Let's say we want to check out a file from a specific point in time. For example, we want to see what hello.txt was like before it was templatized:  

```
# Let's find the commit where hello.txt was renamed to hello.template
miguel.coria ~/Documents/advanced-git-exercises [exercise6] $ git log --name-status --follow --oneline hello.template
4b2b90e (HEAD -> exercise6, origin/exercise6) Replacing greeting with tokens for i18n
R073    hello.txt       hello.template
fec9e7b Changing Hello to Hola
M       hello.txt

# Now let's checkout hello.txt from one commit before then
miguel.coria ~/Documents/advanced-git-exercises [exercise6] $ cat hello.txt
Hola World!
This is a test of the emergency git-casting system.
```

Then let's go ahead and delete our hello.template file:  
```
miguel.coria ~/Documents/advanced-git-exercises [exercise6] $ git reset HEAD hello.txt
miguel.coria ~/Documents/advanced-git-exercises [exercise6] $ git rm hello.template
rm 'hello.template'
miguel.coria ~/Documents/advanced-git-exercises [exercise6] $ git status
On branch exercise6
Your branch is up to date with 'origin/exercise6'.

Changes to be committed:
  (use "git restore --staged <file>..." to unstage)
	deleted:    hello.template

Untracked files:
  (use "git add <file>..." to include in what will be committed)
	hello.txt

miguel.coria ~/Documents/advanced-git-exercises [exercise6] $ git commit -m "Deleting hello.template"
[exercise6 e8480f5] Deleting hello.template
 1 file changed, 2 deletions(-)
 delete mode 100644 hello.template
 ```

 Later on, we decide that deleting hello.template was an accident. Let's track down where we deleted it, and bring it back:  
 ```
 miguel.coria ~/Documents/advanced-git-exercises [exercise6] $ git log --diff-filter=D --oneline -- hello.template
e8480f5 (HEAD -> exercise6) Deleting hello.template

# Ah, it was deleted at 713f6a1. Let's use the caret (^) syntax to checkout hello.template from one commit before that
git checkout e8480f5^ -- hello.template

miguel.coria ~/Documents/advanced-git-exercises [exercise6] $ git checkout e8480f5^ -- hello.template

miguel.coria ~/Documents/advanced-git-exercises [exercise6] $ git status
On branch exercise6
Your branch is ahead of 'origin/exercise6' by 1 commit.
  (use "git push" to publish your local commits)

Changes to be committed:
  (use "git restore --staged <file>..." to unstage)
	new file:   hello.template

Untracked files:
  (use "git add <file>..." to include in what will be committed)
	hello.txt

miguel.coria ~/Documents/advanced-git-exercises [exercise6] $ cat hello.template
[greeting] [noun]!
This is a test of the emergency git-casting system.
 ```
Excellent, we now have our hello.template file back in our staging area and working area.  

2. Use `git clean` to remove untracked files from your repo. Remember to use `--dry-run` first.

```
miguel.coria ~/Documents/advanced-git-exercises [exercise6] $ git clean --dry-run
Would remove hello.txt
miguel.coria ~/Documents/advanced-git-exercises [exercise6] $ git clean -f
Removing hello.txt
```

3. Stage a change and then use `git reset` to unstage it. Use `git reset --hard` to reset your branch back pointer, staging area, and working area to an earlier commit. Use "mixed mode" to reset your branch back to an earlier commit, then use `ORIG_HEAD` to reset your branch back to where you were.
- We need to stage `hello.template` after were deleted it.  
```
miguel.coria ~/Documents/advanced-git-exercises [exercise6] $ git status
On branch exercise6
Your branch is ahead of 'origin/exercise6' by 1 commit.
  (use "git push" to publish your local commits)

Changes to be committed:
  (use "git restore --staged <file>..." to unstage)
	new file:   hello.template
```

Let's use `git reset` to unstage it. By default, if you don't specify an argument to `git reset`, it'll assume you meant `HEAD`.  
```
miguel.coria ~/Documents/advanced-git-exercises [exercise6] $ git reset -- hello.template
miguel.coria ~/Documents/advanced-git-exercises [exercise6] $ git status
On branch exercise6
Your branch is ahead of 'origin/exercise6' by 1 commit.
  (use "git push" to publish your local commits)

Untracked files:
  (use "git add <file>..." to include in what will be committed)
	hello.template

nothing added to commit but untracked files present (use "git add" to track)
```

We'll find the last commit before we deleted `hello.template` file:
```
miguel.coria ~/Documents/advanced-git-exercises [exercise6] $ git log --oneline
e8480f5 (HEAD -> exercise6) Deleting hello.template
4b2b90e (origin/exercise6) Replacing greeting with tokens for i18n
ff91b70 (origin/exercise5) Merging in mundo branch
fec9e7b Changing Hello to Hola
4582f72 Merge branch 'exercise3' into exercise4
afa34a6 Changing World to Mundo
7ea8b01 Merge branch 'exercise3' into exercise4
e348ebc (tag: my-git-tag, tag: my-exercise3-tag, tag: exercise3-annotated-tag, origin/exercise3, exercise3) Testing the emergency git-casting system
43388fe (origin/master, origin/exercise7, origin/exercise4, origin/exercise2, origin/HEAD, master) Initial commit
miguel.coria ~/Documents/advanced-git-exercises [exercise6] $ rm hello.template
miguel.coria ~/Documents/advanced-git-exercises [exercise6] $ cat hello.template
cat: hello.template: No such file or directory
miguel.coria ~/Documents/advanced-git-exercises [exercise6] $ git reset 4b2b90e -- hello.template
Unstaged changes after reset:
D	hello.template
miguel.coria ~/Documents/advanced-git-exercises [exercise6] $ git status
On branch exercise6
Your branch is ahead of 'origin/exercise6' by 1 commit.
  (use "git push" to publish your local commits)

Changes to be committed:
  (use "git restore --staged <file>..." to unstage)
	new file:   hello.template

Changes not staged for commit:
  (use "git add/rm <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
	deleted:    hello.template

miguel.coria ~/Documents/advanced-git-exercises [exercise6] $ cat hello.template
cat: hello.template: No such file or directory
miguel.coria ~/Documents/advanced-git-exercises [exercise6] $ git reset 4b2b90e -- hello.template
Unstaged changes after reset:
D	hello.template
miguel.coria ~/Documents/advanced-git-exercises [exercise6] $ git status
On branch exercise6
Your branch is ahead of 'origin/exercise6' by 1 commit.
  (use "git push" to publish your local commits)

Changes to be committed:
  (use "git restore --staged <file>..." to unstage)
	new file:   hello.template

Changes not staged for commit:
  (use "git add/rm <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
	deleted:    hello.template

miguel.coria ~/Documents/advanced-git-exercises [exercise6] $ cat hello.template
cat: hello.template: No such file or directory
```

4. Practice using `git revert` to safely revert a commit with a new commit.
Let's say we want to undo deleting `hello.template`, but don't want to alter history. Reverts don't look as nice in your history, but are a safer option when working with collaborators.

```
miguel.coria ~/Documents/advanced-git-exercises [exercise6] $ git log -1 --oneline
e8480f5 (HEAD -> exercise6) Deleting hello.template

miguel.coria ~/Documents/advanced-git-exercises [exercise6] $ git revert e8480f5
[exercise6 2a75789] Revert "Deleting hello.template"
 1 file changed, 2 insertions(+)
 create mode 100644 hello.template
 ```
  
  ## End of Exercise Six