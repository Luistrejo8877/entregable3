import { useEffect, useState } from 'react'
import './App.css'
import getRandomNumber from './utils/getRandomNumber'
import ResidentCard from './components/ResidentCard'
import LocationInfo from './components/LocationInfo'
import FormLocation from './components/FormLocation'
import useFetch from './hooks/useFetch'




function App() {
  
  const [idLocation, setIdLocation] = useState(getRandomNumber(126))

  const url=`https://rickandmortyapi.com/api/location/${idLocation}`
  const [ location, getSingleLocation, hasError, isLoading]= useFetch(url)

  useEffect(() => {
    getSingleLocation()
  }, [idLocation]) 
  

  return (
    <div className='body'>
      
      <h1 className='title-header'>Rick and Morty App</h1>
      <FormLocation
      setIdLocation={setIdLocation}
      />
      {
      isLoading
      ?(<h2>Loading..</h2>)
      : (
        hasError
        ? (<h1>❌Hey, you must provide an id from 1 to 126😢</h1>)
        : (
            <>
              <LocationInfo
                location={location} 
              />
              <div className='resident-container'>
                {
                  location?.residents.map(url => (
                    <ResidentCard
                      key={url}
                      url={url}
                    />
                  ))
                }
              </div>
            </>
          )
        )
      }
    </div>
  )
}

export default App
