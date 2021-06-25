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
    user:'',
    vampires: []
  }

  componentDidMount() {

    if(this.state.user === ''){
      firebase.auth().onAuthStateChanged(user =>  {
        if(user){
            this.handleUserLogin({ user })
            this.syncVampires()
        } else {
          console.log('error')
        }
      })
    } else {
      
      this.syncVampires()
    }

  }

  componentWillUnmount () {
    base.removeBinding(this.ref) //FERME LA CONNEXION
  }

  syncVampires = () =>{
    this.ref = base.syncState(`/${this.state.user}/vampires`, {
      context: this,
      state: 'vampires'
    }) //OUVRE LA CONNEXION
  }

  handleUserLogin = async authData => {
    this.setState({user: authData.user.uid})
  }

  handleUserLogout = event => {
    event.preventDefault()
    firebaseApp.auth().signOut().then((user, error) => {
      if(error){
        alert('Boom !')
      }
        this.setState({ user: null })
    })
  }

  handleAddNewVampire = vampire => {
    const vampires = { ...this.state.vampires }
    vampires[`vampM5-${Date.now()}`] = vampire
    this.setState({ vampires })

  }

  render () {

    if(!this.state.user) {
      return <Login handleUserLogin={this.handleUserLogin} />
    }

    return (
      <Container id='main'>
        <Logout handleUserLogout={this.handleUserLogout} />
        <Vampires 
          user={this.state.user} 
          vampires={this.state.vampires} 
          handleAddNewVampire={this.handleAddNewVampire} 
        />
      </Container>
    )
  }
}

export default App
