
import { Link } from 'react-router-dom';
import Horror from '../assets/Horror.png';
import Fantasy from '../assets/Fantasy.png'
import SciFi from '../assets/SCI-FI.png'
import CriminalFiction from '../assets/CriminalFiction.png'
import Romantasy from '../assets/Romantasy.png'
import '../Pages/CSS/Genres.css'



export default function Genres(){

   
    return(
        <>
        
        <div id="root">
            <h1>Genres</h1>
        </div>
        <br />
        <br />
        <div>       
            <Link to='/horror'> <img class= "img-card" src={Horror} alt="Horror genre" /> </Link>
            <Link to="/horror"><img class= "img-card" src={Fantasy} alt="Fantasy Genre" /> </Link>
             <Link to="/horror"><img class= "img-card" src={SciFi} alt="Horror genre" /> </Link>
            <Link to="/horror"><img class= "img-card" src={CriminalFiction} alt="Horror genre" /> </Link>
            <Link to="/horror"><img class= "img-card" src={Romantasy} alt="Horror genre" /> </Link>
        
        </div>
        <br />
        <br />
        <div>
            <Link to="/">Go back</Link>
        </div>
        </>
    )
}