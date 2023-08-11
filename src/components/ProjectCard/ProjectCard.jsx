import { Col } from 'react-bootstrap'
import PropTypes from 'prop-types'
import './ProjectCard.css'

const ProjectCard = ({ title, role, description,technologies, url, imgUrl }) => {
    return (
        <Col size={12} sm={6} md={4}>
            <a href={url} target="_blank" rel="noreferrer">
                <div className="project-card">
                    <img src={imgUrl} alt="Simple text" />
                    <div className="proj-txtx">
                        <h4>{title}</h4>
                        <span className="role">{role}</span><br/>
                        <span className="description">{description}</span><br/>
                        <span className="technologies">Tools & technologies: {technologies}</span>
                    </div>
                </div>
            </a>
        </Col>
    )
}

ProjectCard.propTypes = {
    title: PropTypes.string,
    role: PropTypes.string,
    description: PropTypes.string,
    technologies: PropTypes.string,
    url: PropTypes.string,
    imgUrl: PropTypes.string,
}

export default ProjectCard
