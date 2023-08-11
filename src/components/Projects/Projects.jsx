import { Container, Row, Col } from 'react-bootstrap'
import ProjectCard from '../ProjectCard/ProjectCard'
import colorSharp2 from '../../assets/img/color-sharp2.png'
import TrackVisibility from 'react-on-screen'
import 'animate.css'
import './Projects.css'
import { PROJECTS } from './ProjectsConfig'

export const Projects = () => {

    const renderProjects = () => {
        return PROJECTS.map((project) => {
            return (
                <ProjectCard
                    {...project}
                />
            )
        })
    }

    return (
        <section className="project" id="projects">
            <div>
                <Container>
                    <Row>
                        <Col size={12}>
                            <TrackVisibility partialVisibility once>
                                {({ isVisible }) =>
                                    <div
                                        className={isVisible ? 'animate__animated animate__fadeIn' : 'animate__animated animate__fadeOut'}>
                                        <h2>Projects</h2>
                                        <p>Explore a selection of projects that showcase my passion for software
                                            engineering and innovation. From full-stack applications to backend
                                            development, each project reflects my dedication to creating impactful
                                            solutions. Dive in to see how I leverage cutting-edge technologies to bring
                                            ideas to life.</p>
                                        <Row>{renderProjects()}</Row>
                                    </div>
                                }
                            </TrackVisibility>
                        </Col>
                    </Row>
                </Container>
            </div>
            <img className="background-image-right" src={colorSharp2} alt="Background"></img>
        </section>
    )
}
