# News API

A backend service to provide data to `news-app`. Fetches data from the [News Org API](https://newsapi.org/).

## Setup

Fetching data from the News Org API requires creating an account and generating a personal API token, which must be passed in each request to the API.

 1. Generate a News Org API token at [https://newsapi.org](https://newsapi.org).
 1. Create an `.env` file in the project root directory and copy the token into that file (see `test.env` for example). The token will be loaded as an environment variable when the Node process begins, and passed in fetches to the API.

## Local dev

 1. Switch to target Node version, specified in `.nvmrc`. With `nvm`:

    ```sh
    $ nvm use
    ```
 
 1. Install dependencies

    ```sh
    $ npm install
    ```

 1. Start the server

    ```sh
    $ node index.js
    ```

 1. Visit the app running at [localhost:8000](http://localhost:8000)

### Testing

Run unit tests:

```sh
$ npm run test
```