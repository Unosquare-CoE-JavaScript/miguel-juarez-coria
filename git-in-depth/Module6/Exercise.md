# Module 6
## Exercise 5

### Exercise Five - History and Diffs  

### Prerequisite
You should have the `advanced-git-exercises` repository cloned locally. Checkout the `exercise5` branch:  `git checkout exercise5`  

### Exercises  
1. Practice creating a well-crafted commit - look at the format given on the slides for help.  
  - Modifying `hello.txt` file:  
  ```
    miguel.coria ~/Documents/advanced-git-exercises [exercise5] $ vi hello.txt 
  ```
  - Rename file:  
  ```
  miguel.coria ~/Documents/advanced-git-exercises [exercise5] $ git mv hello.txt hello.template
  ```
  - Adding to the stage:  
  ```
  miguel.coria ~/Documents/advanced-git-exercises [exercise5] $ git add hello.template 
  ```  
  - Make the commit:  
  ```
  miguel.coria ~/Documents/advanced-git-exercises [exercise5] $ git commit -m 'Replacing greeting with some tokens for i18n'
[exercise5 217f33b] Replacing greeting with some tokens for i18n
 1 file changed, 1 insertion(+), 1 deletion(-)
 rename hello.txt => hello.template (74%)
 ```
2. Use git log to find commits created since yesterday. Rename a file and use the --name-status and --follow options to git log to track down when the file was renamed, and what it used to be called. Use --grep to search within commit messages, and --diff-filter to find renamed and modified files from git log.  
```
miguel.coria ~/Documents/advanced-git-exercises [exercise5] $ git log --since="yesterday"
commit db8270a8e1f85ab5273bbdecacece671cbb475cb (HEAD -> exercise5)
Author: Miguel Coria <miguel.coria@unosquare.com>
Date:   Fri May 6 13:41:18 2022 -0600

    Replacing greeting with tokens for i18n
    
    Currently, hello.txt contains both Spanish and English.
    Let's replace Hola with a [greeting] token, and Mundo
    with a [noun] token. That way, we can localize hello.txt for
    any language!
```
3. Use git show to get more information about a specific git hash.  
  - How do we actually see what happened in a commit? Let's use git show to find out:  
```
miguel.coria ~/Documents/advanced-git-exercises [exercise5] $ git log --grep=i18n --oneline
db8270a (HEAD -> exercise5) Replacing greeting with tokens for i18n
```
  - Let's see the commit information `git show 4b2b90e`:  
  ```
  miguel.coria ~/Documents/advanced-git-exercises [exercise5] $ git show 4b2b90e
commit 4b2b90ec4f526139ca9c81e22174ebf5b9c56b52 (origin/exercise6)
Author: Nina Zakharenko <nina@nnja.io>
Date:   Wed Oct 4 20:46:45 2017 -0700

    Replacing greeting with tokens for i18n
    
    Currently, hello.txt contains both Spanish and English.
    Let's replace Hola with a [greeting] token, and Mundo
    with a [noun] token. That way, we can localize hello.txt for
    any language!

diff --git a/hello.txt b/hello.template
similarity index 73%
rename from hello.txt
rename to hello.template
index 7018e35..a6c57ac 100644
--- a/hello.txt
+++ b/hello.template
@@ -1,2 +1,2 @@
-Hola Mundo!
+[greeting] [noun]!
 This is a test of the emergency git-casting system.
 ```

4. Try the --merged and --no-merged options to git branch to see which branches have been merged into master (or not).  
  - Branchs merged with `master`:  
  ```
  miguel.coria ~/Documents/advanced-git-exercises [exercise5] $ git branch --merged master
  master
  ```
  - Branches haven-t not merged with `master`:  
  ```
  miguel.coria ~/Documents/advanced-git-exercises [exercise5] $ git branch --no-merged master
  exercise2
  exercise3
  exercise4
* exercise5
  mundo
  ```