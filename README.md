# Doctor Front End
Small Rails API to serve up to a React Front End

## Rails API
https://github.com/abrahamkinney/doctor-api

### Clone the Repository
```console
https://github.com/abrahamkinney/doctor-frontend
```

### -- Make sure you have Node and NPM installed --

### Install Node Package
```console
npm insall
```

### Install Redis
```console
brew install redis
```

### Install Node
```console
brew install node
```

### Install Node Packages
```console
npm install
```

### Setup Databases
```console
brew install postgres
```
**NOTE: do NOT run standard Rails db tasks like `rake db:migrate`**
Management of the lootcrate database for all projects is handled
via ldbm, the Lootcrate database manager. For instructions see the
[README in the lootcrate/ldbm repository](https://github.com/LootCrate/ldbm).

##### Populate Database with Plans Data
Install Heroku
```console
brew install heroku
```

(ensure you have been given Heroku permissions to access lootcrate fastly)
Run the following command: `bash bin/copy_plans_pages.sh lootcrate-fastly local`

### Setup Front-End Assets
```console
npm install -g bower
bundle exec rake assets:precompile
```

### Setup Testing Dependencies
```console
brew install phantomjs
bundle exec rake db:test:prepare
```

##### Creating Test Users
Instructions: Run rake command below with desired test user. It will create all necessary data in database and recurly. It will output the email/password.

```console
bundle exec rake create_test_users:with_one_active_subscription
bundle exec rake create_test_users:help (list of commands)
```

## Working in Development

### Start the Lootcrate API Server:
```console
bash -c 'cd ../lootcrate-api-grape/ && bundle exec rackup'
```

### Start Foreman
```console
bundle exec foreman start -f Procfile.development
```

### Create test database
```console
createdb lootcrate_test
```

## Running Tests

```console
bundle exec spec
npm test
```

Use the flag --watch to run tests on based on file changes.
```console
npm test -- --watch
```

Run client mocha/chai/sinon/enzyme test
```console
npm run mochaTest
```

Run the full test suite (Jest/Mocha/chai/sinon/enzyme)
```console
npm run testSuite
```

The JS Jasmine test suite that may be ran from the client browser using Teaspoon
```console
http://localhost:3000/teaspoon
```

To run all Jasmine tests:
```console
http://localhost:3000/teaspoon/default
```

## I18n

**Shipping** currently only United States and Canada.
**Billing** supports all countries.

## Deployment on Heroku
Since we are using a node and ruby buildpack, we will need to set that up in
our Heroku's application. The order of buildpack execution matters here: assets
must be bundled and packaged by webpack before we precompile using the assets
pipeline.
```console
heroku buildpacks:clear --app <app_name>
heroku buildpacks:set heroku/nodejs --app <app_name>
heroku buildpacks:add heroku/ruby --index 2 --app <app_name>
