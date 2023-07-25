import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Tile from "./Tile";

function shuffle(tiles) {
  for (let i = tiles.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * tiles.length);
    console.log("exchange " + i + " with " + j);
    [tiles[i], tiles[j]] = [tiles[j], tiles[i]];
  }
  console.log(tiles);
}

class App extends React.Component {
  //   let [noShown, setNoShown] = useState(0);
  state = {
    objects: [],
    noShown: 0,
  }

  constructor() {
    super();
    console.log("Constructor App Component");
    this.oldIndex = -1;
    this.shown = [];
  }

  componentDidMount() {
    console.log("Componenta App Montata");
    let objects = [
      "bear",
      "corgi",
      "crab",
      "fish",
      "panda",
      "parrot",
      "pig",
      "rabbit",
      "rhinoceros",
      "shark",
      "snail",
      "turtle",
    ];
    console.log(objects);
    console.log(...objects);
    objects = [...objects, ...objects];
    shuffle(objects);
    for (let i = 0; i < objects.length; i++) {
      this.shown[i] = 0;
    }
    this.setState(
        {
            objects: objects,
        }
    );

    let a = 5;
    let b = 6;
    [a, b] = [b, a];
    console.log(a, b);

    const array1 = [1, 4, 9, 16];
  }

  incShown(index) {
    console.log('Parinte a primit index: ' + index);
    this.setState(
      {
        noShown: this.state.noShown + 1
      }
    );
    // daca avem 2 tiles deschise
    if (this.state.noShown === 2) {
      // si sunt egale, le pastram
      if (this.oldIndex === -1) { // una singura deschisa

      } else { // doua deschise
        if (this.objects[this.oldIndex] === this.objects[index]) {
          // am deschis doua si sunt egale
          console.log('Tiles-uri egale: ' + 
            this.objects[this.oldIndex] + ', ' + this.objects[index]);
          this.oldIndex = -1;
        } else {
          // am deschis doua, dar nu sunt egale
          // le inchid dupa doua secunde
          setTimeout(() => {
            this.render();
          }, 2 * 1000);
        }
      }

    }
      // altfel, declansam un timer sa se inchida dupa 2 secunde
  }

  render() {
    return (
      <div className="App">
        <div className="grid grid-cols-6 gap-4 justify-items-center">
          {this.state.objects.map((object, index) => {
            return (
              <Tile
                tile={object}
                altText={"icon of " + object}
                culoare={"red"}
                index={index}
                functieClick={() => this.incShown(index)}
                shown={this.shown[index]}
              />
            );
          })}
          {/* {array1.map(x => x * 2 + ' ')}
        {array1.map(function(x) {
            return x * 2 + ' ';
        })} */}
          Shown: {this.state.noShown}
        </div>
      </div>
    );
  }
}

export default App;
