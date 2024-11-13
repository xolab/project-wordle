import React from 'react';

import {sample} from '../../utils';
import {WORDS} from '../../data';
import InputForm from "../InputForm";
import Guess from "../Guess";
import {NUM_OF_GUESSES_ALLOWED} from "../../constants";

function Game() {
    const newGameProp = {
        answer: sample(WORDS),
        guessResults: [],
        result: false,
        attempts: 0,
        endGame: false
    }
    const [game, setGame] = React.useState(newGameProp);
    const {answer, guessResults} = game;
    console.info({answer});

    const handleSetGameProp = (newGuess) => {
        setGame({
            ...game,
            guessResults: [...guessResults, newGuess],
            result: newGuess === answer,
            attempts: guessResults.length + 1,
            endGame: guessResults.length + 1 >= NUM_OF_GUESSES_ALLOWED
        })
    }

    const handleStartNewGame = () => {
        setGame({
            ...game,
            ...newGameProp
        })
    }

    return (
        <>
            <Guess guessResults={guessResults} answer={answer}/>
            {(game.result) && (
                <div className="happy banner">
                    <p>
                        <strong>Congratulations!</strong> Got it in
                        {' '}
                        <strong>{`${game.attempts} guess(es)`}</strong>.
                        {' '}
                        <button
                            className="btn-primary"
                            onClick={handleStartNewGame}
                        >
                            Start new game!
                        </button>
                    </p>
                </div>
            )}
            {(game.endGame && !game.result) && (
                <div className="sad banner">
                    <p>Sorry, the correct answer is <strong>LEARN</strong>.
                        {' '}
                        <button
                            className="btn-primary"
                            onClick={handleStartNewGame}
                        >
                            Start new game!
                        </button>
                    </p>
                </div>
            )}
            <InputForm setGuessResults={handleSetGameProp} endGame={game.endGame}/>
        </>
    );
}

export default Game;
