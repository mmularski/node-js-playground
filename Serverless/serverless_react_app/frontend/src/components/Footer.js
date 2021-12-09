import React from 'react'
import {
  Container,
  Divider,
  Grid,
  Header,
  Image,
  List,
  Segment,
} from 'semantic-ui-react'
import logo from '../ServerlessPolskaLogo.png'

export default function Footer() {
  return ( <Segment inverted vertical style={{ margin: '5em 0em 0em', padding: '5em 0em' }}>
  <Container textAlign='center'>
    <Grid divided inverted stackable>
      <Grid.Column width={3}>
        <Header inverted as='h4' content='Group 1' />
        <List link inverted>
          <List.Item as='a'>Link One</List.Item>
          <List.Item as='a'>Link Two</List.Item>
          <List.Item as='a'>Link Three</List.Item>
          <List.Item as='a'>Link Four</List.Item>
        </List>
      </Grid.Column>
      <Grid.Column width={3}>
        <Header inverted as='h4' content='Group 2' />
        <List link inverted>
          <List.Item as='a'>Link One</List.Item>
          <List.Item as='a'>Link Two</List.Item>
          <List.Item as='a'>Link Three</List.Item>
          <List.Item as='a'>Link Four</List.Item>
        </List>
      </Grid.Column>
      <Grid.Column width={3}>
        <Header inverted as='h4' content='Group 3' />
        <List link inverted>
          <List.Item as='a'>Link One</List.Item>
          <List.Item as='a'>Link Two</List.Item>
          <List.Item as='a'>Link Three</List.Item>
          <List.Item as='a'>Link Four</List.Item>
        </List>
      </Grid.Column>
      <Grid.Column width={7}>
        <Header inverted as='h4' content='Korpo stopka 🙂 😉' />
        <p>
          Wzięta wprost z przykładów biblioteki React Semantic UI.
        </p>
      </Grid.Column>
    </Grid>

    <Divider inverted section />
    <Image centered size='medium' src={logo} />
    <Header inverted as='h5' content='Napisane z ❤️ we Wrocławiu' />
    <p>Copyright (c) 2020 Paweł Zubkiewicz | Oprogramowanie na licencji MIT</p>
    <List horizontal inverted divided link size='small'>
      <List.Item as='a' href='#'>
        Site Map
      </List.Item>
      <List.Item as='a' href='#'>
        Contact Us
      </List.Item>
      <List.Item as='a' href='#'>
        Terms and Conditions
      </List.Item>
      <List.Item as='a' href='#'>
        Privacy Policy
      </List.Item>
    </List>
  </Container>
</Segment>
  )
}