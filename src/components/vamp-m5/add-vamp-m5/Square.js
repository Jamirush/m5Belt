import React, { Component } from 'react'

import  {Row, Col } from 'react-bootstrap';

class Square extends Component {
    render () {
        return (
            <Row className='text-center'>
                <Col lg={12}>{this.props.details.name}</Col>
                <Col lg={12}>
                    <span className={`m5-square ${this.props.details.value > 0 ? "dot-obtain" : ""}`}></span>
                    <span className={`m5-square ${this.props.details.value > 1 ? "dot-obtain" : ""}`}></span>
                    <span className={`m5-square ${this.props.details.value > 2 ? "dot-obtain" : ""}`}></span>
                    <span className={`m5-square ${this.props.details.value > 3 ? "dot-obtain" : ""}`}></span>
                    <span className={`mr-1 m5-square ${this.props.details.value > 4 ? "dot-obtain" : ""}`}></span>
                    <span className={`m5-square ${this.props.details.value > 5 ? "dot-obtain" : ""}`}></span>
                    <span className={`m5-square ${this.props.details.value > 6 ? "dot-obtain" : ""}`}></span>
                    <span className={`m5-square ${this.props.details.value > 7 ? "dot-obtain" : ""}`}></span>
                    <span className={`m5-square ${this.props.details.value > 8 ? "dot-obtain" : ""}`}></span>
                    <span className={`m5-square ${this.props.details.value > 9 ? "dot-obtain" : ""}`}></span>
                </Col>
            </Row>
        )
    }
}

export default Square