# Module 4

## References, Commits, Branches
**References**  
- A branch is just a pointer to a particular commit.  
- The pointer of the current branch changes as new commit are made.  
- **HEAD** is how git knows what branch you're currently on, and what the next parent will be.  

**Working with tags**  
- List all the tags in repo `git tag`  
- List all tags, and what commit they're pointing to  `git show-ref --tags`  
- List all the tags pointing at a commit `git tag --points-at <commit>`  
- Looking at the tag, or tagged contents `git show <tag-name>`

**Tags & Branches**  
- **Branch** the current branch pointer moves with every commit to the repository  
- **Tag** the commit that the tag points doesn't change **It's a snapshot!** :sunglasses:  

**Head-less / Detached Data**  
- When you ned to checkout to a specific commit instead of a branch.  
- git moves the **HEAD** pointer to the commit.  
- as soon as you checkout a different branch or commit, the value of **HEAD** will point to the new **SHA**.  
- There is not reference pointing to the commits you made in a detached state.  

