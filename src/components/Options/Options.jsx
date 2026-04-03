import css from "./Options.module.css"

const Options = ({handleClick, reset}) => {
    return (
        <div className={css.options}>
            <button onClick={() => handleClick("good")}>Good</button>
            <button onClick={() => handleClick("neutral")}>Neutral</button>
            <button onClick={() => handleClick("bad")}>Bad</button>
            <button onClick={reset}>Reset</button>
        </div>

    );
}

export default Options;