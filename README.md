This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

Below you will find some information on how to perform common tasks.<br>
You can find the most recent version of this guide [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

## Install dependencies
To install dependencies in this project please run `yarn install`

## Running locally
To run this project locally just run `yarn start` and go to [http://localhost:3000](http://localhost:3000).

## Unit tests
I created the files for unit testing but since I cannot add any adittional library, I did not try any test cases.

## Naming convention
Every component have their own folder and instead of use `index.js` inside each folder, it is the component name itself. Which means, if the project has the component `Lego`, instead of have `/lego/index.js` to be imported as `import Lego from ./lego`, I am using `/lego/lego.js`. In that way, to include this component the properly way to do it is `import Lego from ./lego/lego`. 

It might be redundant thinking like that but it is easier to manage files when develop and debug. Instead of having a lot of `index.js` for each component, we know which component from its name.

## Additional Feature
I was not sure about what is an additional feature or not, so I implemented 2 features: 

- Pagination
- Filter

When I think about a data table, pagination is an important feature to navigate through results. Filtering is also an important feature to select the results that user might want. 