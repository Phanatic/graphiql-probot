# GraphiQL Probot

> a GitHub App built with [probot](https://github.com/probot/probot) that Gives you a GraphiQL browser for a given installation of your App.

This is a very simple demo that gets the token for an installation when you browse to `https://[hostname]/:installation/graphiql`, and renders a GraphiQL browser that is authenticated with that installation's token. This should not be deployed to production, since anyone who knows the installation ID could use it to query/mutate data for that installation. Mainly want to see if this workflow is useful, and if so, will add some authentication. It may be better to turn this into an Electron app so you can only run it locally.

## Setup

```sh
# Install dependencies
npm install

# Run the bot
npm start
```

See [docs/deploy.md](docs/deploy.md) if you would like to run your own instance of this app.
