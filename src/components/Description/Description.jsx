import css from "./Description.module.css"

const Description = ({title, explanation}) => {
    return (
        <div className={css.description}>
            <h1>{title}</h1>
            <p>{explanation}</p>
        </div>
    );
};
 
export default Description;