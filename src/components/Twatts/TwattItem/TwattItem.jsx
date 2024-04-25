import classes from "./TwattItem.module.css"
import TwattItemForm from "./TwattItemForm"

const TwattItem = (props) => {
    return (
        <li className={classes.twatt}>
            <div>
                <h3>{props.title}</h3>
                <div className={classes.content}>{props.content}</div>
            </div>
            <div>
                <TwattItemForm />
            </div>
        </li>
    )
}

export default TwattItem;