import React, { useContext, useState } from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import logo from '../../logo.png'
import { Context } from "../../Store";
import history from '../../history'

import {Auth} from 'aws-amplify';

const LoginForm = () => {
  const handleSubmit = async () => {
    try {
      const loginResponse = await Auth.signIn(state.username, state.password);

      console.log(loginResponse);

      console.log('dispatching event');
      dispatch({
        type: "login",
        tokens: loginResponse.signInUserSession,
        attributes: loginResponse.attributes
      })
      history.push('/welcome')
    } catch (error) {
      console.log(error);
      setState({
        ...state,
        error: error.message,
      })
    }
  }

  const { dispatch } = useContext(Context);
  const [state, setState] = useState({ error: null, username: '', password: '' })

  const handleChange = (e, { name, value }) => {
    const newState = {...state}
    newState[name] = value
    setState(newState)
  }

  return (
    <Grid textAlign='center' style={{ height: '60vh' }} verticalAlign='middle'>
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as='h2' textAlign='center'>
          <Image src={logo} /> Zaloguj się do aplikacji
      </Header>
        {state.error &&
          <Message error header='Wystąpił błąd' content={state.error} />
        }
        <Form size='large'>
          <Segment stacked>
            <Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail address'
              name='username'
              onChange={handleChange} />
            <Form.Input
              fluid
              icon='lock'
              iconPosition='left'
              placeholder='Password'
              name='password'
              type='password'
              onChange={handleChange}
            />

            <Button fluid size='large' onClick={handleSubmit}>Login</Button>
            <br />
            Zapomniałeś hasło? Kliknij <a href='/forgotpassword'>tutaj</a>
          </Segment>
        </Form>
        <Message>
          Nie masz jeszcze konta? <a href='/register'>Zarejestruj się</a>
        </Message>
      </Grid.Column>
    </Grid>
  )
}
export default LoginForm