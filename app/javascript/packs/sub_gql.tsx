import React from "react"
import ReactDOM from "react-dom"

import ApolloClient from "apollo-boost"
const client = new ApolloClient()

import gql from "graphql-tag"
import { ApolloProvider, Query } from "react-apollo"
const TestQuery = gql`
  {
    testField
  }
`

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(
    <ApolloProvider client={client}>
      <Query query={TestQuery}>
        {({ data, loading }) => {
          if (loading) return <p>loading</p>
          return <div>{data.testField}</div>
        }}
      </Query>
    </ApolloProvider>,
    document.body.appendChild(document.createElement("div"))
  )
})
