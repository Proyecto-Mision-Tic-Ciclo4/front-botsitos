import React, { useState } from 'react';
import PrivateLayout from './layouts/PrivateLayout';
import PublicLayout from './layouts/PublicLayout'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { UserContext } from './context/userContex';
import Index from './pages/Index'
import IndexUsuario from './pages/Usuario/Index'
import EditarUsuario from './pages/Usuario/Editar';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
import './styles/tabla.css'

// import PrivateRoute from 'components/PrivateRoute';


// const httpLink = createHttpLink({
//   uri: 'https://servidor-gql-mintic.herokuapp.com/graphql',
// })

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache(),
});



function App() {
  const [userData, setUserData] = useState({});

  return (
    <ApolloProvider client={client}>
      <UserContext.Provider value={{ userData, setUserData }}>
        <Router>
          <Routes >
            <Route path="/" element={<PublicLayout />}>
              <Route path="" element={<Index />} />
            </Route>
            <Route path="/usuario" element={<PrivateLayout />}>
              <Route path="/usuario/index" element={<IndexUsuario />} />
              <Route path='/usuario/editar/:_id' element={<EditarUsuario />} />           
            </Route>
          </Routes>
        </Router>
      </UserContext.Provider>   
    </ApolloProvider>
  );
}

export default App;