import React, { Component } from 'react'

import ShowVampireCards from './ShowVampireCards'
import NewVampire from './NewVampire'

class Vampires extends Component {
    state = {  
        addNewVampire: false,
        continueNewVampire: false,
        curentVampId:''
    }

    handleAddNewVampire = () => {
        this.setState({ curentVampId: '' })
        this.setState({ continueNewVampire: false })
        this.setState({ addNewVampire: true })
    }
    handleContinueAddVampire = event => {
        const { id } = event.target  
        console.log( id );
        this.setState({ addNewVampire: false })
        this.setState({ curentVampId: id })
        this.setState({ continueNewVampire: true })
    }
    
    render () {
        // New vampire creation
        if(this.state.addNewVampire){ 
            return(
                <NewVampire 
                    handleAddVampire = {this.props.handleAddVampire}
                />
            )
        }
        //Continue vampire creation
        if(this.state.continueNewVampire){ 
            return(
                <NewVampire 
                vampire={this.props.vampires[this.state.curentVampId]}
                handleAddVampire = {this.props.handleAddVampire}
                />
            )
        }

        //Show list of current vampire
        return(
            <ShowVampireCards 
                vampires={this.props.vampires}
                handleAddNewVampire = {this.handleAddNewVampire}
                handleContinueAddVampire = {this.handleContinueAddVampire}
            />
        )
    }
}

export default Vampires