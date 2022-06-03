# Module 5
## Exercise 4 

### Exercise Four - Merging and ReReRe  

### Prerequisite - checkout to exercise4 branch
You should have the advanced-git-exercises repository cloned locally. Checkout the exercise4 branch:  
```
miguel.coria ~/Documents/advanced-git-exercises [exercise3] $ git checkout exercise4
branch 'exercise4' set up to track 'origin/exercise4'.
Switched to a new branch 'exercise4'
```

### Exercises
1. Merge the exercise3 branch into exercise4, and look at the git log.  
```
miguel.coria ~/Documents/advanced-git-exercises [exercise4] $ git merge exercise3
Updating 43388fe..e348ebc
Fast-forward
 hello.txt | 1 +
 1 file changed, 1 insertion(+)
 ```

 There is nothing to let us know that `e348ebc` was merged into `exercise4` from the `exercise3` branch.

2. Use git reset --hard HEAD^ to reset your exercise4 branch back one commit, then use the --no-ff option to git merge to merge exercise3 again. Look at the git log, how is it different from the last step?  

We will use `git reset --hard HEAD^` to back things up to the last commit.  

```
miguel.coria ~/Documents/advanced-git-exercises [exercise4] $ git log --oneline
e348ebc (HEAD -> exercise4, tag: my-git-tag, tag: my-exercise3-tag, tag: exercise3-annotated-tag, origin/exercise3, exercise3) Testing the emergency git-casting system
43388fe (origin/master, origin/exercise7, origin/exercise4, origin/exercise2, origin/HEAD, master) Initial commit
miguel.coria ~/Documents/advanced-git-exercises [exercise4] $ git reset --hard HEAD^
HEAD is now at 43388fe Initial commit
```
Now, we will merge `exercise3` into `exercise4` with `git merge --no-ff exercise3`:  
```
miguel.coria ~/Documents/advanced-git-exercises [exercise4] $ git merge --no-ff exercise3
Merge made by the 'recursive' strategy.
 hello.txt | 1 +
 1 file changed, 1 insertion(+)
```
`Exercise4` was diverged into `Exercise3`, later with `git merge --no-ff exercise3` both branches were merged:  
```
miguel.coria ~/Documents/advanced-git-exercises [exercise4] $ git log --graph             
*   commit 35211cb95ec00daa0b0435f168d859a531bddc9b (HEAD -> exercise4)
|\  Merge: 43388fe e348ebc
| | Author: Miguel Coria <miguel.coria@unosquare.com>
| | Date:   Fri May 6 10:06:13 2022 -0600
| | 
| |     Mergin exercise3 into exercise4
| | 
| * commit e348ebc1187cb3b4066b1e9432a614b464bf9d07 (tag: my-git-tag, tag: my-exercise3-tag, tag: exercise3-annotated-tag, origin/exercise3, exercise3)
|/  Author: Nina Zakharenko <nina@nnja.io>
|   Date:   Wed Oct 4 19:01:12 2017 -0700
|   
|       Testing the emergency git-casting system
| 
* commit 43388fee19744e8893467331d7853a6475a227b8 (origin/master, origin/exercise7, origin/exercise4, origin/exercise2, origin/HEAD, master)
  Author: Nina Zakharenko <nina@nnja.io>
  Date:   Wed Oct 4 18:51:49 2017 -0700
  
      Initial commit
```

3. Make two conflicting changes to hello.txt in two different branches.  
Let's create a conflict in `exercise4` branch:  
```
miguel.coria ~/Documents/advanced-git-exercises [exercise4] $ git branch
  exercise2
  exercise3
* exercise4
  master
  ```
Create a new branch named `mundo` `git checkout -b mundo`:  
```
miguel.coria ~/Documents/advanced-git-exercises [exercise4] $ git checkout -b mundo
Switched to a new branch 'mundo'
```

Editing `hello.txt` to modify it's content from `Hello World!` to `Hello mundo!`.  
Verifying branch status `git status`:  

```
miguel.coria ~/Documents/advanced-git-exercises [mundo] $ git status
On branch mundo
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
	modified:   hello.txt

no changes added to commit (use "git add" and/or "git commit -a")
```
Adding the change (file) `git add hello.txt` and make the commit:  
```
miguel.coria ~/Documents/advanced-git-exercises [mundo] $ git commit -m "Changing World to Mundo"
[mundo a640001] Changing World to Mundo
 1 file changed, 1 insertion(+), 1 deletion(-)
```
Checkout to `exercise4` branch and modifying `hello.txt` file content to `Hola World!`:  
```
miguel.coria ~/Documents/advanced-git-exercises [exercise4] $ git commit -m "Changing Hello to Hola"
[exercise4 e445157] Changing Hello to Hola
 1 file changed, 1 insertion(+), 1 deletion(-)
 ```
 
4. Enable ReReRe, then merge one branch into the other.  
Let's enable git's ReReRe functionality `git config rerere.enabled true`.  
Merge the `mundo` branch into `exercice4` branch:  
```
miguel.coria ~/Documents/advanced-git-exercises [exercise4] $ git merge mundo
Auto-merging hello.txt
CONFLICT (content): Merge conflict in hello.txt
Recorded preimage for 'hello.txt'
Automatic merge failed; fix conflicts and then commit the result.
```

As we expected, a conflict was generated. We will run `git rerere diff` to see whats happens:  
```
miguel.coria ~/Documents/advanced-git-exercises [exercise4] $ git rerere diff
--- a/hello.txt
+++ b/hello.txt
@@ -1,6 +1,6 @@
-<<<<<<<
-Hello Mundo!
-=======
+<<<<<<< HEAD
 Hola World!
->>>>>>>
+=======
+Hello Mundo!
+>>>>>>> mundo
 This is a test of the emergency git-casting system.
```

Let's resolve the conflict modifying the content to `Hola Mundo!`:  
```
<<<<<<< HEAD
Hola World!
=======
Hello Mundo!
>>>>>>> mundo
This is a test of the emergency git-casting system.
```
Now we will add `hello.txt` and make a commit with the change:  
```
miguel.coria ~/Documents/advanced-git-exercises [exercise4] $ git commit -m "Merging in mundo branch"
Recorded resolution for 'hello.txt'.
[exercise4 f63b405] Merging in mundo branch
```

5. Backup again with git reset --hard HEAD^, then attempt the merge again. Notice how ReReRe automatically resolves the conflict for you.  
 Let's backup before the last commit `git reset --hard HEAD^`:  
 ```
 miguel.coria ~/Documents/advanced-git-exercises [exercise4] $ git reset --hard HEAD^
HEAD is now at e445157 Changing Hello to Hola
 ```
 Now, we will try to merge `git merge mundo`:  
 ```
 miguel.coria ~/Documents/advanced-git-exercises [exercise4] $ git merge mundo
Auto-merging hello.txt
CONFLICT (content): Merge conflict in hello.txt
Resolved 'hello.txt' using previous resolution.
Automatic merge failed; fix conflicts and then commit the result.
 ``` 
 The conflict still but `ReReRe` resolve the issue by us.

 