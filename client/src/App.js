import React from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import UploadFile from './components/inputTest/index.js';
import LandingPage from './pages/LandingPage';
// import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignupForm from './pages/SignupPage';
import Dashboard from './pages/Dashboard/index.js';
import Chat from './pages/Chat/index.js';
import Profile from './pages/ProfilePage';
import InitBioPage from './pages/bioForm/index.js';
import InitPreferencePage from './pages/PreferenceTest/index.js';


import { setContext } from '@apollo/client/link/context';


// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

// Construct our main GraphQL API endpoint
const httpLink = createHttpLink({
  uri: '/graphql',
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});


function App() {
  return (



    <ApolloProvider client={client}>


      <Router>
        <>
          {/* <Navbar /> */}
          <Routes>
            <Route
              path="/"
              element={<LandingPage />}
            />
            <Route
              path="/test"
              element={<UploadFile />}
            />
             <Route
              path="/test1"
              element={<InitBioPage />}
            />
            <Route
              path="/test2"
              element={<InitPreferencePage />}
            />
            <Route
              path="/login"
              element={<SignupForm />}
            />
            <Route
              path="/dashboard"
              element={<Dashboard />}
            />
            <Route
              path="/chat"
              element={<Chat />}
            />
            <Route
              path="/profile"
              element={<Profile />}
            />
            <Route
              path='*'
              element={<h1 className="display-2">Wrong page!</h1>}
            />
          </Routes>
        </>

      </Router>
    </ApolloProvider>
  );
}

export default App;
