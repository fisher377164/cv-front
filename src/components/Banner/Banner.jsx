import { useState, useEffect } from 'react'
import './Banner.css'
import { Container, Row, Col } from 'react-bootstrap'
import headerImg from '../../assets/img/header-img.svg'
import { ArrowRightCircle } from 'react-bootstrap-icons'
import 'animate.css'
import TrackVisibility from 'react-on-screen'

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0)
    const [isDeleting, setIsDeleting] = useState(false)
    const [text, setText] = useState('')
    const [delta, setDelta] = useState(200 - Math.random() * 100)
    const toRotate = ['Software Engineer', 'Software Developer', 'Senior Software Engineer']
    const period = 1000

    useEffect(() => {
        let ticker = setInterval(() => {
            tick()
        }, delta)

        return () => {
            clearInterval(ticker)
        }
// eslint-disable-next-line
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length
        let fullText = toRotate[i]
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1)

        setText(updatedText)

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2)
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true)
            setDelta(period)
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false)
            setLoopNum(loopNum + 1)
            setDelta(300)
        }
    }

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="aligh-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <TrackVisibility partialVisibility once>
                            {({ isVisible }) =>
                                <div
                                    className={isVisible ? 'animate__animated animate__fadeIn' : 'animate__animated animate__fadeOut'}>
                                    <span className="tagline">Welcome to my Portfolio</span>
                                    <div className="banner-title">
                                        <h1>Hi! I'm Andrii, <span className="txt-rotate" dataPeriod="1000"
                                                                  data-rotate='[ "Software Engineer", "Software Developer", "Senior Software Engineer" ]'>
                                            <span className="wrap">{text}</span></span></h1>
                                    </div>
                                    <div className="site-warning">
                                        <span>Warning!</span><br />
                                        <p>Site Under Development</p>
                                        <p>Please note that this website is currently under development. We are working
                                            hard to bring you an enhanced browsing experience. During this time, you may
                                            encounter incomplete sections, temporary content, or occasional glitches. We
                                            appreciate your patience and understanding as we finalize the development of
                                            the site. Stay tuned for exciting updates and a fully functional website
                                            coming soon.</p>
                                        <p>Thank you for your understanding.</p>
                                        <p>Andrii Vdovychenko</p>
                                    </div>
                                    <div className="summary">
                                        <p> I am dedicated Java Full-Stack Engineer with over 7 years of commercial
                                            experience developing robust and scalable applications using Java and
                                            related technologies. His expertise lies in designing and implementing
                                            efficient architectures, leveraging Spring Framework and other
                                            industry-standard tools. He has consistently delivered outstanding results
                                            throughout his career by leveraging strong analytical skills and attention
                                            to detail. Experienced in implementing microservices architectures,
                                            integrating with various APIs, and ensuring optimal performance and
                                            scalability. Responsible and result-oriented team player who is willing to
                                            learn new things and improve professional skills. </p>
                                    </div>
                                    <a href="#contact" className="lets-contact">Let’s Connect <ArrowRightCircle
                                        size={25} /></a>
                                </div>}
                        </TrackVisibility>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <TrackVisibility once>
                            {({ isVisible }) =>
                                <div
                                    className={isVisible ? 'animate__animated animate__zoomIn' : 'animate__animated animate__zoomOut'}>
                                    <img src={headerImg} alt="Header Img" />
                                </div>}
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
