
// pass in the onClick name values as props within curly brackets of the Button function 
// create two buttons and return them 
// create a form to search for a specific film and submit button
const Buttons = ({ onPreviousClick, onNextClick, submitButton, maxFilmIndex }) => {
    return (
        <>
            <button onClick={onPreviousClick}>Previous</button>
            <button onClick={onNextClick}>Next</button>

            <form onSubmit={submitButton}> 
                <label htmlFor="film-selector">Select a film:</label>
                <input type="number" name="film-selector" id="film-selector" min="1" max={maxFilmIndex}/>

                <input type="submit" value="submit"/>

            </form>

        </>

    )
}

export default Buttons;