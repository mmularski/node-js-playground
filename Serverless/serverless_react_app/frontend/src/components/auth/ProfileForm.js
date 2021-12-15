import { Auth } from 'aws-amplify';
import React from 'react'
import { Button, Form, Grid, Header, Image, Segment, Message } from 'semantic-ui-react'
import logo from '../../logo.png'
import { Context } from "../../Store";

const ProfileForm = () => {
  const updateProfile = async () => {
    const newAttributes = {
      given_name: state.firstname.trim(),
      family_name: state.lastname.trim(),
      email: state.email.trim()
    }
    
    const user = await Auth.currentAuthenticatedUser();

    await Auth.updateUserAttributes(user, newAttributes);

    dispatch({
      type: "login",
      attributes: {
        given_name: state.firstname,
        family_name: state.lastname
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

  const [result, loading] = useAsyncHook();

  function useAsyncHook() {
    const [result, setResult] = React.useState([]);
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
      async function fetchUserData() {
        const user = await Auth.currentAuthenticatedUser();
        const attrs = await Auth.userAttributes(user);

        const attributes = {};
        attrs.forEach(element => attributes[element.Name] = element.Value);
        console.log('attributes', attributes);

        setLoading(false);
        setState({
          error: null,
          updated: null,
          firstname: attributes.given_name ? attributes.given_name : '',
          lastname: attributes.family_name ? attributes.family_name : '',
          email: attributes.email ? attributes.email : ''
        });
      }
      fetchUserData()
    }, ['']);

    return [result, loading]
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

        <Form size='large' loading={loading}>
          <Segment stacked>
            <Form.Input fluid icon='user' iconPosition='left' placeholder='First name'
              name='firstname'
              onChange={handleChange}
              defaultValue={state.firstname} />
            <Form.Input fluid icon='user' iconPosition='left' placeholder='Last name'
              name='lastname'
              onChange={handleChange}
              defaultValue={state.lastname} />
            <Form.Input fluid icon='mail' iconPosition='left' placeholder='E-mail address'
              name='email'
              onChange={handleChange}
              required defaultValue={state.email} />
            <Button fluid size='large' onClick={updateProfile}>Zmień profil</Button>
          </Segment>
        </Form>
      </Grid.Column>
    </Grid>
  )
}

export default ProfileForm