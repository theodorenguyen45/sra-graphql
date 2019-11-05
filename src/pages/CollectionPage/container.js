import React from 'react'

import gql from 'graphql-tag'
import { useQuery } from '@apollo/react-hooks'

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

export default ({ match }) => {
  const { loading, data } = useQuery(GET_COLLECTION_BY_TITLE, {
    variables: { title: match.params.collectionId }
  })

  if (loading) return <Spinner />

  const { getCollectionsByTitle } = data
  return <CollectionPage collection={getCollectionsByTitle} />
}
