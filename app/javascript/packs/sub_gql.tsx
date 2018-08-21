import React from "react"
import ReactDOM from "react-dom"

import { client } from "./apollo"

import gql from "graphql-tag"
import { ApolloProvider, Subscription } from "react-apollo"
const TestSubscription = gql`
  subscription {
    testSub
  }
`

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(
    <ApolloProvider client={client}>
      <Subscription subscription={TestSubscription}>
        {({ data, loading }) => {
          if (loading) return <p>loading</p>
          return <div>{data.testSub}</div>
        }}
      </Subscription>
    </ApolloProvider>,
    document.body.appendChild(document.createElement("div"))
  )
})
