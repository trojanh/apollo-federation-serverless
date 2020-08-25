import React from 'react'
import './App.css'
import { StackComponent } from './components'
import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { HttpLink } from 'apollo-link-http'
import { ApolloProvider } from '@apollo/react-hooks'

const link = new HttpLink({
  uri: 'http://localhost:3000/dev/graphql'
})

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link
})

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <StackComponent />
      </div>
    </ApolloProvider>
  )
}

export default App
