import { Authenticator } from "@aws-amplify/ui-react";
import Amplify from "aws-amplify";
import config from "./aws-exports";

import { Content } from "./Content";

import "@aws-amplify/ui-react/styles.css"; // default theme
import "./App.css";

Amplify.configure(config);

function App() {
  return (
    <Authenticator>
      {({ signOut, user }) => <Content user={user} signOut={signOut} />}
    </Authenticator>
  );
}

export default App;
