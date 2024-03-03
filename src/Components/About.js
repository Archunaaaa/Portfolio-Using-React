import IMG from '../Assets/Detective.png';

const About = () => {
    return (
        <div id="about" className="about">
            <h1 className="about-heading">About Me</h1>
            <div className="about-info">
            <p className="about-desc">I am a passionate developer with a keen interest in frontend technologies. My journey in web development began with a curiosity to understand how websites work, and it has since evolved into a rewarding career. I enjoy creating user-friendly interfaces that seamlessly blend form and function. When I'm not coding, you can find me exploring new coffee shops or experimenting with new recipes in the kitchen.</p>
                <div className="about-img">
                    <div className="about-img-wrapper">
                        <img src={IMG} alt="Detective" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;