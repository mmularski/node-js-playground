import React, { useContext } from "react";
import {
  Container,
  Dropdown,
  Image,
  Menu,
  Icon,
} from 'semantic-ui-react'
import { Link } from "react-router-dom";
import history from "../history";
import { Context } from "../Store";
import logo from '../logo.png'

export default function FixedMenu() {
  const { store, dispatch } = useContext(Context);
  const greetingName = store.user && store.user.firstname ? store.user.firstname : ''

  // TODO LEKCJA 09-08-1. Wylogowanie użytkownika
  const handleLogout = () => {
    dispatch({ type: "logout" })
    console.log('redirecting');
    history.push('/')
  }

  return (
    <Menu fixed='top' inverted>
      <Container>
        <Menu.Item header>
          <Image size='mini' src={logo} style={{ marginRight: '1.5em' }} />
          Serverless Polska SPA
        </Menu.Item>
        <Menu.Item >
          <Link to="/">
            Home
        </Link>
        </Menu.Item>
        <Menu.Item >
          <Link to="/products">
            Produkty
        </Link>
        </Menu.Item>
       
        {store.isAuthenticated &&
          <Dropdown item simple text='Admin'>
           <Dropdown.Menu>
             <Dropdown.Item icon='edit' text='Edycja produktów' />
             <Dropdown.Item icon='cloud download' text='Importuj plik' />
           </Dropdown.Menu>
         </Dropdown>
        }

        {store.isAuthenticating &&
          <Menu.Item position='right' header href="/login">
            <Icon name='sign-in' />Zaloguj
        </Menu.Item>
        }
        {store.isAuthenticating &&
          <Menu.Item header href="/register">
            <Icon name='signup' />Rejestracja
        </Menu.Item>
        }
        {store.isAuthenticated &&
        <Menu.Item position='right'>
          <Dropdown item simple text={`Witaj ${greetingName}!`} position='right'>
           <Dropdown.Menu>
             <Dropdown.Item icon='sign-out' text='Wyloguj' onClick={handleLogout}/>
             <Dropdown.Divider />
             <Dropdown.Item icon='setting' text='Profil' href="/profile" />
           </Dropdown.Menu>
         </Dropdown>
        </Menu.Item>
        }
      </Container>
    </Menu>
  )
}