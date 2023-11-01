import React from 'react';
import Card from './components/card/card';
import { CARDS } from './constants/cards';
import './index.css';

function App() {
    return (
        <div className="cardsWrapper">
            {CARDS.map((card, i) => (
                <React.Fragment key={i}>
                    <Card {...card} />
                </React.Fragment>
            ))}
        </div>
    );
}

export default App;
