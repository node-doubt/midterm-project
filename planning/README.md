# Midterm Prep #4

## UML/Wireframe

![UML](node-doubt%20uml.svg)
![database model](database-model.png)

## User Stories 

[Project Management Board](https://trello.com/b/yYzfBtpA/assignment-buster-401-midterm-project)

## Software Requirements

### Vision

*What is the vision of this product?*

A Slackbot that helps students stay up-to-date with their course.

*What pain point does this project solve?*

Students are able to stay up-to-date with their course and quickly access through Slack their assignments due that day.

*Why should we care about your product?*

This product is relevant to students of Code Fellows and supporting their success.

### Scope

***IN - what will your product do?***

- The user(student) will be able to add the slackbot to their workspace
- The slackbot will pull data from Canvas on behalf of the user(student)

***OUT - What will your product NOT do?***

- The user will not be able to access other class data

### MVP

MVP:

- A user can connect to their Canvas account with the slackbot
- present assignments due that day to the user via the slackbot

Stretch:

- present future assignments based on user input (What's due tomorrow? this week?)
- present a user's current grades

### Functional Requirements

- a user can use a slash command to access their assignments

### Non-Functional Requirements

- Testability: We can test our functions in API Gateway. To test Slack connection, we have created our own Slack workspace.
- Security: We will use AWS to host our user database.