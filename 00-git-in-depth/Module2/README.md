# Module 2

## Git Foundations
**Data Storage**  
Git is like a key value  store:
- The **value** = **data**

- The **key** = **Hash of the data**  
    Is a cryptographic hash function  
    It a 40-digit hexadecimal number  
    This value should always be the same if the given input is the same  
- You can use the **key** to retrieve the **content**.


**Git blobs and trees**  
Git stores the compressed data ina a **blob**, along with metadata in a header:  
- the identifier **blob**  
- the size of the content  
- \0 delimiter  
- content  

Git stores the information in a **tree**.  
A **tree** contains pointers (using SHA1):  
- to blobs  
- to other trees  

and **metadata**:  
- **type** of pointer (**blob** or **tree**)
- **filename** or directory name  
- **mode** (executable file, symbolic link, ...)  

![Tree & blobs](https://github.com/Unosquare-CoE-JavaScript/miguel-juarez-coria/blob/main/git-in-depth/assets/images/tree-and-blobs.png "Tree & blobs")


**Commits**  
A **commit** points to a *tree*  
..and contains metadata as:
- author and commiter  
- date  
- message  
- parent commit (one or more)  

The **SHA1** of the commit  is the hash of all this information.  
Example of a **commit**:  
![Commit example](https://github.com/Unosquare-CoE-JavaScript/miguel-juarez-coria/blob/main/git-in-depth/assets/images/commit-example.png "Commit example")

How to identify what kind of object we have in our branch?  
To show the structure we use this command:  
```
tree .git/objects
```
...and shows us this:  
![Tree & blobs structure](https://github.com/Unosquare-CoE-JavaScript/miguel-juarez-coria/blob/main/git-in-depth/assets/images/tree-and-blobs-structure.png "Tree & blobs structure")

To show us whats kind of object we have:  
```
git cat-file -t 321a1
```
> REM-MC-220502A:courses miguel.coria$ git cat-file -t 321a1
> blob  
  
...and to show its content:  
```
git cat-file -p 321a1
```
>Buyou-dohow-you-dont-use git.pngIlocblob?????????
>                                                 @? @ @ @
>                                                         E?DSDB  @ @ @  

