
// pass in the onClick name values within curly brackets of the Button function 
// create two buttons and return them 
const Buttons = ({ onPreviousClick, onNextClick }) => {
    return (
        <>
            <button onClick={onPreviousClick}>Previous</button>
            <button onClick={onNextClick}>Next</button>
        </>

    )
}

export default Buttons;