import PropTypes from 'prop-types'

const CaruselItem = ({ text, image }) => {
    return (
        <div className="item">
            <img src={image} alt={text} />
            <h5>{text}</h5>
        </div>
    )
}

CaruselItem.propTypes = {
    text: PropTypes.string,
    image: PropTypes.string,
}

export default CaruselItem
