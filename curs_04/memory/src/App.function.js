import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Tile from './Tile';

function shuffle(tiles) {
  for (let i = tiles.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * tiles.length);
    console.log('exchange ' + i + ' with ' + j);
    [tiles[i], tiles[j]] = [tiles[j], tiles[i]];
  }
  console.log(tiles);
}


function App() {
  let [noShown, setNoShown] = useState(0);
  let [objects, setObjects] = useState([]);
  useEffect(() => {
    console.log('component did mount');
    objects = [
      'bear', 'corgi', 'crab', 'fish',
      'panda', 'parrot', 'pig', 'rabbit',
      'rhinoceros', 'shark', 'snail', 'turtle',
    ];
    // console.log(objects);
    // console.log(...objects);  
    objects = [...objects, ...objects];
    shuffle(objects);
    console.log(objects);
    setObjects(objects);
  }, []);
  
  function incShown() {
    setNoShown(noShown + 1); 
    console.log('No shown: ' + noShown);
  }

  let a = 5;
  let b = 6;
  [a, b] = [b, a];
  console.log(a, b);
  
  // const array1 = [1, 4, 9, 16];
  return (
    <div className="App">
      <div className='grid grid-cols-6 gap-4 justify-items-center'>
        {objects.map(function(object, index){
          return <Tile 
            tile={object}
            altText={'icon of ' + object}
            culoare={'red'}
            index={index}
            functieClick={incShown}
            />
        })}
        {/* {array1.map(x => x * 2 + ' ')}
        {array1.map(function(x) {
          return x * 2 + ' ';
        })} */}
        Shown: {noShown}
      </div>
    </div>
  );
}

export default App;
