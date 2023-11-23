import { gql } from '@apollo/client';

export const QUERY_PRODUCTS = gql`
query allProducts {
    products {
      id
      brand
      price
      description
      quantityAvailable
      title
    }
  }
`