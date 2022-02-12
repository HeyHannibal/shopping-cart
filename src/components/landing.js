import "../styles/landing.css";
import promoImg from '../imgs/stockImgs/PRSsilversky.png'

export default function Landing() {
    return (
        <div className="landingMain">
            <div className='newsDiv'>
                <div className="news">
                    <h2>everything on sale!</h2><p>28-Feb-2022</p>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                        
                        numquam consequuntur repellendus a sequi cupiditate autem.</p>
                </div>
                <div className="news">
                <h2>steal of the year!</h2><p>1-Mar-2022</p>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                        
                        numquam consequuntur repellendus a sequi cupiditate autem.</p>
                </div>
                <div className="news">
                <h2>We are never going to financially recover from this!</h2><p>2-Mar-2022</p>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                        numquam consequuntur repellendus a sequi cupiditate autem.</p>
                </div>
            </div>
            <div className='promoDiv'>
                
                <div className="learnMoreDiv">
                    <h4 className='promoName'>PRS Silver Sky Se</h4>
                    <button>learn more</button>
                </div>
                <img src={promoImg}></img>
            </div>
        </div>
    )
}