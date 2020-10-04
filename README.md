# How to run on local

```properties
$ serverless offline start
```

# How to deploy to cloud

```properties
$ NODE_ENV=production serverless deploy --stage prod
```

Clean up

```properties
$ serverless remove --stage prod
```

<!-- Reference -->
[aws-serverless-lambda-apollo-graphql]: https://itnext.io/how-to-build-a-serverless-apollo-graphql-server-with-aws-lambda-webpack-and-typescript-64a377739208