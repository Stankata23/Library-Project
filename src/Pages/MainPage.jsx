import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


export default function MainPage(){

    const navigate = useNavigate()

    const goToGenres = () => navigate('/genres')

    return(
        <div>
            <h1>Пешо тука си ти</h1>
            <button onClick={goToGenres}>Go to genres</button> 
        </div>
    )
}