export async function getAllLaunches() {
    try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/launches`)
        const data = await response.json()
        return data
    } catch (error) {
        console.error(error)
    }
}

export async function getLaunchByFlightNumber(flightNumber) {
    try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/launches/${flightNumber}`)
        const data = await response.json()
        return data
    } catch (error) {
        console.error(error)
    }
}

export async function getRocketById(rocketId) {
    try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/rocket/${rocketId}`)
        const data = await response.json()
        return data
    } catch (error) {
        console.error(error)
    }
}
