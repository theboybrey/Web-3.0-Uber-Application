import Navbar from "../components/Navbar"

const style = {
  wrapper: `h-screen w-screen flex flex-cl`,
}

export default function Home() {
  return (
    <div className= {style.wrapper}>
      <Navbar/>
      <div className= {style.main}>

      </div>
      {/* Map */}
      <div className = {style.rightRequestContainer}>
        <div className={style.rideRequest} >
      {/* Locaation Selector */}
      {/* Ride Confirmation */}
        </div>

      </div>

    </div>
  )
}
