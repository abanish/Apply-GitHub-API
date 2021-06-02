---------------------------------------
# Learn Github Api
---------------------------------------
Count number of issues for a GitHub repo created with the help of Single Page Angular/Node/Express app leveraging GITHUB APIs.

# Heroku Link where app is live
------------------------------------------
https://github-issues-count.herokuapp.com/

# App Description:
---------------------------------------
The app contains a input field for user to enter github link for a repo.

App will validate the url in the format as below:
https://api.github.com/<org_name or user_name>/<repo_name>

# Examples 

Github API access is over HTTPS, and accessed from the https://api.github.com. All data is sent and received as JSON.

Number of open issues is retrieved using GET on https://api.github.com/<org_name or user_name>/<repo_name>

Number of open issues in last 7 days and last 24 hours is retrieved using GET on https://api.github.com/<org_name or user_name>/<repo_name> with since parameter.

Number of open issues that were opened more than 24 hours ago but less than 7 days ago = last 7 days count - last 24 hours count.

Number of open issues that were opened more than 7 days ago = total open issues count - last 7 days count.
