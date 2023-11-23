const Product = require('../Models/product');
const Order = require('../Models/Order');

const resolvers = {
  Query: {
    products: async () => {
      try {
        const fetchedProducts = await Product.find();
        return fetchedProducts;
      } catch (error) {
        console.error('Error fetching products:', error);
        throw error;
      }
    },
    orders: async () => {
      try {
        const fetchedOrders = await Order.find();
        return fetchedOrders;
      } catch (error) {
        console.error('Error fetching Orders:', error);
        throw error;
      }
    },
  },
};

module.exports = resolvers;