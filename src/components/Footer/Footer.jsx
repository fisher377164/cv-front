import { Container, Row, Col } from 'react-bootstrap'
import logo from '../../assets/img/logo.svg'
import linkedinMarkWhite from '../../assets/img/linkedin-mark-white.svg'
import githubMarkWhite from '../../assets/img/github-mark-white.svg'
import './Footer.css'

export const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row className="align-items-center">
                    <Col size={12} sm={6}>
                        <img src={logo} alt="Logo" />
                    </Col>
                    <Col size={12} sm={6} className="text-center text-sm-end">
                        <div className="social-icon">
                            <a href="https://www.linkedin.com/in/andrii-vdovychenko" target="_blank"
                               rel="noreferrer"><img src={linkedinMarkWhite} alt="" /></a>
                            <a href="https://github.com/fisher377164/cv-front" target="_blank" rel="noreferrer"><img
                                src={githubMarkWhite} alt="" /></a>
                        </div>
                        <p>Copyright 2023. All Rights Reserved</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}
