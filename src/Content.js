import { API, Auth } from "aws-amplify";
import { useEffect, useState } from "react";
import * as mutations from "./graphql/mutations";
import * as queries from "./graphql/queries";

export function Content({ user, signOut }) {
  const [error, setError] = useState("");
  const [memberships, setMemberhsips] = useState();
  const [organisations, setOrganisations] = useState();
  const [name, setName] = useState("");

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
        setError(error);
      });
    Auth.currentSession()
      .then((session) => session.getIdToken().getJwtToken())
      .then((authToken) =>
        API.graphql({
          query: queries.listUserMemberships,
          authToken,
        })
      )
      .then((response) => setMemberhsips(response))
      .catch((error) => {
        console.error(error);
        setError(error);
      });
  }, []);

  return (
    <main>
      <h1>Hello {user.username}</h1>
      <button onClick={signOut}>Sign out</button>

      <div style={{ margin: "20px" }}>
        <input value={name} onChange={(e) => setName(e.target.value)} />
        <button onClick={handleCreateOrganisation}>Create organisation</button>
      </div>

      <pre>{JSON.stringify(error, null, 2)}</pre>

      <p>Memberships:</p>
      <pre>{JSON.stringify(memberships, null, 2)}</pre>

      <p>Organisations:</p>
      <pre>{JSON.stringify(organisations, null, 2)}</pre>
    </main>
  );

  async function handleCreateOrganisation() {
    if (!name) return;

    await Auth.currentSession()
      .then((session) => session.getIdToken().getJwtToken())
      .then((authToken) =>
        API.graphql({
          variables: { input: { name } },
          query: mutations.createOrganisation,
          authToken,
        })
      );
  }
}
