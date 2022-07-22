import Image from 'next/image'
import avatar from '../temp/avatar.png'

// Style
const style = {
    wrapper: `h-16 w-full bg-black text-white flex md: justify-around items-center px-60 fixed z-20`,
    leftMenu: `flex gap-3`,
    logo: `text-3xl text-white flex cursor-pointer mr-16`,
    menuItem: `text-lg text-white font-medium flex items-center mx-4 cursor-pointer`,
    rightMenu: `flex gap-3 items-center`,
    userImageContainer: `mr-2`,
    userImage: `h-10 w-10 mr-4 rounded-full p-px object-cover cursor-pointer`

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
                    <Image 
                    className={style.userImage}
                    src={avatar} 
                    width ={40} 
                    height = {40}/>
                </div>
            </div>
            <div>0x0000...0000</div>
        </div>
    )
}

export default Navbar