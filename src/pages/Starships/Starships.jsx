import { useState, useEffect } from "react"
import { getAllStarships } from "../../services/api-calls"
import { Link } from "react-router-dom"

const Starships = () => {
  const [starships, setStarships] = useState([])

  useEffect(()=> {
    const fetchStarshipsData = async () => {
      const starshipsData = await getAllStarships()
      setStarships(starshipsData.results)
      console.log(starshipsData)
    }
    fetchStarshipsData()
  }, [])


  return (
    <>
      <div>
        <h3>Starships</h3>
        <div className="icon-container">
          {starships.map((starshipName, index) =>
            <Link
              key={index}
              to='/starship'
              state={{ starshipName }}
            >
              <div className="class-div">
                {starshipName.name}
              </div>
            </Link>
          )}
        </div>
      </div>
    </>
  )
}

export default Starships
