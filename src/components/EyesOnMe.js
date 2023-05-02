// Code EyesOnMe Component Here
import React from 'react'

function handleFocus(){
    return console.log('Good!')
}

function handleBlur(){
    return console.log('Hey! Eyes on me!')
}
function EyesOnMe() {
  return (
    
        <button onFocus={handleFocus} onBlur={handleBlur}>Eyes on me</button> 
  )
}

export default EyesOnMe
