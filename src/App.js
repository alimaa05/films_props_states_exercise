import {useState} from 'react';
import './App.css';
import Title from './components/Title';
import FilmContainer from './containers/FilmContainer';


function App() {


    const [films, setFilms] = useState([
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
    ])
  





  return (
    <>
    <Title />
    <FilmContainer films={films}/>
    </>
  );
}

export default App;
