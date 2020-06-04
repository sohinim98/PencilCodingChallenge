# PencilCodingChallenge

## Deployed at https://medium-editor-c7333.web.app

## Specifications

* User authentication: Use Firebase to support authentication in your application, so that
the first screen a user sees, asks them to login via their google account. If the user is
detected to have been already authenticated, then directly take them to the 2nd page.

* Text editor: Once logged in, show a large textbox on the page integrated with the
[running tests](https://github.com/yabwe/medium-editor) and allow the user to write
content in this editor area.
* Everything the user writes here, should be synced into the Firebase database in
real-time for that user’s account, automatically, without hitting a submit button.
* When the user logs back in, retrieve their last written and auto-saved document and
show it in the editor ready for editing.
* Host your project using Firebase hosting and send us a link, along with your code on
GitHub.

## Additional features

* Sign up with display name, email and password
* Sign in with email and password
* email validation
* reset password
* display profile picture or avatar, username, email

## Best practices

* Modular code with components
* Secrets stored in env file added to .gitignore
* Accessible UX with scss using BEM methodology
