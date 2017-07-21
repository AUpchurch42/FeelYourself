# Feel-Yourself
For the Full stack online course in 2017 offered by Helio Training. I created a collaborative public feelings board.

## Installation
---
    npm install

Create two terminals. Run
    npm start

... to get the server started.

Then Run

    npm run build

... to get Webpack listening to your changes.


## Testing
---

**Unit Tests**

This project uses `jest` by Facebook to test the application. Files that we test belong in the `__tests__` directory. 


**End-to-End**
The end-to-end tests belong in a different project folder. Please look at this repo here: [lwestley](https://www.github.com/lwestley/e2e)


### Notes
When deploying Heroku, be sure to pass in  your own `DB` environment variable, so the app has access to a database. This app does require `mongod` service to be running.
... to get Webpack listening to your changes.
