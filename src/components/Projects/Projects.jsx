import { Container, Row, Col, Tab, Nav } from 'react-bootstrap'
import { ProjectCard } from './ProjectCard/ProjectCard'
import projImg1 from '../../assets/img/project-img1.png'
import projImg2 from '../../assets/img/project-img2.png'
import projImg3 from '../../assets/img/project-img3.png'
import colorSharp2 from '../../assets/img/color-sharp2.png'
import TrackVisibility from 'react-on-screen'
import 'animate.css'
import './Projects.css'

export const Projects = () => {

    const projects = [
        {
            title: 'Business Startup',
            description: 'Design & Development',
            imgUrl: projImg1,
        },
        {
            title: 'Business Startup',
            description: 'Design & Development',
            imgUrl: projImg2,
        },
        {
            title: 'Business Startup',
            description: 'Design & Development',
            imgUrl: projImg3,
        },
        {
            title: 'Business Startup',
            description: 'Design & Development',
            imgUrl: projImg1,
        },
        {
            title: 'Business Startup',
            description: 'Design & Development',
            imgUrl: projImg2,
        },
        {
            title: 'Business Startup',
            description: 'Design & Development',
            imgUrl: projImg3,
        },
    ]

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
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                            Lorem
                                            Ipsum has been the industry's standard dummy text ever since the 1500s, when
                                            an
                                            unknown printer took a galley of type and scrambled it to make a type
                                            specimen
                                            book.</p>
                                        <Tab.Container id="projects-tabs" defaultActiveKey="first">
                                            <Nav variant="pills"
                                                 className="nav-pills mb-5 justify-content-center align-items-center"
                                                 id="pills-tab">
                                                <Nav.Item>
                                                    <Nav.Link eventKey="first">Tab 1</Nav.Link>
                                                </Nav.Item>
                                                <Nav.Item>
                                                    <Nav.Link eventKey="second">Tab 2</Nav.Link>
                                                </Nav.Item>
                                                <Nav.Item>
                                                    <Nav.Link eventKey="third">Tab 3</Nav.Link>
                                                </Nav.Item>
                                                <Nav.Item>
                                                    <Nav.Link eventKey="fourth">Tab 4</Nav.Link>
                                                </Nav.Item>
                                            </Nav>
                                            <Tab.Content id="slideInUp"
                                                         className={isVisible ? 'animate__animated animate__slideInUp' : 'animate__animated animate__fadeOut'}>
                                                <Tab.Pane eventKey="first">
                                                    <Row>
                                                        {
                                                            projects.map((project, index) => {
                                                                return (
                                                                    <ProjectCard
                                                                        key={index}
                                                                        {...project}
                                                                    />
                                                                )
                                                            })
                                                        }
                                                    </Row>
                                                </Tab.Pane>
                                                <Tab.Pane eventKey="second">
                                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
                                                        quam,
                                                        quod neque provident velit, rem explicabo excepturi id illo
                                                        molestiae blanditiis, eligendi dicta officiis asperiores
                                                        delectus
                                                        quasi inventore debitis quo.</p>
                                                </Tab.Pane>
                                                <Tab.Pane eventKey="third">
                                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
                                                        quam,
                                                        quod neque provident velit, rem explicabo excepturi id illo
                                                        molestiae blanditiis, eligendi dicta officiis asperiores
                                                        delectus
                                                        quasi inventore debitis quo.</p>
                                                </Tab.Pane>
                                                <Tab.Pane eventKey="fourth">
                                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
                                                        quam,
                                                        quod neque provident velit, rem explicabo excepturi id illo
                                                        molestiae blanditiis, eligendi dicta officiis asperiores
                                                        delectus
                                                        quasi inventore debitis quo.</p>
                                                </Tab.Pane>
                                            </Tab.Content>
                                        </Tab.Container>
                                    </div>}
                            </TrackVisibility>
                        </Col>
                    </Row>
                </Container>
            </div>
            <img className="background-image-right" src={colorSharp2} alt="Background"></img>
        </section>
    )
}
