import { useState } from "react"
import Film from "../components/Film";
import Buttons from "../components/Buttons";

// COMPONENT WHERE THE DETAILS OF OUR CURRENTLY SELECTED FILMS ARE

//create a function that takes a state - STATE WITH AN ARRAY OF ALL THE FILMS 
const FilmContainer = () => {

    // create a state - holds all the films
    const [films, setFilms] = useState(
        [
            {
                "title": "Alien",
                "duration": 117,
                "rating": "18",
                "cast": [
                    {
                        "name": "Sigourney Weaver"
                    }
                ],
                "director": {
                    "name": "Ridley Scott"
                }
            },
            {
                "title": "The Imitation Game",
                "duration": 114,
                "rating": "12A",
                "cast": [
                    {
                        "name": "Benedict Cumberbatch"
                    }
                ],
                "director": {
                    "name": "Morten Tyldum"
                }
            },
            {
                "title": "Iron Man",
                "duration": 126,
                "rating": "12A",
                "cast": [
                    {
                        "name": "Robert Downey Jr"
                    },
                    {
                        "name": "Gwyneth Paltrow"
                    }
                ],
                "director": {
                    "name": "Jon Favreau"
                }
            },
            {
                "title": "The Martian",
                "duration": 144,
                "rating": "12A",
                "cast": [
                    {
                        "name": "Matt Damon"
                    },
                    {
                        "name": "Sean Bean"
                    }
                ],
                "director": {
                    "name": "Ridley Scott"
                }
            }
        ]
    )

    // create a state for the to keep track of current index for the films - i.e. the film currently being displayed 
    // value - currentFilmIndex
    // function - setCurrentFilmIndex
    // setting a specific value of 0 
    const [currentFilmIndex, setCurrentFilmIndex] = useState(0);


    // function for handling the next button click
    // when the 'handleNextButtonClick' is called it will do the 'setCurrentFilmIndex' take the 'currentFilmIndex' value and +1
    // create if condition so that only if the 'currentFilmIndex' is less than the length of the films array only then it will re-set the currentFilmIndex and +1

    const handleNextButtonClick = () => {
        if (currentFilmIndex < films.length - 1) {
            setCurrentFilmIndex(currentFilmIndex + 1);
        }
    }

    // function for handling the next button click
    // when the 'handlePreviousButtonClick' is called it will do the 'setCurrentFilmIndex' take the 'currentFilmIndex' value and -1
    // create if condition so that only if the 'currentFilmIndex' is more than 0 only then it will re-set the currentFilmIndex and -1
    const handlePreviousButtonClick = () => {
        if (currentFilmIndex > 0) {
            setCurrentFilmIndex(currentFilmIndex - 1);
        }
    }

    // create form submission handler 
    // 
    const handleFilmSubmission = (event) => {
        event.preventDefault();

        setCurrentFilmIndex(event.target["film-selector"].value -1);
    }



    // use empty<> by default - <div> if you want to manipulate anything within this section 
    // returing a heading
    // from 'Film' component returining a 'film' property that has the 'films' state value within 'filmContainer' and passing 'currentFilmIndex' so we return only one film at given time
    // from 'Buttons' component we want to return the 'onPrevious', 'onNext', 'submit' buttons and need to pass the 'maxFilmIndex' and pass as props in the Button component 

    return (
        <div>
            <h1>Database of Movies on the Internet</h1>
            <Film film={films[currentFilmIndex]} />
            <Buttons onPreviousClick={handlePreviousButtonClick}
                onNextClick={handleNextButtonClick} 
                submitButton={handleFilmSubmission}
                maxFilmIndex={films.length} />

        </div>

    )


}

export default FilmContainer;