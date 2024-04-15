import './assets/styles/App.scss';
import axios from 'axios'

import Navbar from './components/Navbar'
import Landing from './views/Landing';
import Home from './views/Home';
import Characters from './views/Characters';
import Episodes from './views/Episodes';
import Locations from './views/Locations';
import About from './views/About';
import Loading from './components/Loading';

import { Routes, Route, useLocation } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect, useState } from 'react';
import { setAllCharacters, setAllEpisodes, setAllLocations } from './redux/actions';

function App() {

  const RYM_CHARS_URL = 'https://rickandmortyapi.com/api/character/';
  const RYM_EPS_URL = 'https://rickandmortyapi.com/api/episode/';
  const RYM_LOC_URL = 'https://rickandmortyapi.com/api/location/';

  const { 
    allCharacters, 
    allEpisodes, 
    allLocations,
    myCharacters } = useSelector(state => state);
    
  const dispatch = useDispatch()

  const location = useLocation()

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {

    const fetchAllCharacters = async () => {
      try {
        let allCharactersData = [];
        let page = 1;
        let totalPages = 1;
        while(page <= totalPages){
          const response = await axios.get(`${RYM_CHARS_URL}?page=${page}&limit=100`)
          const { results, info } = response.data;
          allCharactersData = allCharactersData.concat(results)
          totalPages = info.pages
          page++;
        } dispatch(setAllCharacters(allCharactersData))
      } catch (error) {console.error(error)}
    }

    const fetchAllEpisodes = async () => {
      try {
        let allEpisodesData = [];
        let page = 1;
        let totalPages = 1;
        while(page <= totalPages){
          const response = await axios.get(`${RYM_EPS_URL}?page=${page}&limit=100`)
          const { results, info } = response.data;
          allEpisodesData = allEpisodesData.concat(results)
          totalPages = info.pages
          page++;
          dispatch(setAllEpisodes(allEpisodesData))
        }
      } catch (error) {console.error(error)}
    }

    const fetchAllLocations = async () => {
      try {
        let allLocationsData = [];
        let page = 1;
        let totalPages = 1;
        while(page <= totalPages){
          const response = await axios.get(`${RYM_LOC_URL}?page=${page}&limit=100`);
          const {results, info} = response.data;
          allLocationsData = allLocationsData.concat(results);
          totalPages = info.pages;
          page++;
        } dispatch(setAllLocations(allLocationsData))
      } catch (error) {console.error(error)}
    }

    const fetchData = async () => {
      setIsLoading(true);
      await Promise.all([fetchAllCharacters(), fetchAllEpisodes(), fetchAllLocations()])
      setIsLoading(false);
    }
    fetchData();

  },[])

  if (isLoading) {
    return <Loading />;
  } else {
    console.log(allCharacters);console.log(allEpisodes);console.log(allLocations)
  }

  return (
    <div>
        
      {location.pathname !== '/' && <Navbar />}

      <div className='AppContainer'>

        <Routes>

          <Route
            path='/'
            element={<Landing />}
          />

          <Route
            path='/home'
            element={<Home />}
          />

          <Route
            path='/characters'
            element={<Characters />}
          />

          <Route
            path='/episodes'
            element={<Episodes allEpisodes={allEpisodes} />}
          />

          <Route
            path='/locations'
            element={<Locations allLocations={allLocations} />}
          />

          <Route
            path='/about'
            element={<About />}
          />

        </Routes>

      </div>

    </div>
  )
}

export default App;