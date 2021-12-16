import { API, Auth } from "aws-amplify";
import { useEffect, useState } from "react";
import * as queries from "./graphql/queries";

export function Content({ user, signOut }) {
  const [organisations, setOrganisations] = useState([]);

  useEffect(() => {
    Auth.currentSession()
      .then((session) => session.getIdToken().getJwtToken())
      .then((authToken) =>
        API.graphql({
          query: queries.listOrganisations,
          authToken,
        })
      )
      .then((response) => setOrganisations(response))
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <main>
      <h1>Hello {user.username}</h1>
      <button onClick={signOut}>Sign out</button>
      <pre>{JSON.stringify(organisations, null, 2)}</pre>
    </main>
  );
}
