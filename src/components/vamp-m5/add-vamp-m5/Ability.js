import React, { Component } from 'react'

import  {Row, Col } from 'react-bootstrap';

class Ability extends Component {
    render () {
        return (
            <Row>
                <Col md={4}>{this.props.details.name}</Col> 
                <Col md={4}>{ this.props.isUgly === true && this.props.details.id === 'charisme' ? <i>Horrible</i> : ''}</Col>
                <Col md={4} className={this.props.isUgly === true && this.props.details.id === 'charisme' ? 'bg-readonly' : ''} >
                    <span id={`cirlce-${this.props.details.id}-1`} className={`m5-circle ${this.props.details.value > 0 ? "dot-obtain" : ""}`} onClick={this.props.isUgly === true && this.props.details.id === 'charisme' ? null : this.props.handleAttribute} value={1} ></span>
                    <span id={`cirlce-${this.props.details.id}-2`} className={`m5-circle ${this.props.details.value > 1 ? "dot-obtain" : ""}`} onClick={this.props.isUgly === true && this.props.details.id === 'charisme' ? null : this.props.handleAttribute} value={2}></span>
                    <span id={`cirlce-${this.props.details.id}-3`} className={`m5-circle ${this.props.details.value > 2 ? "dot-obtain" : ""}`} onClick={this.props.isUgly === true && this.props.details.id === 'charisme' ? null : this.props.handleAttribute} value={3}></span>
                    <span id={`cirlce-${this.props.details.id}-4`} className={`m5-circle ${this.props.details.value > 3 ? "dot-obtain" : ""}`} onClick={this.props.isUgly === true && this.props.details.id === 'charisme' ? null : this.props.handleAttribute} value={4}></span>
                    <span id={`cirlce-${this.props.details.id}-5`} className={`m5-circle ${this.props.details.value > 4 ? "dot-obtain" : ""}`} onClick={this.props.isUgly === true && this.props.details.id === 'charisme' ? null : this.props.handleAttribute} value={5}></span>
                </Col>
            </Row>
        )
    }
}

export default Ability