# dlw-wdi5-workshop

Documentation for wdi5 can be found [Here](https://ui5-community.github.io/wdi5/#/)

## prerequisite software

1. node.js >= 16 ( https://nodejs.org/en/ ) -> Latest LTS version (as of 08-03-2023): [Download version 18.15.0](https://nodejs.org/dist/v18.15.0/node-v18.15.0-x64.msi)
2. Google Chrome ( https://www.google.com/intl/nl_be/chrome/ )
3. Git ( https://git-scm.com ) (optional, used to clone the project from url. but can also be downloaded as a zip file)
4. IDE -> I used Visual Studio Code ( https://code.visualstudio.com/ )

## how to run the cloned project

1. cd into the project directory

```bash
cd ui5-ts-app
```

2. install dependencies

```bash
npm install
```

3. initialize your project with wdi5

for TypeScript
```bash
Npm init wdi5@latest -- --ts 
```

for JavaScript
```bash
Npm init wdi5@latest
```

4. configure the wdio.conf.ts file

```typescript
wdi5: {
         screenshotPath: require("path").join("__screenshots__"), // [optional] {string}, default: ""
         screenshotsDisabled: false, // [optional] {boolean}, default: false; if set to true, screenshots won't be taken and not written to file system
         logLevel: "error", // [optional] error | verbose | silent, default: "error"
         skipInjectUI5OnStart: false, // [optional] {boolean}, default: false; true when UI5 is not on the start page, you need to later call <wdioUI5service>.injectUI5() manually
         waitForUI5Timeout: 15000 // [optional] {number}, default: 15000; maximum waiting time in milliseconds while checking for UI5 availability
     },
```
6. before running the tests make sure that your project is running in another terminal
   
```bash
npm run start
```

7. running the tests (be sure your project is running and you are running the tests in a different terminal and you are in the ui5-ts-app directory)

to run the tests, use the following command

```bash
npm run wdi5
```

if you want to run the tests in headless mode, use the following command

```bash
npm run wdi5 -- --headless
```

## Screenshots

if you want to take screenshots during your tests, you can add the follwing code to your test

```typescript
await browser.screenshot('<name_of_screenshot>');
```

this code will take a screenshot everytime the codes appears in your test and save it in the __screenshots__ folder. this folder is defined in your wdi5 config in the wdio.conf.ts file.