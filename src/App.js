import React, { useEffect, useState } from 'react';

const App = () => {

  const [state, setState] = useState();

  useEffect(() => {
    async function fetchData() {
      let response = await 
      fetch('https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits')
      .then(response => response.json())
      .then (result => {
        setState(result);
        console.log(result)
      });
    }
    fetchData();
  }, [])

  return (
    <div className="App">
      <h1>Hello world</h1>
      {state && (
        <p>{state[0].sha}</p>
      )}
    </div>
  );
}

export default App;
