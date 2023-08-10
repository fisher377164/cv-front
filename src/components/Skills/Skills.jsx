import meter1 from '../../assets/img/meter1.svg'
import meter2 from '../../assets/img/meter2.svg'
import meter3 from '../../assets/img/meter3.svg'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import colorSharp from '../../assets/img/color-sharp.png'
import TrackVisibility from 'react-on-screen'
import './Skills.css'
import { RESPONSIVE } from './CarouselConfig'
import CaruselItem from '../CaruselItem/CaruselItem'

export const Skills = () => {
    return (
        <section className="skill" id="skills">
            <TrackVisibility partialVisibility once>
                {({ isVisible }) =>
                    <div
                        className={isVisible ? 'animate__animated animate__fadeIn' : 'animate__animated animate__fadeOut'}>
                        <div className="container">
                            <div className="row">
                                <div className="col-12">
                                    <div className="skill-bx wow zoomIn">
                                        <h2>Skills</h2>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting
                                            industry.<br /> Lorem
                                            Ipsum has been the industry's standard dummy text.</p>
                                        <Carousel responsive={RESPONSIVE} infinite={true}
                                                  className="owl-carousel owl-theme skill-slider">
                                            <CaruselItem text="Java" image={meter1} />
                                            <CaruselItem text="Spring Framework" image={meter3} />
                                            <CaruselItem text="SQL" image={meter2} />
                                            <CaruselItem text="React" image={meter2} />
                                            <CaruselItem text="Redux" image={meter2} />
                                        </Carousel>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                }
            </TrackVisibility>
            <img className="background-image-left" src={colorSharp} alt="Grafic" />
        </section>
    )
}
