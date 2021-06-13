import React, { Component } from 'react'

// CSS
import './App.css'

//Bootstrap
import  { Container} from 'react-bootstrap';

//Firebase
import firebase from 'firebase/app'
import 'firebase/auth'
import base, { firebaseApp } from './base'

//Components
import Login from './components/Login'
import Logout from './components/Logout'
import Vampires from './components/vamp-m5/Vampires'

class App extends Component {
  state = {
    user: '',
    vampires: {}
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged(user =>  {
      if(user){
        console.log(user)
          this.handleUserLogin({ user })
      } else {
        console.log('boom!!!! user ??')
      }
    })
  }
 
  handleUserLogin = async authData => {
    this.setState({user: authData.user.uid})
    this.ref = base.syncState(`/${authData.user.uid}/vampires`, {
      context: this,
      state: 'vampires'
    }) //OUVRE LA CONNEXION
    // console.log(this.state.vampires)
    // console.log(this.state.user)
  }
  componentWillUnmount () {
    base.removeBinding(this.ref) //FERME LA CONNEXION
  }

  handleUserLogout = event => {
    event.preventDefault()
    console.log('Logout')
    firebaseApp.auth().signOut().then((user, error) => {
      if(error){
        alert('Boom !')
      }
        this.setState({ user: null })
      })
    }

  render () {
 
    if(!this.state.user) {
      return <Login handleUserLogin={this.handleUserLogin} />
    }

    return (
      <Container id='main'>
        <Logout handleUserLogout={this.handleUserLogout} />
        <Vampires user={this.state.user} vampires={this.state.vampires} />
      </Container>
    )
  }
}

export default App
