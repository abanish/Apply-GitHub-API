---------------------------------------
Github open issues count version 1.0
---------------------------------------
Cound Number of issues for a github repo created with the help of Single Page Angular/Node/Express app leveraging GITHUB APIs.

Heroku Link where app is live
------------------------------------------
https://github-issues-count.herokuapp.com/

App Description:
---------------------------------------
The app contains a input field for user to enter github link for a repo.

App will validate the url in the format as below:
https://api.github.com/<org_name or user_name>/<repo_name>

The app will display the output as counts of:

1. Number of issues
2. Number of open issues in last 7 days
3. Number of open issues opened more than 24 hours ago but less than 7 days ago.
4. Number of issues that were opened more than 7 days ago.

Github API access is over HTTPS, and accessed from the https://api.github.com. All data is sent and received as JSON.

Number of open issues is retrieved using GET on https://api.github.com/<org_name or user_name>/<repo_name>

Number of open issues in last 7 days and last 24 hours is retrieved using GET on https://api.github.com/<org_name or user_name>/<repo_name> with since parameter.

Number of open issues that were opened more than 24 hours ago but less than 7 days ago = last 7 days count - last 24 hours count.

Number of open issues that were opened more than 7 days ago = total open issues count - last 7 days count.

Future scope of improvement:
------------------------------------------
1. set timeout if the request is taking a long time to retrieve data.
2. send authenticated request to github in order to increase rate limit.
3. Robost client side validation to make application seamless
