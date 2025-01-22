import React,{useState, useEffect} from 'react';

function App() {
  const [data, setData] = useState('')

  useEffect(()=>{
    (async function(){
      const response = await (await fetch(`api/disponible/read`)).json()
      setData(response)
    })
  })
  const value = 'World';
  return <div>Hello {response}</div>;
}

export default App;
