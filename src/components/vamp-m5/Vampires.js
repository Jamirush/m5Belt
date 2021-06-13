import React, { Component } from 'react'

import ShowVampireCards from './ShowVampireCards'
import NewVampire from './NewVampire'

class Vampires extends Component {
    state = {  
        addNewVampire: false
    }
    

    
    render () {
        if(this.state.addNewVampire){
            <NewVampire />
        }
        return(
                
            <ShowVampireCards 
                vampires={this.props.vampires}
                handleAddVampire = {this.handleAddVampire}
            />
        )
    }
}

export default Vampires