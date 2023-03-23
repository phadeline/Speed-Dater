import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
// import './App.css';
import SignupForm from "./components/signup/index.js";
import { setContext } from "@apollo/client/link/context";
import { createUploadLink } from "apollo-upload-client";
import UploadFile from "./components/inputTest/index";

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem("id_token");
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

// Construct our main GraphQL API endpoint
const httpLink = createUploadLink({
  uri: "/graphql",
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <header className="App-header">
          <h1> Place holder Heading</h1>
        </header>
        <div>
          <main>
            <SignupForm></SignupForm>
            {/* <SignupForm /> */}
            <UploadFile />
          </main>
        </div>
      </div>
    </ApolloProvider>
  );
}

export default App;
