
// pass in the onClick name values as props within curly brackets of the Button function 
// create two buttons and return them 
// create a form to search for a specific film and submit button
const Buttons = ({ onPreviousClick, onNextClick }) => {
    return (
        <>
            <button onClick={onPreviousClick}>Previous</button>
            <button onClick={onNextClick}>Next</button>

            <form>
                <label htmlFor="index">Select a film:</label>
                <input type="number" name="index" id="index" min={0} max/>

                <input type="submit" value="submit"/>

            </form>

        </>

    )
}

export default Buttons;