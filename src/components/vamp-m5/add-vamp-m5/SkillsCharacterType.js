import React from 'react'

import  { ButtonGroup, Button } from 'react-bootstrap';
const SkillsCharacterType = ( {handleSkillCharacterTypeChange} ) => {
    return (
        <ButtonGroup size="sm" className='mx-1'> 
            <Button onClick={handleSkillCharacterTypeChange} id='toucheATout' variant="outline-dark">Touche-à-tout</Button>
            <Button onClick={handleSkillCharacterTypeChange} id='equilibre' variant="outline-dark">Équilibré</Button>
            <Button onClick={handleSkillCharacterTypeChange} id='specialiste' variant="outline-dark">Spécialiste</Button>
        </ButtonGroup>
    )
}

export default SkillsCharacterType