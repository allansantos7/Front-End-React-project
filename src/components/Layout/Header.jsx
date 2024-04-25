import twattsImage from "../../assets/twatts.png";
import classes from "./Header.module.css";

const Header = (props) => {
    return (
        <>
            <header className={classes.header}>
                <h1>Twatter</h1>
                
            </header>
            <div className={classes['main-image']}>
                <img src={twattsImage} alt="A book of twatts." />
            </div>
        </>
    )
}

export default Header