# HOW TO USE GRAPHQL SUBSCRIPTION

This repo is using

- rails
- [graphql-ruby](https://github.com/rmosolgo/graphql-ruby)
- [apollo2](https://www.apollographql.com/docs/react/essentials/get-started.html#installation)
- [ActionCable](http://graphql-ruby.org/javascript_client/apollo_subscriptions#apollo-2--actioncable)


## JUST TRY IT OUT

```bash
git clone https://github.com/github0013/graphql_subscription_actioncable.git
cd graphql_subscription_actioncable
rails s
```

then open `http://localhost:3000/`. 
You should only see this.

![](https://raw.githubusercontent.com/github0013/graphql_subscription_actioncable/master/doc/loading.png)


Open another terminal and run
```bash
rails c

> GraphqlSubscriptionActioncableSchema.subscriptions.trigger('testSub', {}, Time.now.to_i)
```

then you should see a timestamp number on the page.

![](https://raw.githubusercontent.com/github0013/graphql_subscription_actioncable/master/doc/triggered.png)

## THINGS TO CHECK WHEN YOU IMPLEMENT GRAPHQL SUBSCRIPTION

- [check ActionCable's allowed origins](https://guides.rubyonrails.org/action_cable_overview.html#allowed-request-origins)
- [check cable.yml](https://guides.rubyonrails.org/action_cable_overview.html#adapter-configuration)
**be sure to use anything other than `adapter: async`**
- don't just copy [GraphqlChannel sample](http://graphql-ruby.org/api-doc/1.8.7/GraphQL/Subscriptions/ActionCableSubscriptions) as is. It needs some changes.

## check the git log
I kept commands I ran in the log.   It should self-explanatory.
