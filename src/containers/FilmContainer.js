import {useState} from 'react';
import Film from '../components/Film';


const FilmContainer = ({films}) => {
    const filmList = films.map((film, index) => {

        return(
                <Film film={film} 
                    key={index}/>
    
        )
    })



    return(
        <>
        {filmList}
        </>
    )

}

export default FilmContainer; 