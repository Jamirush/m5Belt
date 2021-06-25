import React, { Component } from 'react'

import  { Col, Card} from 'react-bootstrap';
class VampCard extends Component {
    render () {
        const name = this.props.details.name
        return (
            <Col  md={2}>
                <Card id='name' className='myVampire' onClick={this.props.handleAddVampire}>
                    <Card.Body>
                        <Card.Text className='text-center'>
                            {name}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        )
    }
}

export default VampCard