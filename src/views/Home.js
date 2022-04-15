import { Card, CardHeader, CardBody, CardTitle, CardText, CardLink } from 'reactstrap'
import * as API from "../services/launches"
import { useEffect, useState } from "react"

const Home = () => {
  const [launches, setLaunches] = useState([])

  useEffect(() => {
    API.getAllLaunches()
        .then(res => {
          setLaunches(res)
        })
  }, [])

  return (
    <>
        { launches.map(launch => (
            <Card key={launch.flight_number}>
              <CardHeader>
                <CardTitle>{launch.mission_name}</CardTitle>
              </CardHeader>
              <CardBody>
                <CardText>{launch.launch_year}</CardText>
                <CardText>{launch.details}</CardText>
                <CardLink href={launch.links.article_link} target="_blank">Article</CardLink>
              </CardBody>
            </Card>
        )) }
    </>
  )
}

export default Home
