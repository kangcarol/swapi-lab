import { useState, useEffect } from 'react'
import { useLocation } from "react-router-dom"
import { getDetails } from "../../services/api-calls"

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
      <div>
        {starshipPage.name ?
        <>
          <h2>NAME: {starshipPage.name}</h2>
          <div>MODEL: {starshipPage.name}</div>
          <div>MODEL: {starshipPage.model}</div>
        </>
        :
        <>
          <p>Loading class details...</p>
        </>}
      </div>
    </>
  )
}

export default StarshipPage;
