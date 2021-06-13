import React, { Component }  from 'react'
import  { Row, Col, Button} from 'react-bootstrap';

//FontAwesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

library.add(fab, faSignOutAlt)

class Logout extends Component {
    render(){
        return (
            <Row className=' mt-5'>
                <Col md='12'>
                    <Button id='logoutOut-button' onClick={ this.props.handleUserLogout} className='logout-button ' variant="outline-light" size='sm' type='submit'>
                        <FontAwesomeIcon className='mr-1' icon={faSignOutAlt} />  
                        Déconexion
                    </Button>
                </Col>
            </Row>
        )
    }
}

export default Logout