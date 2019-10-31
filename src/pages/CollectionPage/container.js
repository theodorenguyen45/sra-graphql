import React from 'react'

import { Query } from 'react-apollo'
import { gql } from 'apollo-boost'

import CollectionPage from './index'
import Spinner from 'components/Spinner'

const GET_COLLECTION_BY_TITLE = gql`
  query getCollectionsByTitle($title: String!) {
    getCollectionsByTitle(title: $title) {
      id
      title
      items {
        id
        name
        imageUrl
        price
      }
    }
  }
`

export default ({ match }) => (
  <Query
    query={GET_COLLECTION_BY_TITLE}
    variables={{ title: match.params.collectionId }}
  >
    {({ loading, data }) => {
      if (loading) return <Spinner />

      const { getCollectionsByTitle } = data

      return (
        <CollectionPage collection={getCollectionsByTitle} />
      )
    }}
  </Query>
)
