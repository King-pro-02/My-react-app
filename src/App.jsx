
import {useState} from 'react'
export default ()=> {

  const [randNumber, setRandNum] = useState(0)

setInterval(()=> console.log('hell0'), 5000)
  return(
    <>
      <h1>the counter</h1>
      <p>check to see your random number: {randNumber}</p>
    
    </>

  )
}