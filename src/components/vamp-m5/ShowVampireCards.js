import React, { Component } from 'react'
import  { Row, Col, Card} from 'react-bootstrap';

//FontAwesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import VampCard from './VampCard'

library.add(fab, faPlusCircle)

class ShowVampireCards extends Component {

    render () {
        console.log(this.props.vampires)
        
          const vampireList = this.props.vampires
          const vampires = Object.keys(vampireList)
          .map(key => <VampCard key = {key} id = {key} details={vampireList[key]} handleContinueAddVampire={this.props.handleContinueAddVampire}/> )

        return(
            <Row id='vampires-list'>
                <Col md={2}>
                    <Card id='new-vampire' onClick={this.props.handleAddNewVampire}>
                        <Card.Body>
                            <Card.Text className='text-center'>
                                <FontAwesomeIcon icon={faPlusCircle} />
                            </Card.Text>
                         </Card.Body>
                    </Card>
                </Col>
                  {vampires}
            </Row>
        )
    }
}

export default ShowVampireCards