
import { Link } from 'react-router-dom';
import Horror from '../assets/Horror.png';
import '../index.css'



export default function Genres(){

   
    return(
        <>
        <div>
            <h1>Genres</h1>
        </div>
        <div>       
            <Link to='/horror'> <img src={Horror} alt="Horror genre" /> </Link>
            <Link to="/horror"><img src={Horror} alt="Horror genre" /> </Link>
             <Link to="/horror"><img src={Horror} alt="Horror genre" /> </Link>
            <Link to="/horror"><img src={Horror} alt="Horror genre" /> </Link>
        </div>
        <br />
        <br />
        <div>
            <Link to="/">Go back</Link>
        </div>
        </>
    )
}