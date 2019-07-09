import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Card from'./Card';
import * as serviceWorker from './serviceWorker';
ReactDOM.render(
    <div className="container">
        <Card />
        <Card />
        <Card />
        <Card />
    </div>,

document.getElementById('root'));

serviceWorker.register();
