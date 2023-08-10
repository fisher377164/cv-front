import { Col } from 'react-bootstrap'
import PropTypes from 'prop-types'

const ProjectCard = ({ title, description, imgUrl }) => {
    return (
        <Col size={12} sm={6} md={4}>
            <div className="proj-imgbx">
                <img src={imgUrl} alt="Simple text" />
                <div className="proj-txtx">
                    <h4>{title}</h4>
                    <span>{description}</span>
                </div>
            </div>
        </Col>
    )
}

ProjectCard.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    imgUrl: PropTypes.string,
}

export default ProjectCard
