import React, { useContext } from "react";
import { Container, Header } from 'semantic-ui-react'
import { Context } from "../../Store";

export default function Welcome() {
  const { store } = useContext(Context);

  return (
    <Container text style={{ marginTop: '7em' }}>
      <Header as='h1'>Witaj {store.user && store.user.firstname}!</Header>
      <Header as='h3'>Udało Ci się zalogować do aplikacji</Header>
    </Container>
  )
}