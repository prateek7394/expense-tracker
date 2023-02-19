import './Card.css'

function Card(props){
    // To include external css we append the "card" className along with other classNames as follows:
    const classes = 'card ' + props.className;
    return(
        // <div className='card'>{props.children}</div>
        <div className={classes}>{props.children}</div>
    )
}
export default Card;
