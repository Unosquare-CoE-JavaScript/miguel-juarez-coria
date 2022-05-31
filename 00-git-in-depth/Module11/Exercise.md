# Module 11
## Exercise 12

### Git API

### Exercises  
1. How many GitHub users are you following?  
```
miguel.coria ~/Documents/advanced-git-exercises [feature] $ curl https://api.github.com/users/mcoriaunosquare
{
  "login": "mcoriaunosquare",
  "id": 104920885,
  "node_id": "U_kgDOBkD3NQ",
  "avatar_url": "https://avatars.githubusercontent.com/u/104920885?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/mcoriaunosquare",
  "html_url": "https://github.com/mcoriaunosquare",
  "followers_url": "https://api.github.com/users/mcoriaunosquare/followers",
  "following_url": "https://api.github.com/users/mcoriaunosquare/following{/other_user}",
  "gists_url": "https://api.github.com/users/mcoriaunosquare/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/mcoriaunosquare/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/mcoriaunosquare/subscriptions",
  "organizations_url": "https://api.github.com/users/mcoriaunosquare/orgs",
  "repos_url": "https://api.github.com/users/mcoriaunosquare/repos",
  "events_url": "https://api.github.com/users/mcoriaunosquare/events{/privacy}",
  "received_events_url": "https://api.github.com/users/mcoriaunosquare/received_events",
  "type": "User",
  "site_admin": false,
  "name": null,
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 4,
  "public_gists": 0,
  "followers": 0,
  "following": 0,
  "created_at": "2022-05-04T16:12:15Z",
  "updated_at": "2022-05-05T16:57:13Z"
}
```

2. Which of your repositories has the most stars?  
```
miguel.coria ~/Documents/advanced-git-exercises [feature] $ curl -s "https://api.github.com/search/repositories?q=user:mcoriaunosauqre&sort=stars&per_page=1" | grep "stargazers_count"

```

3. What languages are present in your favorite repository?  
```
miguel.coria ~/Documents/advanced-git-exercises [feature] $ curl "https://api.github.com/repos/nodejs/node/languages"
{
  "JavaScript": 11704154,
  "C++": 4080595,
  "Python": 2354742,
  "C": 539831,
  "HTML": 163390,
  "Makefile": 53002,
  "Batchfile": 41979,
  "Shell": 41366,
  "DTrace": 37212,
  "Emacs Lisp": 14363,
  "Perl": 11658,
  "Roff": 10445,
  "R": 6894,
  "Assembly": 157
}
```