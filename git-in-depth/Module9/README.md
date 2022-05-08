# Module 9

## Github vs Git  
### Distributed versin control  
![Distributed versin control](https://github.com/Unosquare-CoE-JavaScript/miguel-juarez-coria/blob/main/git-in-depth/assets/images/distributed-version-control.png "Distributed versin control")  
Before git:  
- Older systems  
- SVN  
- CVS  
- One master server  

**Git**  
    - Open source version control software  
**Github**  
    - Repository hosting  
    - Browse code  
    - Issues  
    - Pull requests  
    - Forks  

### Remotes ###  
- A remote is a repository stored elsewhere - on the web, on github, etc.  
- `origin` is the default name git gives to the server you cloned from.  
- Cloning a remote repository from a URL wil fetch the whole repository, and make a local copy in your .git folder.  
- You make have different privileges fo a remote.  

### Forks, Pull Requests & Upstreams  
- **Fork** is a copy of a repository that's stored in your Github account.  
- You can clone a fork in your local computer.  
- **Pull request** is a proposal of changes to need be acepted.  
- **Upstream** is the base repository you created a fork from.  
    - This isn't setup by default, you need to set it up manually.  
    - By adding a upstream remote, you can pull down changees that have been added to the original repository, after ypu forked it.  
    `git remote add upstream https://github.com/ORIG_OWNER/REPO.git`  

### Github workflow  
This is the most common workflow (triangular):  
![Common Workflow](https://github.com/Unosquare-CoE-JavaScript/miguel-juarez-coria/blob/main/git-in-depth/assets/images/common-workflow.png "Common Workflow")  
- Track a branch to tie it to an upstream branch.  
    - Bonus: Use git push/pull wth no arguments.  
- To checkout a remote branch, with tracking `git checkout -t origin/feature`  
- Tell Github which branch to track the first time you push `git push -u origin feature`  

**Contributing to open source projects - pull requests**  
- Before openning a **pull request**:  
    - Keep commit history clean and neat. Rebase if needed.  
    - Run projects tests in ypur code.  
    - Pull in Upstream changes (preferably via rebase to avoid merge commits).  
    - Check for a contributing (.md/.txt) in the project root.  
- After opening a **pull request**:  
    - Explain your changes throughly in the pull request.  
    - Link to any open issues that your pull request might fix.  
    - Check back for comments from the maintainers.  



