import React from 'react';
import ReactDOM from 'react-dom';

var myint = 1;

function tick() {
    const element = <h1>I'm a clock: {new Date().toLocaleTimeString()}</h1>;

    ReactDOM.render(element,
        document.getElementById('ticktock')
    );
}

setInterval(tick, 1000);

ReactDOM.render(<h1>I'm replacement text that used to be a div!</h1>,
    document.getElementById('replacetext')
);
