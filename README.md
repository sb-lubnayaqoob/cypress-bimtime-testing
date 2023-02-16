# Bimtime End-to-End Testing with Cypress 

Monorepo containing end-to-end automating testing 

# Table of Contents

- [E2E Testing](#E2E Testing)
    - [The Importance of (Test) Automation](#sablono-account-management)
        - [App Architecture](#app-architecture)
        - [Folder Structure](#folder-structure)
- [Shared Components](#shared-components)
- [Development](#development)
    - [Run the Repository Code](#run-the-repository-code)
    - [Linting and Formatting](#linting-and-formatting)
    - [Testing](#testing)
    - [Build for Production](#build-for-production)

# E2E Testing


## The Importance of (Test) Automation
Test automation is an important part of software development and testing that helps to reduce the time and cost associated with manual testing, while also increasing the accuracy and reliability of the tests. 

### The Test Pyramid
Testing pyramid consists of three layers that your test suite should consist of (bottom to top):

* Unit Tests
* Integration Test
* End-to-End Test

<img src="cypress/images/cypress.jpeg"  width="60%" height="30%">



### Folder Structure

Breakdown of notable folders and their contents:

<pre>
<b>cypress-testing-bimtime/</b>
├─<b>cypress/</b>
│ ├─<b>fixtures/</b>: Find fixed test data here, which have no relation to the other entities.
│ ├─<b>integration/</b>: Find the actual tests here.
│ ├─<b>plugins/</b>: Here extended cypress, whether with existing Cypress plugins or your own.
│ ├─<b>Support/</b> Here extend Cypress itself. Your own commands and helpers are located here.
│ ├─<b>images/</b>
│ │ ├─<b>localImages/</b>: images used in markdown file.
├─<b>cypress.config.js/</b> Modify configurations here, including for the environment.


# Shared Components

`Nx Monorepo` allows for sharing components across applications. These components are located in the `libs` directory. Any component that will be copied and reused in more than one project could be considered as a `lib`.

# Development

## Run the Repository Code

1. Install the NX CLI if it is not already available.

   ```shell
   npm install -g nx
   ```

2. Install dependencies

   ```shell
   npm install
   ```

3. Run Web Client Apps

   Running any web client app is done with the `nx serve` command followed by the name of the app, e.g. `sb-account-mgmt`.

   ```shell
   nx serve <app name>
   ```

## Linting and Formatting

The code base can be formatted with Prettier to adhere to the ESLint rules by running:

```shell
nx format:write
```

## Testing

Testing a specific web client app is done with the name of the app followed by the test command, e.g. `sb-account-mgmt:test`.

```shell
nx run <app name>:test
```

Testing all web client apps is done by running:

```shell
nx test
```

## Build for Production

Building any web client app is done with the `nx build` command followed by the name of the app, e.g. `sb-account-mgmt`.

```shell
nx build <app name>
```
