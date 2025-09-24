
const Card = ({image, title, description, link}) => {
    return (
        <div className="card">
            <img src={image} alt={title} className="cardImg"/>
            <h3>{title}</h3>
            <p>{description}</p>
            <btn><a href={link}>Linked Here!</a></btn>
        </div>
    )
}

export default Card;