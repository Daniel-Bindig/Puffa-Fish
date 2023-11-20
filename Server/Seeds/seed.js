const mongooseConnection = require('../config/connection');
const Product = require('../Models/product'); 
const productData = require('./productData.json'); 

async function seedDatabase() {
    try {
      // Wait for the connection to be established before seeding
      await mongooseConnection;
  
      // Insert the data into the 'Product' collection
      await Product.insertMany(productData);
      console.log('Database seeded successfully!');
    } catch (error) {
      console.error('Error seeding database:', error);
    } finally {
      mongooseConnection.close(); // Close the database connection
    }
  }
  
  // Execute the seeding function
  seedDatabase();