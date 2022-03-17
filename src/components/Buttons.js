
const Buttons = ({onPreviousClick, onNextClick}) => {
    return(
        <>
        <button onClick={onPreviousClick}>Previous</button>
        <button onClick={onNextClick}>Next</button>
        </>
        
    )
}

export default Buttons;