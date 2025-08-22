import { Link } from 'react-router-dom';
import Horror from '../assets/Horror.png';
import Fantasy from '../assets/Fantasy.png'
import SciFi from '../assets/SCI-FI.png'
import CriminalFiction from '../assets/CriminalFiction.png'
import Romantasy from '../assets/Romantasy.png'
import '../Pages/CSS/Genres.css'
import BookManager from '../assets/Components/BookManager/BookManager';

import { ThemeToggleButton } from '../DarkTheme/ToggleButton';


export default function Genres() {


    return (
        <>

            <br />
            <br />
            <div>
                <h1>Жанрове</h1>
            </div>
            <ThemeToggleButton />
            <div className='cardLinks'>
                
                <Link to='/horror'><img className="img-card" element={<BookManager genre="Хорър" />} src={Horror} alt="Horror genre" /> </Link>
                <Link to="/fantasy"><img className="img-card" element={<BookManager genre="Фентъзи" />} src={Fantasy} alt="Fantasy Genre" /> </Link>
                <Link to="/sci-fi"><img className="img-card" element={<BookManager genre="Научна фантастика" />} src={SciFi} alt="Sci-Fi genre" /> </Link>
                <Link to="/criminalfiction"><img className="img-card" element={<BookManager genre="Криминални" />} src={CriminalFiction} alt="Criminal genre" /> </Link>
                <Link to="/romance"><img className="img-card" element={<BookManager genre="Романтика" />} src={Romantasy} alt="Romance genre" /> </Link>

            </div>
            <br />
            <br />

        </>
    )
}