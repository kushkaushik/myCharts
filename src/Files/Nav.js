import React from 'react'
import { useNavigate } from 'react-router-dom'

const Nav = () => {
const history = useNavigate();
const Sca =  ()=>{
    history('./sca')
}


const Bar =  ()=>{
    history('./bar')
}



  return (
    <div>

<button style={{margin:"20px 79px",padding:"25px"}} onClick={() => Sca()}>Scadal</button>
<button style={{margin:"20px 79px",padding:"25px"}} onClick={() => Bar()}>Bar</button>



    </div>
  )
}

export default Nav