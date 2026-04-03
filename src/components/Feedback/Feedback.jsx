import css from "./Feedback.module.css"

const FeedbackItem = ({states}) => {
    return (<>
    {Object.entries(states).map(([key, value])=>(
        <li key={key}>{key} : {value}</li>
    ))}
    </>);
};
const Feedback = ({states, total, positive}) => {
    return (
        <ul className={css.feedback}>
            <FeedbackItem states= {states}/>
            <li>Total : {total}</li>
            <li>Positive : {positive}%</li>
        </ul>
    );
};

export default Feedback;