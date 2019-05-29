import React from 'react';
import './Main.css';

const Main = (props) => (
    <main>
        <h1>Welcome on the page!</h1>
        <p>This page is mainly made for myself to show my players games we can play, and my personal favorites. maybe in the future I will add more to this page. Check my other projects if you like!</p>
        <div className="links">
            <a className="link" href="https://www.bgapp.pl/main" rel="noopener noreferrer" target="_blank">Gaming night calendar</a>
            <a className="link" href="https://movie-compare-app.herokuapp.com/" rel="noopener noreferrer" target="_blank">Movie compare app</a>
        </div>
    </main>
);

export default Main;
