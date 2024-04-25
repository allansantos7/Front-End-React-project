import { useRef, useState } from "react";
import classes from "./AddTwattForm.module.css"


const isEmpty = value => value.trim() === "";

const AddTwattForm = (props) => {
    const [formInputValidity, setFormInputValidity] = useState({
        title: true,
        content: true,
    });

    const titleInputRef = useRef()
    const contentInputRef = useRef()


    const confirmHandler = (event) => {
        //event.preventDefault();

        const enteredTitle = titleInputRef.current.value;
        const enteredContent = contentInputRef.current.value;

        const enteredTitleIsValid = !isEmpty(enteredTitle)
        const enteredContentIsValid = !isEmpty(enteredContent)
        
        setFormInputValidity({
            title: enteredTitleIsValid,
            content: enteredContentIsValid,
        });

        const formIsValid = enteredTitleIsValid && enteredContentIsValid;

        if(!formIsValid) {
            return;
        }
        // finished
        props.onConfirm({
            title: enteredTitle,
            content: enteredContent,
        });
    };

    return (
        <form className={classes.form} onSubmit={confirmHandler}>
            <h2>Post a Twatt</h2>
            <div className={`${classes.control} ${
                formInputValidity.title ? "" : classes.invalid
            }`}>
                <label htmlForm="title">Twatt Title</label>
                <input type="type" id="title" ref={titleInputRef} />
                {!formInputValidity.title && <p>Please enter a valid title!</p>}
            </div>
            <div className={`${classes.control} ${
                formInputValidity.content ? "" : classes.invalid
            }`}>
                <label htmlForm="content">Twatt Content</label>
                <input type="type" id="content" ref={contentInputRef} />
                {!formInputValidity.content && <p>Please enter valid content!</p>}
            </div>
            <div className={classes.actions}>
            <button className={classes.submit}>Confirm</button>
            </div>
        </form>
    )
}

export default AddTwattForm;