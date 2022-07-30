import myPhoto from '../images/my-photo.jpg';
import faviconMail from '../favicons/Mail.svg';
import faviconLinkedin from '../favicons/linkedin.svg'


const Info = () => {
    const info = (
        <div className="infoContainer">
            <div className="myPhoto">
                <img src={myPhoto} alt="me"/>
            </div>
            <div className='textContainer'>
                <h1>Rokas Stankevičius</h1>
                <h3>Frontend Developer</h3>
                <h4>Disciplined about work</h4>
            </div>
            <div className='twoButtons'>
                <a href="mailto: rokasstankevicius3@gmail.com" className='emailButton'><img src={faviconMail} alt='favicon mail'/>Email</a>
                <a href="https://www.linkedin.com/in/rokas-stankevi%C4%8Dius-6577861b2/" className="linkedinButton" target="_blank" rel="noreferrer"><img src={faviconLinkedin} alt='favicon linkedin'/>LinkedIn</a>
            </div>
        </div>
    )
    return(
        <>
            {info}
        </>

    )
}

export default Info;