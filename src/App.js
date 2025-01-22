import React, { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState('');

  useEffect(() => {
    (async function () {
      const fetchData = async () => {
        const response = await fetch(`api/disponible/read`);
        const data = await response.json();
        setData(data);
      };
      fetchData();
    })();
  }, []);
console.log("Data ", data)
  return <div>Hello {
    data.map((item, index) => {
      return (
        <div key={index}>
          <pre>{JSON.stringify(item, null, 2)}</pre>
        </div>
      );
    })
  }</div>;
}

export default App;