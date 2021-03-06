import express from 'express'

import * as bodyParser from 'body-parser'
import { merge } from 'lodash'

import { ApolloServer, gql } from 'apollo-server-express'
import { buildFederatedSchema } from '@apollo/federation'
import mongoose from 'mongoose'

import { postTypeDefs, postResolvers } from './Post'
import PostModel from './Post/Model'

const typeDefs = gql`
  extend type Error @key(fields: "status") @key(fields: "message") {
    message: String @external
    status: Int @external
  }

  extend type User @key(fields: "_id") {
    _id: ID @external
    posts: [Post]
  }

  type Post @key(fields: "_id") {
    _id: ID
    name: String
    description: String
    author: User
    createdAt: String
  }

  ${postTypeDefs}
`

const resolverReferences = {
  User: {
    async posts(user) {
      return await PostModel.find({ userId: user._id })
    }
  },
  Post: {
    author(post) {
      return { __typename: 'User', _id: post.userId }
    }
  }
}

const resolvers = merge(resolverReferences, postResolvers)

const app = express()
require('dotenv').config()

const MONGO_DB = process.env.MONGO_DB

mongoose
  .connect(`mongodb://localhost:27017/${MONGO_DB}`, { useNewUrlParser: true })
  .then((res) => {
    console.log('mongoose connected successfully')
    const server = new ApolloServer({
      // @ts-ignore
      schema: buildFederatedSchema([
        {
          typeDefs,
          resolvers
        }
      ]),
      // @ts-ignore
      context: ({ req, res, context }) => {
        return {
          req,
          res,
          context
        }
      }
    })

    server.applyMiddleware({ app })

    const PORT = process.env.PORT

    app.listen(PORT, () => {
      console.log(`server is listening to port ${PORT}`)
    })
  })
  .catch((err) => {
    console.error(err)
  })
