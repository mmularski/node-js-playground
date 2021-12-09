import React from "react";
import { Container, Header } from 'semantic-ui-react'

export default function Registered() {
  return (
    <Container text style={{ marginTop: '7em' }}>
      <Header as='h1'>Dzięki za rejestrację!</Header>
      <Header as='h3'>Zaraz otrzymasz maila z linkiem w który musisz kliknąć</Header>
    </Container>
  )
}