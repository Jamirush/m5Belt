import React, { Component } from 'react'

import  {Row, Col, Form } from 'react-bootstrap';

class Skill extends Component {
    render () {
        return (
            <Row className='skill-row'>
                <Col lg={4}>{this.props.details.name}</Col>
                <Col md={12} lg={4} className='b-dotted'>

                    <Form.Group  className="skill-input" controlId={`specialisation-${this.props.details.id}`} >
                        <Form.Control 
                            readOnly={this.props.details.value === 0}
                            type="text" 
                            name={this.props.details.name} 
                            value={this.props.details.specialisation}  
                            onChange={this.props.handleSkillSpecialisationChange} />
                    </Form.Group>

                </Col>
                <Col lg={4}>
                    <span id={`cirlce-${this.props.details.id}-1`} className={`m5-circle ${this.props.details.value > 0 ? "dot-obtain" : ""}`} onClick={this.props.handleSkill}></span>
                    <span id={`cirlce-${this.props.details.id}-2`} className={`m5-circle ${this.props.details.value > 1 ? "dot-obtain" : ""}`} onClick={this.props.handleSkill}></span>
                    <span id={`cirlce-${this.props.details.id}-3`} className={`m5-circle ${this.props.details.value > 2 ? "dot-obtain" : ""}`} onClick={this.props.handleSkill}></span>
                    <span id={`cirlce-${this.props.details.id}-4`} className={`m5-circle ${this.props.details.value > 3 ? "dot-obtain" : ""}`} onClick={this.props.handleSkill}></span>
                    <span id={`cirlce-${this.props.details.id}-5`} className={`m5-circle ${this.props.details.value > 4 ? "dot-obtain" : ""}`} onClick={this.props.handleSkill}></span>
                </Col>
            </Row>
        )
    }
}

export default Skill