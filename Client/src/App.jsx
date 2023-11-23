import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar/Navbar'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import HomePage from './pages/homePage'
import AboutPage from './pages/aboutPage'
import ProductPage from './pages/productPage'
import CartPage from './pages/CartPage'
import LoginSignup from './pages/LoginSignup'
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
  } from '@apollo/client';
  import { setContext } from '@apollo/client/link/context';

  const httpLink = createHttpLink({
    uri: 'http://localhost:3001/graphql',
  });
  

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});


const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
})

  

function App() {
  const [count, setCount] = useState(0)

  return (
  <ApolloProvider client={client}>
    <>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/about' element={<AboutPage/>}/>
        <Route path='/product' element={<ProductPage/>}>
          <Route path=':productId' element={<ProductPage/>}/>
        </Route>
        <Route path='/cart' element={<CartPage/>}/>
        <Route path='/login' element={<LoginSignup/>}/>
      </Routes>
      </BrowserRouter>
    </>
  </ApolloProvider>
  )
}

export default App
