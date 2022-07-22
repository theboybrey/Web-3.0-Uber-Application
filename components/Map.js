import mapboxgl from "mapbox-gl"
import { useEffect } from "react"
 
const style = {
    wrapper: `flex-1 h-full w-full`
}

mapboxgl.accessToken = 'pk.eyJ1IjoidGhlYm95YnJleSIsImEiOiJjbDV3Z2NnMDgwNHN0M2ZvYWhsbGhmcTA4In0.FufMsKI22xLkhcr3o5lGNA'


const Map = () => {
    useEffect(() => {
        const map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/drakosi/ckvcwg3rwdw4314o3i2ho8tph',
            center: [-99.29011, 39.39172],
            zoom: 3,
            projection: 'globe',
        })
    })

  return (
    <div id="map">Map</div>
  )
}

export default Map