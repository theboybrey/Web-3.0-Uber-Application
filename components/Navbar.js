import Image from 'next/image'
import avatar from '../temp/avatar.png'

// Style
const style = {
    wrapper: `h-16 w-full bg-black text-white flex md: justify-around items-center px-60 fixed z-20 font-family:`
}
const Navbar = () => {
    return (
        <div className={style.wrapper}>
            <div className={style.leftMenu}>
                <div className={style.logo}>Uber</div>
                <div className={style.menuItem}>Ride</div>
                <div className={style.menuItem}>Drive</div>
                <div className={style.menuItem}>More</div>
            </div>
            <div className={style.rightMenu}>
                <div className={style.menuItem}>Help</div>
                <div className={style.menuItem} id = "userPerson">Lex</div>
                <div className={style.userImageContainer}>
                    <Image src={avatar} width ={40} height = {40}/>
                </div>
            </div>
        </div>
    )
}

export default Navbar