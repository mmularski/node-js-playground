import React from 'react'
import { Container, Header, Image, List } from 'semantic-ui-react'
import image from '../serverless-szkolenie.jpg'

export default function Home() {
  return (
    <Container text style={{ marginTop: '7em' }}>
    <Header as='h1'>Witaj w module dziewiątym i dziesiątym szkolenia</Header>
    <Image src={image} fluid centered />
    <Header as='h1'>To jest przykładowa aplikacja SPA</Header>
    <p>czyli <b>Single Page Application</b> napisana w React.js</p>
 
    <p>Aplikacja posłuży za przykład do następujących ćwiczeń</p>
    <List divided relaxed>
    <List.Item>
      <List.Icon name='aws' size='big' verticalAlign='middle' color='orange' />
      <List.Content>
        <List.Header as='a'>Podłączenie Amazon Cognito</List.Header>
        <List.Description as='a'>Repozytorium użytkowników jako usługa</List.Description>
      </List.Content>
    </List.Item>
    <List.Item>
      <List.Icon name='aws' size='big' verticalAlign='middle' color='orange' />
      <List.Content>
        <List.Header as='a'>Zarządzanie użytkownikami</List.Header>
        <List.Description as='a'>Rejestracja, Logowanie, Wylogowania, Modyfikacja profilu</List.Description>
      </List.Content>
    </List.Item>
    <List.Item>
      <List.Icon name='aws' size='big' verticalAlign='middle' color='orange' />
      <List.Content>
        <List.Header as='a'>Zabezpieczenie API Gateway</List.Header>
        <List.Description as='a'>Tylko zalogowani użytkownicy będą mogli wykonywać wybrane metody naszego API</List.Description>
      </List.Content>
    </List.Item>
    <List.Item>
      <List.Icon name='aws' size='big' verticalAlign='middle' color='orange' />
      <List.Content>
        <List.Header as='a'>Upload plików do S3</List.Header>
        <List.Description as='a'>W bezpieczny sposób, z pominięciem serwera, bo nie mamy serwera 😃</List.Description>
      </List.Content>
    </List.Item>
  </List>
  </Container>
  )
}