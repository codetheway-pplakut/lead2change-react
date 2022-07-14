[![license](https://img.shields.io/github/license/mashape/apistatus.svg)](https://opensource.org/licenses/MIT)
[![GitHub issues](https://img.shields.io/github/issues/joeyschroeder/code-the-way-project-starter.svg)](https://github.com/joeyschroeder/code-the-way-project-starter/issues)
[![GitHub stars](https://img.shields.io/github/stars/joeyschroeder/code-the-way-project-starter.svg)](https://github.com/joeyschroeder/code-the-way-project-starter/stargazers)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

# 🌈 code-the-way-project-starter

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Table of Contents

- [Quick Start](#quick-start)

- [Getting Started](#getting-started)

  - [Prerequisites](#prerequisites)
  - [Installation](#installation)

- [Development](#development)

  - [Running the Application Locally](#running-application-locally)
  - [ESLint and Prettier.io](#eslint-and-prettierio)
  - [Naming Conventions](#naming-conventions)
  - [Committing](#committing)

- [Application Structure](#application-structure)

  - [Components](#components)
  - [Constants](#constants)
  - [Services](#services)
  - [Util](#util)

- [Material UI](#material-ui)

- [Available Scripts](#available-scripts)

  - [npm start](#npm-start)
  - [npm run build](#npm-run-build)
  - [npm run eslint](#npm-run-eslint)
  - [npm run eslint:fix](#npm-run-eslint-fix)

- [Learn More](#learn-more)
- [Authors](#authors)
- [Acknowledgments](#acknowledgments)

<a name="quick-start"></a>

## Quick Start

The following are simple instructions to start developing in this application. For more detailed instructions, see [Getting Started](#getting-started).

1. Clone this repository:

```
git clone https://github.com/joeyschroeder/code-the-way-project-starter.git
```

2. Navigate inside repository directory:

```
cd cd code-the-way-project-starter
```

3. Install dependencies:

```
npm install
```

4. After installation, start the application:

```
npm start
```

<a name="getting-started"></a>

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a production environment.

<a name="prerequisites"></a>

### Prerequisites

#### Node.js & Node Package Manager (npm)

You'll need to download and install [Node.js](https://nodejs.org) to install dependencies and run the scripts in this project to develop, test, and deploy this project. This project requires **Node.js** version 16 or hire along with **Node Package Manager (npm)**. npm is installed automatically when Node.js is installed. Download the latest version of Node.js [here](https://nodejs.org/en/download/) and install.

<a name="installation"></a>

### Installation

After **Node.js** and **npm** are installed, you'll need to **clone** this repository to your working directory on your local machine, then install the project dependencies using npm through the command line.

First, navigate to your working directory:

```
cd path/to/your/working/directory
```

Then clone this repository to your working directory.
First, clone the repository:

```
git clone https://github.com/joeyschroeder/code-the-way-project-starter.git
```

After cloning is complete, navigate inside the newly cloned repository:

```
cd code-the-way-project-starter
```

Finally, run `npm install` to install all project dependencies:

```
npm install
```

**NOTE:** _Occasionally, depending on your user permissions, you may need to **force** npm to install dependencies. If errors occur while running `npm install`, you can do this by running `npm install --force` instead._

**NOTE:** _Occasionally, you may see npm warnings about security vulnerabilities:_

```
found 1 high severity vulnerability
  run `npm audit fix` to fix them, or `npm audit` for details
```

For the most part, you do not have to worry about these warnings. You application
will run fine without doing anything. These are warnings that other dependencies
in your project may have security problems. Just make sure you're using the latest
versions of dependencies.

For more information, visit: [https://medium.com/codebrace/what-is-npm-audit-fix-bf1d7efefff7](https://medium.com/codebrace/what-is-npm-audit-fix-bf1d7efefff7).

<a name="development"></a>

## Development

<a name="running-application-locally"></a>

### Running the Application Locally

During development, this application will run inside a local web browser. To start the application in a web browser, navigate to the root of the project directory in the command line and run `npm run start`. This command will start the application and automatically open the application in a browser window.

First, navigate to the root of the project:

```
cd path/to/your/working/directory/code-the-way-project-starter
```

Then start the application:

```
npm run start
```

After Webpack has compiled the development bundle, it will print out something similar to following:

```
Compiled successfully!

You can now view code-the-way-project-starter in the browser.

  Local:            http://localhost:3000
  On Your Network:  http://192.168.0.9:3000

Note that the development build is not optimized.
To create a production build, use npm run build.

webpack compiled successfully
```

If the application does not automatically open, you can open the URL [http://localhost:3000](http://localhost:3000) in your web browser.

#### Hot Reloading

This project is equipped with [Webpack Hot Module Replacement](https://webpack.js.org/concepts/hot-module-replacement/). This means that while the application is running locally, you can make changes and save files, and they will automatically update in the web browser. **Occasionally, the web browser may need a manual refresh if you're changes affect application state or changes outside of the React life-cycle.**

<a name="eslint-and-prettierio"></a>

### ESLint and Prettier.io

This project is equipped with [ESLint](https://eslint.org/) and [Prettier.io](https://prettier.io/) to ensure a homogeneous code-style and prevent JavaScript syntactical errors.

During development, you can run `npm run eslint:fix` in the root of the project to automatically fix any fixable [ESLint errors/warnings](.eslintrc), and format your JavaScript [Prettier standards](https://prettier.io/).

#### Fix ESLint and Prettier errors on save

To make development simpler, keep development styles homogenous amongst multiple developers, and prevent unwanted JavaScript errors, ESLint has created a [VSCode plugin](https://marketplace.visualstudio.com/VSCode) to highlight and fix errors every time a JavaScript file is saved. To untilize this feature, first you'll need to install the ESLint VSCode extension, then update your VSCode settings to fix errors on save.

First, install [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) to VSCode:

1. Open the _Extension_ tab on the left-hand side menu of VSCode, this will open a side panel of extensions.
2. Use the search field at the top of the side panel to search for _"ESLint"_, this will list multiple results.
3. The first result should be [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint), click the small _Install_ button on the bottom, right-hand side of the result to install the plugin.

Now, the plugin is running in VSCode. To automatically have VSCode fix all ESLint errors/warnings when a JavaScript file is saved, update your VSCode settings.

Inside of VSCode, navigate to:
_File > Preferences > Settings > Extensions_

Then scroll down, and click _"Edit in settings.json"_.

Include the following code in your `settings.json` file:

```
// settings.json
{
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
}
```

This file can be accessed in the following locations:

- Windows: `%APPDATA%\Code\User\settings.json`
- macOS `$HOME/Library/Application Support/Code/User/settings.json`

<a name="naming-conventions"></a>

### Naming Conventions

Applications can quickly become very complex. To help navigate through this complexity it is important to write **readable** code.

When code is difficult to read, developers spend more time trying to decrypt code than actually writing or modifying the application. Additionally, when code is difficult to read developers may often repeat work, or re-do work unnecessarily.

Reading code should be simple. If it's not simple, and requires further explanation, perhaps you re-write, re-name, or add comments to your code.

#### Prefer Explanatory Names

Function names should clearly describe what a function does. Variable names should clearly explain what the variable is.

Every function is an action, so it should contain a verb. For example:

- `updateFilename(file, 'filename.txt')` updates file to "filename.txt"
- `reloadTableData()` means to reload table data
- `isBirthDay()` means checking if today is birth day
- `getAddress()` or `setAddress("My Address")` mean getting or setting an object's address.

Function and variable names should explain exactly what they do. Not too short, not too long. Don't be afraid to make longer variable or function names. For example, a function named `inc()` is short, but `increaseValue()` is more descriptive.

#### Use Natural Language

The code doesn't care how you feed it instructions, but another developer will greatly appreciate if they can read those instructions. Make your code as short, concise stories. Variables are nouns and functions are verbs.

Suppose you wanted to "append the number 8 to the end of an array called 'elements'." Let's write our code in a way that reflects that:

```
function append(array, value) {
  return [...array, value]
}

const elements = [1, 2, 3];
console.log(append(elements, 8));
// [1, 2, 3, 8]
```

Notice how the `append` function provides useful parameter names, and you can actually _read_ the code as "append elements (with) 8." Try to write your code with natural readable language in easy-to-understand steps before writing actual code.

Click [here](https://dmitripavlutin.com/coding-like-shakespeare-practical-function-naming-conventions/) for more detailed examples of writing readable code.

<a name="committing"></a>

### Committing

To ensure the commit history of this project remains helpful, please use the commit rules outlined [here](https://chris.beams.io/posts/git-commit/) when committing.

To making following these rules easier, this project is equipped with a [Git commit template](commit.template.txt):

```
# <type>: (If applied, this commit will...) <subject> (Max 50 char)
# |<----  Using a Maximum Of 50 Characters  ---->|


# Explain why this change is being made
# |<----   Try To Limit Each Line to a Maximum Of 72 Characters   ---->|

# Provide links or keys to any relevant tickets, articles or other resources
# Example: JIRA issue #23

# --- COMMIT END ---
# Type can be
#    breaking (changes that break previous implementations)
#    feat     (new feature)
#    fix      (bug fix)
#    refactor (refactoring production code)
#    revert   (changes that revert a previous commit)
#    style    (formatting, missing semi colons, etc; no code change)
#    docs     (changes to documentation)
#    test     (adding or refactoring tests; no production code change)
#    chore    (updating grunt tasks etc; no production code change)
#    other    (changes that do not fit in above categories)
# --------------------
# Remember to
#    Capitalize the subject line
#    Use the imperative mood in the subject line
#    Do not end the subject line with a period
#    Separate subject from body with a blank line
#    Use the body to explain what and why vs. how
#    Can use multiple lines with "-" for bullet points in body
# --------------------

```

To enable this Git commit template, run the following command from the root of the project:

```
git config --global commit.template commit.template.txt
```

#### Pre-Commit Hooks

This project is equipped with [Git Pre-Commit Hooks](https://git-scm.com/book/en/v2/Customizing-Git-Git-Hooks) to help ensure successful builds. These **hooks** are a set of scripts that will run before allowing a developer to commit to the project. If any of these scripts fail the commit will cancel.

Before allowing a successful commit Git will run the following scripts:

```
npm run eslint
```

It's recommended a developers run `npm run eslint:fix` often during development to prevent any failures from code-style or JavaScript syntactical errors.

<a name="application-structure"></a>

## Application Structure

Keeping your application code maintainable is important, especially as an application's code-base grows in size. The `src` folder of this application is separated into four folders to help that to help making meaningful separations between the types of code used in the application.

Meaningful separations of code can also help prevent **dependency cycles** in JavaScript. They can also help other developers review your code. For example, if another developer is reviewing your work and sees a file change in a specific folder, they can reasonably assume what kind of change happened.

<a name="components"></a>

### Components `(./src/components)`

The **components** folder is traditionally used exclusively for [React Components](https://reactjs.org/docs/react-component.html). Everything in this folder should be a React component. React components are exclusively used for the **user-interface (UI)** of the application. So, think of the components folder as a place for all of the UI of your application.

<a name="constants"></a>

### Constants `(./src/constants)`

The **constants** folder is traditionally used for any variables that are _constant_ in your application, and used in multiple files.

For example, you may have an email address used in multiple of places in your application. Instead of hard-coding that email address in multiple different files, you may want to create a _constant_ file called `email-address.js` with a JavaScript variable for that email address. Then you can import that email address throughout your entire application. This is advantageous because if that email address were to change, there's now only a single spot where you'd have to update your code.

In short, if you have a value that is used in more than one spot in your application you should add it to this folder.

<a name="services"></a>

### Services `(./src/services)`

The **services** folder is traditionally used for any JavaScript functions that make [asynchronous](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous) requests to an API.

It's more than likely that a **user-interface (UI)** will consume data from an API differently than how the API is structured. For example, on a home page, you may request user details from your API. You may want that same data on a user account page. Instead of duplicating that request function in both pages, you could simply add it to this services file then import it into both page UI components.

<a name="util"></a>

### Util `(./src/util)`

The **util** folder it traditionally used as a _catch-all_ for any re-useable JavaScript functions that are not [components](#components) or [services](#services).

For example, you may have a custom sorting JavaScript function used for several different types of data. Instead of writing that custom function multiple times, you could simply create a _utility_. Then you could import that sorting function into those different spots. If that sorting logic were to ever change, you now only have to update it in a single place.

This structure is only a starting point. You may realize during development that your application could benefit from additional structure. For example, you may find you're using a lot of images, files, or other non-JavaScript resources in your application. So, you may want to add an additional folder for **assets** or **files**.

<a name="material-ui"></a>

## Material UI

This application is outfitted with [Material UI (MUI)](https://mui.com/) to simplify design. MUI offers a comprehensive suite of UI tools to help you develop new features faster.

You can learn more about using MUI here: [https://mui.com/material-ui/getting-started/usage/](https://mui.com/material-ui/getting-started/usage/).

<a name="available-scripts"></a>

## Available Scripts

In the project directory, you can run:

<a name="npm-start"></a>

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

<a name="npm-run-build"></a>

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

<a name="npm-run-eslint"></a>

### `npm run eslint`

This command runs `eslint src/`. It prints eslint warnings and errors in the command line.

<a name="npm-run-eslint-fix"></a>

### `npm eslint:fix`

This command runs `eslint --fix src/`. It attempts to fix any eslint warnings/errors then prints the remaining warnings and errors in the command line.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

<a name="authors"></a>

## Authors

- **Joey Schroeder** - _Initial work_

See also the list of [contributors](https://github.com/joeyschroeder/code-the-way-project-starter/contributors) who participated in this project.

<a name="acknowledgments"></a>

## Acknowledgments

Hat tip to anyone who's code was used! 🤠
