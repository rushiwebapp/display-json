import React, { useState } from 'react';
import './App.css';
import Data from "./data.json";


function App() {

  // Reference

  // State 
  const [data] = useState(Data);

  // Temp State
  const [] = useState();
  const [] = useState();


  return (
    <div className="App">

      <div className="posts">
        { data ? data.map(post => {
          return(
            <div key={ post.id } className="post">
              <h3>{ post.title }</h3>
              <p>{ post.content }</p>
            </div>
          )
        }) : null }
      </div>
    </div>
  );
}

export default App;
