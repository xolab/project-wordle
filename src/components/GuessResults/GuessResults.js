import React from 'react';

function GuessResults({guessResults}) {
    return (
        <div className="guess-results">
            {guessResults.map(({name, id}) => (
                <p className="guess" key={id}>{name}</p>
            ))}
        </div>
    );
}

export default GuessResults;
