import React from 'react';
import {range} from "../../utils";
import {NUM_OF_GUESSES_ALLOWED} from "../../constants";
import {checkGuess} from "../../game-helpers";

function Guess({guessResults, answer}) {
    return (
        <div className="guess-results">
            {range(0, NUM_OF_GUESSES_ALLOWED).map((item) => {
                const resultCheckGuess = guessResults[item] && checkGuess(guessResults[item], answer);

                return (
                    <p className="guess" key={item}>
                        {range(0, 5).map((item) => {
                            const className = resultCheckGuess
                                ? ` ${resultCheckGuess[item].status}`
                                : '';

                            return (
                                <span className={`cell${className}`}
                                      key={item}
                                >
                                {resultCheckGuess && resultCheckGuess[item].letter}
                            </span>
                            )
                        })}
                    </p>
                )
            })}
        </div>
    );
}

export default Guess;
