import mapboxgl from "mapbox-gl"
import { useEffect } from "react"
 
const style = {
    wrapper: `flex-1 h-full w-full`
}

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN


const Map = () => {
    useEffect(() => {
        const map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/drakosi/ckvcwg3rwdw4314o3i2ho8tph',
            center: [-99.29011, 39.39172],
            zoom: 2.5,
        })
    })

  return (
    <div id="map">Map</div>
  )
}

export default Map