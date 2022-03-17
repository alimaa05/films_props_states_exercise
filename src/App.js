import './App.css';
import Title from './components/Title';
import FilmContainer from './containers/FilmContainer';


// call on the components at the highest level
// app.js is rendering our filmContainer and title componenet 
function App() {

  return(
  <>
  <Title/>
  <FilmContainer/>

  </>

  )
  
}

export default App;