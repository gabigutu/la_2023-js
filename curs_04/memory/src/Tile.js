import React, { useState } from 'react';



function clickedTile(index, schimbaVizibilitate, functieClick) {
    console.log('Clicked tile with index ' + index);
    schimbaVizibilitate('visible');
    functieClick();
}

function Tile(props) {
    let [visible, setVisible] = useState(
        props.shown === 1 ? 'visible' : 'invisible'
    ); // use state

    // console.log(props)
    return <div className="tile rounded-md" 
        onClick={(event) => clickedTile(props.index, setVisible, props.functieClick)}>
        <img src={'https://raw.githubusercontent.com/miezuit/html-css-python/main/js/memory/img/icons8-' + props.tile + '.png'}
            alt={props.altText}
            data-culoare={props.culoare}
            className={visible}
         />
    </div>;
}

export default Tile;



