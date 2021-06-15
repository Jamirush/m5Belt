import React, { Component } from 'react'
import Characteristic from './add-vamp-m5/Characteristic'

import  {Container, Form, Row, Col, Button} from 'react-bootstrap';

class NewVampire extends Component {
    state = {
        characteristics: {
            name: {id: 'name', name:'Nom', value:''},
            concept: {id: 'concept', name:'Concept', value:''},
            chronique: {id: 'chronique', name:'Chronique', value:''},
            ambition: {id: 'ambition', name:'Ambition', value:''},
            sir: {id: 'sir', name:'Sire', value:''},
            desire: {id: 'desire', name:'Désir', value:''},
            predator: {id: 'predator', name:'Prédateur', value:''}
        },
        attributes: {
            force: {id: 'force', name:'Force', value:'4'},
            wits: {id: 'wits', name:'Astuce', value:'2'},
        }
    }

    handleCharacteristicChange = event => {
        const { id, value } = event.target  
        const characteristics = { ...this.state.characteristics }
        console.log(characteristics)
        console.log(characteristics[id])

        characteristics[id].value = value
        this.setState({characteristics: characteristics})
        
    }

    resetFrom = () => {
        // this.setState({... attributes})
    }
    
    handleSubmitNewVampire = event =>{
        const vampire = {...this.state}
        this.props.handleAddNewVampire(vampire)
        this.resetFrom()
    }

    render () {

        const characteristics = Object.keys(this.state.characteristics)
        .map(key => <Characteristic 
                        key = {key} details={this.state.characteristics[key]} 
                        handleCharacteristicChange={this.handleCharacteristicChange} 
                    />)


        return (
            <Container id='add-vapire-m5' className='mt-3'>
                <Button onClick={this.handleSubmitNewVampire} variant="dark" className='mt-3'>Enregistrer</Button>
                <Row>
                    <Col lg={12} className="text-center">
                        <h1 className="mt-2 mb-2">Vampire</h1>
                    </Col>
                </Row>
                
                <Row>
                    <Col lg={12} className="text-center">
                        <h6>La Masquarade</h6>
                    </Col>
                </Row>

                {/* CHARACTERISTICS */}
                <Form >
                    <Row>
                        {characteristics}
                    </Row>
                </Form>

            </Container>


          
        )
    }
}

export default NewVampire