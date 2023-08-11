import { Container, Row, Col } from 'react-bootstrap'
import contactImg from '../../assets/img/contact-img.svg'
import 'animate.css'
import TrackVisibility from 'react-on-screen'
import './Contact.css'

export const Contact = () => {

    return (
        <section className="contact" id="contact">
            <div className="z-index-overlay">
                <Container>
                    <Row className="align-items-center">
                        <Col size={12} md={6}>
                            <TrackVisibility once>
                                {({ isVisible }) =>
                                    <img
                                        className={isVisible ? 'animate__animated animate__zoomIn' : 'animate__animated animate__zoomOut'}
                                        src={contactImg} alt="Contact Us" />
                                }
                            </TrackVisibility>
                        </Col>
                        <Col size={12} md={6}>
                            <TrackVisibility partialVisibility once>
                                {({ isVisible }) =>
                                    <div
                                        className={isVisible ? 'animate__animated animate__fadeIn' : 'animate__animated animate__fadeOut'}>
                                        <h2>Get In Touch</h2>
                                        <p className="stay-in-touch-text">Feel free to connect with me on <a
                                            href="https://www.linkedin.com/in/andrii-vdovychenko" target="_blank"
                                            rel="noreferrer">LinkedIn</a> to explore opportunities, share insights, and
                                            network within the tech community.
                                            Let's connect and stay in touch!</p>
                                    </div>
                                }
                            </TrackVisibility>
                        </Col>
                    </Row>
                </Container>
            </div>
        </section>
    )
}
