import React from 'react'


import  {Row, Col } from 'react-bootstrap';
const SpecialisationRules = (
    { 
        needArtisanat, 
        needPerformance, 
        needEdrudition, 
        needSciences,
        freeObtain,
        artisanatObtain, 
        performanceObtain, 
        eruditionObtain, 
        sciencesObtain 
    }) => {
    const freeSpe = <span className={`mx-1 ${freeObtain ? "dot-obtain" : ""}`} >1</span> 
    const artisanatSpe = needArtisanat ? <span className={`mx-1 ${artisanatObtain ? "dot-obtain" : ""}`} >Artisanat</span> : ''
    const performanceSpe = needPerformance ? <span className={`mx-1 ${performanceObtain ? "dot-obtain" : ""}`} >Performance</span> : ''
    const eruditionSpe = needEdrudition ? <span className={`mx-1 ${eruditionObtain ? "dot-obtain" : ""}`} >Érudition</span> : ''
    const siencesSpe = needSciences ? <span className={`mx-1 ${sciencesObtain ? "dot-obtain" : ""}`} >Sciences</span> : ''

    
    return (


        <Row className='text-center'>
            <Col>
                <span><b>Spécialisation : </b></span>
                {freeSpe}
                {artisanatSpe}
                {performanceSpe}
                {eruditionSpe}
                {siencesSpe}
            </Col>
        </Row>
    )
}

export default SpecialisationRules