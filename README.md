## What is Github Actions?

<br>
=> Github Actions is a CI/CD services provided by Github. 
It allows developers to automate workflows in their repositories using YAML based configuration file.
Not only a CI/CD tools but also a workflow management tools.

## Following is some popular CI/CD tools:

- Jenkins
- Gitlab CI/CD
- Travis CI
- CircleCI
- Azure DevOps
- AWS Code Pipeline
- Google Cloud Build (YAML based configuration)
- Github Actions (YAML based configuration)

## In Github Actions what is event driven Workflows?

=> Workflows are run in a container or OS. You can run code or script on that container or OS which is serverless. Developer can triggers workflows based on various events like pushes to a repositories,
pull request, merge pull request and issue commit and more.

## Flow Chart

1. create a repository
2. In created github repo go to secrets and variables
3. go to Actions
4. Repository secrets
5. New Repository Secrets
6. add DOCKER_USERNAME and DOCKER_PASSWORD with username and password
7. create a folder name .github/workflows/github-actions-demo.yaml
8. now in github-actions-demo.yaml file we will configure it for actions
9. after created the configuration and push in github, In Action tab in github u will find the workflows
10. u can select the workflows and see the inside of the workflows
11. for continues testing integration we use mocha chai supertest so follow 11.1, 11.2 then run "npm install --save-dev mocha chai@4 supertest"
12. created a test folder with the file name app.test.js
13. update the package.json file script:
    "scripts": {
    "start": "node server.js",
    "test": "mocha"
    },
14. In terminal run "npm start" to start the server
15. In terminal run "npm test"
16. as we will test it on the fly i.e upon push on github, github action will test.
17. created a test.yaml
