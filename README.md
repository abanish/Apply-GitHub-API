---------------------------------------
# Github Api
---------------------------------------
Learn How to use Github Api

---------------------------------------
# Example Project
---------------------------------------
Fetch number of issues for a GitHub repo created with the help of Single Page Angular/Node/Express app leveraging GITHUB APIs. This app uses Jade template engine.

# Heroku Link where app is live
------------------------------------------
https://github-issues-count.herokuapp.com/

# App Description:
---------------------------------------
The app contains a input field for user to enter github link for a repo.

App will validate the url in the format as below:
https://api.github.com/<org_name or user_name>/<repo_name>

Github API access is over HTTPS, and accessed from the https://api.github.com. All data is sent and received as JSON.

Number of open issues is retrieved using GET on https://api.github.com/<org_name or user_name>/<repo_name>

Number of open issues in last 7 days and last 24 hours is retrieved using GET on https://api.github.com/<org_name or user_name>/<repo_name> with since parameter.

Number of open issues that were opened more than 24 hours ago but less than 7 days ago = last 7 days count - last 24 hours count.

Number of open issues that were opened more than 7 days ago = total open issues count - last 7 days count.

# App Snippets

## Input Box

![image](https://user-images.githubusercontent.com/3827706/120405389-2afa6480-c368-11eb-8cab-a14e71755e35.png)

## Results of Query

![image](https://user-images.githubusercontent.com/3827706/120405340-0ef6c300-c368-11eb-95de-428d63fc802c.png)

