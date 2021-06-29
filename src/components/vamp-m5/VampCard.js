import React, { Component } from 'react'

import  { Col, Card} from 'react-bootstrap';
class VampCard extends Component {
    render () {
        const name = this.props.details.name
        return (
            <Col  md={2}>
                <Card className='myVampire' >
                    <Card.Body id={this.props.id} onClick={this.props.handleContinueAddVampire}>
                        <Card.Text className='text-center' id={this.props.id} onClick={this.props.handleContinueAddVampire} >
                            {name}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        )
    }
}

export default VampCard