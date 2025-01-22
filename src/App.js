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

  return <div>Hello {data}</div>;
}

export default App;