import React, { useEffect, useState } from 'react'
import { BarChart, Bar, CartesianGrid, XAxis, YAxis } from 'recharts';





const Barchart = () => {



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
        AllData.push({X:e.Alcohol,Y:e.Malic_Acid})
      )
    })
    console.log(AllData)
    





  return (
    <>
<BarChart width={2000} height={700} data={AllData}>
    <Bar dataKey="X" fill="green" />
    <CartesianGrid stroke="#ccc" />
    <XAxis dataKey="Y" />
    <YAxis />
  </BarChart>

    </>
  )
}

export default Barchart