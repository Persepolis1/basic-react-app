import React, { useState } from 'react'
import {Card, Button} from 'antd'
import axios from 'axios'

function App() {
  async function fetchData(path, setFunction){
    // simulate a "loading" by setting the state to null
    setFunction(null)
    const response = await axios.get(path)
    setFunction(response.data)
  }
  const [responseOne, setResponseOne] = useState("Hi");
  const [responseTwo, setResponseTwo] = useState("Fetch some data!");
  return (
    <div>
      <Button type="primary" onClick={() => fetchData("/data", setResponseOne)}>Button #1</Button>
      <Button type="error" onClick={() => fetchData("/data_two", setResponseTwo)}>Button #2</Button>
      <Card loading={!responseOne} title="response 1">{responseOne}</Card>
      <Card loading={!responseTwo} title="response 2">{responseTwo}</Card>
    </div>
  );
}

export default App;
