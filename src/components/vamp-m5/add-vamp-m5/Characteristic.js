import React, { Component } from 'react'

import  {Form, Col} from 'react-bootstrap';

class Characteristic extends Component {

    render () {
        

        return (
            <Col  md={4}>
                <Form.Group className="mb-3" controlId={this.props.details.id} >
                    <Form.Label>{this.props.details.name}</Form.Label>
                    <Form.Control 
                        type="text" 
                        name={this.props.details.id} 
                        value={this.props.details.value}  
                        onChange={this.props.handleCharacteristicChange} />
                </Form.Group>
            </Col>
        )
    }
}

export default Characteristic