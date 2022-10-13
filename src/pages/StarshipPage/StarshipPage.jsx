import { useState, useEffect } from 'react'
import { useLocation } from "react-router-dom"
import { getDetails } from "../../services/api-calls"
import { Link } from "react-router-dom"

const StarshipPage = () => {
  const [starshipPage, setStarshipPage] = useState({})
  const location = useLocation()
  console.log(location.state)

  useEffect(() => {
    const fetchDetails = async () => {
      const starshipPage = await getDetails(location.state.starshipName.url)
      console.log(starshipPage)
      setStarshipPage(starshipPage)
    }
    fetchDetails()
  }, [location.state.starshipName.url])

  return (
    <>
      <div className='outside-indiv'>
        {starshipPage.name ?
        <>
        <div className="indiv-starship">
          <h2>NAME: {starshipPage.name}</h2>
          <h2>MODEL: {starshipPage.model}</h2>
          <Link className='App-link' to='/'>RETURN</Link>
        </div>
        </>
        :
        <>
          <p>Loading class details...</p>
        </>}
      </div>
    </>
  )
}

export default StarshipPage
