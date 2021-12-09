import React from 'react'
import { Button, Form, Grid, Header, Image, Segment, Message } from 'semantic-ui-react'
import logo from '../../logo.png'
import { Context } from "../../Store";

const ProfileForm = () => {

  // TODO LEKCJA 09-09. Modyfikacja profilu użytkownika
  const updateProfile = async () => {
    const newAttributes = {
      given_name: state.firstname.trim(),
      family_name: state.lastname.trim(),
      email: state.email.trim()
    }
    
    // cognito code goes here

    dispatch({
      type: "login",
      attributes: {
        given_name: 'Paweł',
        family_name: 'Zubkiewicz'
      }
    })
    setState({ ...state, updated: true })
  }

  const { dispatch } = React.useContext(Context);
  const [state, setState] = React.useState({ error: null, updated: null, firstname: '', lastname: '', email: '' })

  const handleChange = (e, { name, value }) => {
    const newState = { ...state, updated: false }
    newState[name] = value
    setState(newState)
  }



  return (
    <Grid textAlign='center' style={{ height: '60vh' }} verticalAlign='middle'>
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as='h2' textAlign='center'>
          <Image src={logo} /> Twój profil
      </Header>
        {state.updated &&
          <Message info header='Profil zaktualizowany w Amazon Cognito' />
        }

        <Form size='large' loading={false}>
          <Segment stacked>
            <Form.Input fluid icon='user' iconPosition='left' placeholder='First name'
              name='firstname'
              onChange={handleChange}
              defaultValue='' />
            <Form.Input fluid icon='user' iconPosition='left' placeholder='Last name'
              name='lastname'
              onChange={handleChange}
              defaultValue='' />
            <Form.Input fluid icon='mail' iconPosition='left' placeholder='E-mail address'
              name='email'
              onChange={handleChange}
              required defaultValue='' />
            <Button fluid size='large' onClick={updateProfile}>Zmień profil</Button>
          </Segment>
        </Form>
      </Grid.Column>
    </Grid>
  )
}

export default ProfileForm