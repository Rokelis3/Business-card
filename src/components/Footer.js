import twitterFavicon from '../favicons/Twitter Icon.svg'
import facebookFavicon from '../favicons/Facebook Icon.svg'
import instagramFavicon from '../favicons/Instagram Icon.svg'
import githubFavicon from '../favicons/GitHub Icon.svg'

const Footer = () => {
    const footer = (
        <div className="footerContainer">
            <a href="/#"><img src={twitterFavicon} alt='twitter icon'/></a>
            <a href='https://www.facebook.com/rokas.stankevicius.58'><img src={facebookFavicon} alt='facebook icon'/></a>
            <a href="/#"><img src={instagramFavicon} alt='instagram icon'/></a>
            <a href='https://github.com/Rokelis3'><img src={githubFavicon} alt='github icon'/></a>
        </div>
    )
    return(
        <>
            {footer}
        </>
    )
}

export default Footer