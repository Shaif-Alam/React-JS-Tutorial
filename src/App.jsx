import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
//  Run on every render 


useEffect(() => {

   fetch('https://jsonplaceholder.typicode.com/posts')
   .then(response => response.json())
   .then(data => console.log(data))
})

  useEffect(() => {
    console.log("useEffect called")
  }, [count]) // runs once when component mounts

  return (
    <>
      <h1>Hello useEffect</h1>
       <h2>{count}</h2>
        <button onClick={()=>(setCount(count+1))}>increase</button>
    </>
  )
}

export default App
