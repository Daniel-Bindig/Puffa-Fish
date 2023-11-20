const typeDefs = `
  type Product {
    _id: ID!
    title: String!
    description: String!
    price: Float!
    catagory: String!
    imageUrl: String!
    quantityAvailable: Int!
  }

  type Order {
    _id: ID!
    user: ID! # Assuming user ID for simplicity; replace with actual user type if available
    products: [OrderProduct!]!
    totalPrice: Float!
    shippingAddress: String!
  }
  
  type OrderProduct {
    product: Product!
    quantity: Int!
    price: Float!
  }

  type Query {
    products: [Product]
    orders: [Order]
  }

`;

module.exports = typeDefs;