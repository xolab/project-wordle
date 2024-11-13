import {useState} from "react";

const InputForm = ({setGuessResults, endGame}) => {
    const [value, setValue] = useState('');

    const handleOnSubmit = (evt) => {
        evt.preventDefault();

        if (value.length !== 5) {
            alert('Please enter exactly 5 characters.');
            return;
        }

        setGuessResults(value)
        setValue('');
    }

    return (
        <form className="guess-input-wrapper" onSubmit={handleOnSubmit}>
            <label htmlFor="guess-input">Enter guess:</label>
            <input
                required
                id="guess-input"
                type="text"
                minLength={5}
                maxLength={5}
                disabled={endGame}
                value={value}
                onChange={(evt) => setValue(evt.target.value.toUpperCase())}/>
        </form>
    )
}

export default InputForm;