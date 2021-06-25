import React from 'react'

const RuleDot = ({details}) => { 
    return (
        <span className={`mx-1 ${details.use === true ? 'dot-obtain' : ''}`} >
            {details.value}
        </span>
    )
}
export default RuleDot