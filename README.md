# granative
Boiler plate having CRUD operations. React native, Graphql, mongoDB Node.js used

## Steps to setup the node project independently with es2015

1. `mkdir server`
2. `cd server`
3. `yarn init`
4. `yarn add express`
5. `yarn add --dev babel-cli babel-preset-es2015 babel-preset-stage-2 nodemon`
6. Copy the following in `package.json`

```
"scripts": {
    "start": "nodemon index.js --exec babel-node --presets  es2015,stage-2"
  }

```
