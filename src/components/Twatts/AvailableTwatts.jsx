import classes from "./AvailableTwatts.module.css"
import Card from "../UI/Card"
import TwattItem from "./TwattItem/TwattItem";
import AddTwattForm from "./AddTwattForm/AddTwattForm";
import { useEffect } from "react";
import { useState } from "react";
    
const AvailableTwatts = () => {
    const [twatts, setTwatts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [didSubmit, setDidSubmit] = useState(false);

    useEffect(() => {
        const fetchTwatts = async () => {
            const response = await fetch("https://twatter-207d7-default-rtdb.firebaseio.com/twatts.json"
            );
            const responseData = await response.json();

            const loadedTwatts = []

            for (const key in responseData) {
                loadedTwatts.push({
                    id: key,
                    title: responseData[key].title,
                    content: responseData[key].content,
                })
            }

            setTwatts(loadedTwatts);
            setIsLoading(false);
        }
        
        fetchTwatts();
    }, []);

    if (isLoading) {
        return (
            <section className={classes.TwattsLoading}>
                <p>Loading...</p>
            </section>
        )
    }

    const twattsList = twatts.map((twatt) => 
    <li>
        <TwattItem key={twatt.id} title={twatt.title} content={twatt.content} />
    </li>)

    const submitTwattHandler = async (twattData) => {
        setIsSubmitting(true);
        await fetch('https://twatter-207d7-default-rtdb.firebaseio.com/twatts.json', {
            method: 'POST',
            body: JSON.stringify({
                title: twattData.title,
                content: twattData.content,
            })
        })
        setIsSubmitting(false);
        setDidSubmit(true);
    }

    const isSubmittingContent = <p>Sending twatt data...</p>;
    const didSubmitContent = <p>Successfully sent twatt data!</p>;

    return (
        <section className={classes.twatts}>
            <Card>
                <ul>{twattsList}</ul>
            </Card>
            <Card>
                <AddTwattForm onConfirm={submitTwattHandler} />
            </Card>
        </section>

    )
}

export default AvailableTwatts;