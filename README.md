# Weather Widget

## Demo

[Demo page](https://elastic-cray-4007a8.netlify.app/)

## Prerequisite

- Node v14+
## Setup

1. Download repository in terminal

```bash
git clone https://github.com/frankda/React-Weather-Widget.git
```

2. Install dependencies
```bash
# use yarn install
yarn

# or use npm instal
npm install
```

3. Run app in the development mode.
```bash
yarn start

# or

npm start
```

Note: If app does not run properly, please run:

```bash
yarn lint

# or

npm run lint
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Description

### Tech Stacks

Tech stacks are used in this app are typescript, Reactjs and scss. Below is the resone why I choose these stack:

- Typescript: As any small apps could grow big, adopting TypeScript might result in more robust software, while still being deployable where a regular JavaScript application would run.
- Reactjs: As one of most popular framework, worth to use it, no need to say companies like Nine are also using it.
- Scss: It has similar syntax to css but with more features. Use Scss can help me to write less code when following BEM methods and follow good css file structure like ITCSS.
- Jest: The main reason use Jest here is the project is created by CRA which has Jest included already. Furthermore, compare to other test library like Mocha, Jest can support to mock functions while others need to use Sinon for mocking. Jest can also help to check code coverage.
- React Testing Library: It is reconmmended in React document and a developer of react-testing-library has written a detailed article to explain why we should [avoid testing implementation details](https://kentcdodds.com/blog/testing-implementation-details). Another reason is it has good support to React latest version. That's the reason why I passed another excellent testing library Enzyme.

### Features

- App will be splitted to two components: A: a widget component to show weather information; B: an editor
- Widget: Props need to pass into widget are **Title**, **Unit** and **Show Wind**
- Show loading when fetching data from api

## Assumption

- On desktop, editor will be in the center of screen
- On mobile, editor should take full width of screen and start from top of screen
- On mobile, widget will stack on top of editor
- Widget will fit the height and width of editor
- If title is long, widget and edior should grow to wrap title in
- To maintain consistant styling in different OS, create custom radio button
- Weather image should match current weather
- Celsius and show wind are checked in default
- Assume title will be uppercase according to design
- Widget will have a title placeholder if there is no title passed

## Testing

As `Editor` and `Widget` are coupled, testing includes both unit testing for `Widget` and intergration testing for `Editor`. And testing covers 100% of code. 

```bash
-------------------|---------|----------|---------|---------|-------------------
File               | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s 
-------------------|---------|----------|---------|---------|-------------------
All files          |     100 |      100 |     100 |     100 |                   
 components/editor |     100 |      100 |     100 |     100 |                   
  Editor.tsx       |     100 |      100 |     100 |     100 |                   
 components/widget |     100 |      100 |     100 |     100 |                   
  Widget.tsx       |     100 |      100 |     100 |     100 |                   
 tests/utils       |     100 |      100 |     100 |     100 |                   
  mocks.js         |     100 |      100 |     100 |     100 |                   
-------------------|---------|----------|---------|---------|-------------------
```

## Time

- Documentation: 0.75 hrs
- Coding: 3 hrs
- Adjust minor styles according to design: 1 hr
