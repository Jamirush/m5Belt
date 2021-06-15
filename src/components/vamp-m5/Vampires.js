import React, { Component } from 'react'

import ShowVampireCards from './ShowVampireCards'
import NewVampire from './NewVampire'

class Vampires extends Component {
    state = {  
        addNewVampire: false
    }

    handleShowAddVampire = () => this.setState({ addNewVampire: true })

    
    render () {
        if(this.state.addNewVampire){ 
            return(
                <NewVampire 
                    handleAddNewVampire = {this.props.handleAddNewVampire}
                />
            )
        }
        return(
            <ShowVampireCards 
                vampires={this.props.vampires}
                handleAddVampire = {this.handleShowAddVampire}
            />
        )
    }
}

export default Vampires