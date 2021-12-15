import React from 'react'
import { Button, Form, Grid, Header, Image, Segment, Message } from 'semantic-ui-react'
import logo from '../../logo.png'
import history from '../../history'

import { Auth } from 'aws-amplify';

const RegisterForm = () => {
  const registerNewUser = async () => {
    try {

      const signupResponse = await Auth.signUp({
        username: state.email,
        password: state.password1,
        attributes: {
          email: state.email,
          given_name: state.firstname,
          family_name: state.lastname
        }
      });

      history.push('/registered')
    } catch (error) {
      setState({...state, error: error.message})
    }

  }
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
          <Image src={logo} /> Zarejestruj się
      </Header>
        {state.error &&
          <Message error header='Wystąpił błąd' content={state.error} />
        }
        <Form size='large'>
          <Segment stacked>
            <Form.Input fluid icon='user' iconPosition='left' placeholder='First name'
              name='firstname'
              onChange={handleChange}
              defaultValue={state.firstname} />
            <Form.Input fluid icon='user' iconPosition='left' placeholder='Last name'
              name='lastname'
              onChange={handleChange}
              defaultValue={state.lastname} />
            <Form.Input fluid icon='mail' iconPosition='left' placeholder='E-mail address' required
              name='email'
              onChange={handleChange}
              required defaultValue={state.email} />
            <Form.Input fluid icon='lock' iconPosition='left' placeholder='Password' type='password' required
              name='password1'
              onChange={handleChange}
              required defaultValue={state.password1} />
            <Form.Input fluid icon='lock' iconPosition='left' placeholder='Password confirm' type='password' required
              name='password2'
              onChange={handleChange}
              required defaultValue={state.password2} />

            <Button fluid size='large' onClick={registerNewUser}>Zarejestruj</Button>
          </Segment>
        </Form>
      </Grid.Column>
    </Grid>
  )
}

export default RegisterForm
