import React, { useEffect, useState } from 'react'

import { CartesianGrid, Scatter, ScatterChart, XAxis, YAxis } from 'recharts';



export const Sca = () => {


  const [X, setX] = useState([])
 
useEffect(() => {
  
  fetch('data.json',{
    headers:{
      'Content-Type':'application/json',
      'Accept':'application/json'
    }
  }
  ).then((response)=>{
    return response.json();
  }).then((data)=>{
    console.log(data)
    setX(data)
 
  
    
  })

}, [])

const AllData = [{}]


let arr = X.map((e)=>{
  return (
    AllData.push({X:e.Color_intensity,Y:e.Hue})
  )
})
console.log(AllData)





  return (
<>

  <ScatterChart width={1500} height={600}>
          <CartesianGrid />
           <XAxis type="number" dataKey="X" />
          <YAxis type="number" dataKey="Y" />
          <Scatter data={AllData} fill="green" />
         
          
      </ScatterChart> 

 


</>



  
  )
}
export default Sca;