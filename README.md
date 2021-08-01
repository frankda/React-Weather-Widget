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

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Description

### Tech Stacks

Tech stacks are used in this app are typescript, Reactjs and scss. Below is the resone why I choose these stack:

- Typescript: As any small apps could grow big, adopting TypeScript might result in more robust software, while still being deployable where a regular JavaScript application would run.

- Reactjs: As one of most popular framework, worth to use it, no need to say companies like Nine are also using it.

- Scss: It has similar syntax to css but with more features. Use Scss can help me to write less code when following BEM methods and follow good css file structure like ITCSS.

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

Currently testing is blocked by mocking `navigator.geolocation.getCurrentPosition` function, cannot return value in `success callback` of `getCurrentPosition`. So testing coverage is not 100% because of this reason. It is the next thing going to fix for this project.

```bash
-----------------------|---------|----------|---------|---------|---------------------------------------
File                   | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s
-----------------------|---------|----------|---------|---------|---------------------------------------
All files              |   35.82 |    17.65 |   28.57 |   35.82 |                                       
 src                   |       0 |        0 |       0 |       0 |                                       
  App.tsx              |       0 |      100 |       0 |       0 | 6                                     
  index.tsx            |       0 |      100 |     100 |       0 | 7-17                                  
  reportWebVitals.ts   |       0 |        0 |       0 |       0 | 3-10                                  
 src/components/editor |      75 |      100 |      50 |      75 |                                       
  Editor.tsx           |      75 |      100 |      50 |      75 | 41,65-74                              
 src/components/widget |   34.09 |    23.08 |      25 |   34.09 |                                       
  Widget.tsx           |   34.09 |    23.08 |      25 |   34.09 | 43-54,59-61,66-69,74-84,88-93,109-116 
-----------------------|---------|----------|---------|---------|---------------------------------------
```

## Time

- Documentation: 0.75 hrs
- Coding: 3 hrs
- Adjust minor styles according to design: 1 hr
