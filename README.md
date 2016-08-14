---------------------------------------
Github open issues count version 1.0
---------------------------------------

Problem Statement:
---------------------------------------
Input : User can input a link to any public GitHub repository
Output :
Your UI should display a table with the following information -
- Total number of open issues
- Number of open issues that were opened in the last 24 hours
- Number of open issues that were opened more than 24 hours ago but less than 7 days ago
- Number of open issues that were opened more than 7 days ago

Proposed Solution:
---------------------------------------
Single Page Angular/Node/Express app leveraging GITHUB APIs.
User enters github issues link ex:https://github.com/Shippable/support/issues
Validate the url using regular expression for it to be github url with org_name/user_name and repo in order to get count of issues using APIs
Github API access is over HTTPS, and accessed from the https://api.github.com. All data is sent and received as JSON.
Number of open issues is retried using GET on https://api.github.com/<org_name or user_name>/<repo_name>
Number of open issues in last 7 days and last 24 hours is retrieved using GET on https://api.github.com/<org_name or user_name>/<repo_name> with since parameter.
Number of open issues that were opened more than 24 hours ago but less than 7 days ago = last 7 days count - last 24 hours count.
Number of open issues that were opened more than 7 days ago = total open issues count - last 7 days count.

Heroku Link where app is live
------------------------------------------
https://github-issues-count.herokuapp.com/

Future scope of improvement:
------------------------------------------
1. set timeout if the request is taking a long time to retrieve data.
2. send authenticated request to github in order to increase rate limit.
3. Robost client side validation to make application seamless
