![Header](https://assets.buildable.dev/catalog/graphics/one-api-100-integrations.png)

[![Buildable](https://assets.buildable.dev/buildable-logos/powered-by-buildable.svg)](https://buildable.dev) [![GitHub stars](https://img.shields.io/github/stars/buildable/actions)](https://github.com/buildable/actions/stargazers) ![GitHub contributors](https://img.shields.io/github/contributors/buildable/actions) ![GitHub pull requests](https://img.shields.io/github/issues-pr-raw/buildable/actions) ![GitHub commit activity](https://img.shields.io/github/commit-activity/m/buildable/actions) [![GitHub issues](https://img.shields.io/github/issues/buildable/actions)](https://github.com/buildable/actions/issues) ![GitHub closed issues](https://img.shields.io/github/issues-closed/buildable/actions) ![GitHub release (latest by date)](https://img.shields.io/github/v/release/buildable/actions) [![GitHub license](https://img.shields.io/github/license/buildable/actions)](https://github.com/buildable/actions) [![Twitter Follow](https://img.shields.io/twitter/follow/BuildableHQ?style=social)](https://twitter.com/BuildableHQ)

---

# What are Action Templates?

[Action Templates](/catalog/) are open-source functions that save developers hundreds of hours when integrating databases, apps and other complicated logic. They work natively with [Buildable Workflows](https://docs.buildable.dev/workflows/building-workflows), which means you can build, test, deploy any integration using Templates in a matter of minutes.

Check out the [contribution guidelines](CONTRIBUTING.md) to start creating your own Actions. 

## How Templates Work

Each Action Template is comprised of an `input` and `run` function. Together, they should represent one logic step with a single purpose (i.e. Sending an email with Sendgrid).

### The Input Function
The `input` function’s sole purpose is to select the data that will be passed into the run function.

It has access to:

- `$body` - The Workflow's body
- `$headers` - The Workflow's headers
- `$env` - Your Environment Variables
- `$actions` - The outputs of all Actions above itself
- `$query` - The Workflow's query

⚠️ It’s important to make sure your input function is only used for selection and not for processing. Following best practices, you shouldn’t write any logic within the input function. To enforce this, Buildable purposefully allocates lower resources to input functions.

### The Run Function
The `run` function is where you write the processing and logic of your Action. Whatever is returned in the run function will be the response of the Action.

It has access to:

- `input` - The values passed in from the input function

You can view a sample `run` function in the [sample directory](/sample/).

## Read More

Check out [docs.buildable.dev](https://docs.buildable.dev) to read more on Actions and Workflows.
- [Actions Catalog](https://docs.buildable.dev/connections/action-catalog)
- [Building Workflows](https://docs.buildable.dev/workflows/building-workflows)
- [Managing Workflows](https://docs.buildable.dev/workflows/managing-workflows)

## Contributors

Supported by a network of early advocates, contributors, and champions!

<a href="https://github.com/buildable/actions/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=buildable/actions" />
</a>

### License

© 2022, Buildable Technologies Inc. - Released under the MIT License
