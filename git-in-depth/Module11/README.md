# Module 11

## Github API
- Github is a powerful RESTful API.  
- You can use the official Octokit library and other third-party libraries to extend and simplify how you use the GitHub API.  
- Making request:  
    - Un-authenticated: rate limited to 60 request per hour.  
    - Personal token: 
        - Useful for testing.  
        - Requests authenticated as user who owns the toeken.  
    - OAuth:  
        - When your application acts on behalf of a user.  
        - The user will log-in via the OAuth flow in your project.      
    - It's possible to create and update:  
        - Issues  
        - Pull requests  
        - New repositories  
        - Gists 

    