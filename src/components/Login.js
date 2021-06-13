import React,{ Component } from 'react'

import firebase from 'firebase/app'
import 'firebase/auth'
import { firebaseApp } from '../base'

import  { Container, Row, Col, Button} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
 
class Login extends Component {

  authenticate = () => {
    const authProvider = new firebase.auth.FacebookAuthProvider()
    firebaseApp.auth().signInWithPopup(authProvider)
      .then((result, error) => {
        if (error) {
          alert('Imposible de vous identifier ...')
        } else {
          this.props.handleUserLogin(result)
        }
      })
  }

  render () {

    return (
    <Container className="main-style">
      <Row className='justify-content-md-center mt-5'>
          <Col md='6'  className='text-center'>
            <Button onClick={this.authenticate} className=' facebook-button' variant="outline-primary" size='sm' type='submit'>
              <FontAwesomeIcon className='mr-1' style={{fontSize: 16}} icon={['fab', 'facebook']} />
              Connexion avec facebook 
            </Button>
          </Col> 
        </Row>
      </Container>
    )
  }
}

export default Login
