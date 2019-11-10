import React from 'react'

import gql from 'graphql-tag'
import { useQuery } from '@apollo/react-hooks'

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

export default () => {
  const { loading, data } = useQuery(GET_COLLECTIONS)

  if (loading) return <Spinner />

  return <CollectionOverView collections={data.collections} />
}
