import AnimatedLetters from "../AnimatedLetters"
import "./index.scss"

const About = () => {
    return(
        <div className="container about-page">
            <div className="text-zone">
                <h1>
                    <AnimatedLetters
                        strArray = {"About me".split("")}
                        idx={15}
                    />
                </h1>
                <p></p>
                <p></p>
                <p></p>
            </div>
        </div>
    )

}

export default About