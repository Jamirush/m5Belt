import React from 'react'

import  {Row, Col } from 'react-bootstrap';

const Discipline = ({details, handleDisciplineChange, isSangClair}) => {
    console.log(isSangClair)
    return (
        <Col md={4}>
            <Row>
                <Col md={4}>{details.name}</Col> 
                <Col md={4}></Col>
                <Col md={4} className={ isSangClair ? 'bg-readonly' : ''} >
                    <span id={`cirlce-${details.id}-1`} className={`m5-circle ${details.value > 0 ? "dot-obtain" : ""}`} onClick={isSangClair ? null : handleDisciplineChange} value={1} ></span>
                    <span id={`cirlce-${details.id}-2`} className={`m5-circle ${details.value > 1 ? "dot-obtain" : ""}`} onClick={isSangClair ? null : handleDisciplineChange} value={2}></span>
                    <span id={`cirlce-${details.id}-3`} className={`m5-circle ${details.value > 2 ? "dot-obtain" : ""}`} onClick={isSangClair ? null : handleDisciplineChange} value={3}></span>
                    <span id={`cirlce-${details.id}-4`} className={`m5-circle ${details.value > 3 ? "dot-obtain" : ""}`} onClick={isSangClair ? null : handleDisciplineChange} value={4}></span>
                    <span id={`cirlce-${details.id}-5`} className={`m5-circle ${details.value > 4 ? "dot-obtain" : ""}`} onClick={isSangClair ? null : handleDisciplineChange} value={5}></span>
                </Col>
            </Row>
        </Col>
    )
}

export default Discipline