import { useState } from "react";

import List from "./List.jsx";
import Item from "./Item";

export default function App(){
  const [data, setData] = useState([
    { id:1, content: "Hello, World!", name: "Alice"},
    { id:1, content: "React is fun.", name: "Bob"},
    { id:1, content: "Yay, interesting.", name: "Chris"},
    
  ]);

  return (
    <div style={{ maxWidth: 600, margin: "20px auto" }}>
      <h1>Yaycha</h1>
      <List>
        {data.map(item => {
          return <Item content={item.content} name={item.name} />
        })}
      </List>
    </div>
  );
}