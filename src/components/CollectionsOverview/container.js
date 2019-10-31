import React from 'react'

import { Query } from 'react-apollo'
import { gql } from 'apollo-boost'

import CollectionOverView from './index'
import Spinner from 'components/Spinner'

const GET_COLLECTIONS = gql`
  {
    collections {
      id
      title
      items {
        id
        name
        price
        imageUrl
      }
    }
  }
`

export default () => (
  <Query query={GET_COLLECTIONS}>
    {({ loading, error, data }) => {
      if (loading) return <Spinner />

      return (
        <CollectionOverView collections={data.collections} />
      )
    }}
  </Query>
)
