import Navbar from "../components/Navbar"
import Map from "../components/Map"
const style = {
  wrapper: `h-screen w-screen flex flex-cl`,
}

export default function Home() {
  return (
    <div className= {style.wrapper}>
      <Navbar/>
      <div className= {style.main}>
        <Map/>
        </div>
      <div className = {style.rightRequestContainer}>
        <div className={style.rideRequest} >
      {/* Locaation Selector */}
      {/* Ride Confirmation */}
        </div>

      </div>

    </div>
  )
}
