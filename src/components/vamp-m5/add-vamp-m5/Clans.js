import React from 'react'

import  { Button } from 'react-bootstrap';
const Clans = ({clans, handleClanChange}) => {
    const ClanButton = Object.keys(clans).map(key => 
            <Button 
            key={key}
            id={clans[key].id} 
            size="sm" 
            variant="outline-dark" 
            className='mx-1'
            onClick={handleClanChange}
            >
                {clans[key].name}
            </Button>
    )
    return (
        <div>
            {ClanButton}
        </div>
    )
}

export default Clans