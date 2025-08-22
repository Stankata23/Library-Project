import React, { useState } from "react";
import './Authors.css'
import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";

import { ThemeToggleButton } from '../../DarkTheme/ToggleButton';



// Import-и на книги

//Толкин
import tolkien from "../../Images/Tolkien.jpg"
import lotr from "../../Images/LordOftheRings.jpg"
import hobbit from "../../Images/Hobbit.jpg"

// Стивън Кинг
import stephenKing from "../../Images/StephenKing.jpeg"
import it from "../../Images/IT.jpg"
import shining from "../../Images/Сиянине.jpg"

//Айдриън
import adrian from "../../Images/Adrian.jpg"
import  childrenOfTime from "../../Images/AdrianBook1.jpg"
import childrenOfDestruction from "../../Images/AdrianBook2.jpg"




const authors = [
    {
        name: "Дж. Р. Р. Толкин",
        bio: "Джон Роналд Руел Толкин е британски писател, филолог и университетски преподавател, признат като основоположник на жанра фентъзи с романа си „Хобитът“ и неговото продължение, трилогията „Властелинът на пръстените“. На 28 март 1972 г.е удостоен със званието „Командор на Ордена на Британската империя“ заради приноса му към английската литература.",
        image: tolkien,
        books: [
            {title: "Властелинът на Пръстените", cover: lotr },
            {title: "Хобит или до там и обратно", cover: hobbit}
        ]
    },
    {
    name: "Стивън Кинг",
    bio: "Стивън Едуин Кинг е роден на 21 септември, 1947. Американски писател от шотландски произход, известен най-вече със своите романи на ужаса, които го превръщат в един от най-продаваните писатели на 20 век.",
    image: stephenKing,
    books: [
      { title: "То", cover: it },
      { title: "Сияние", cover: shining },
    ]
  },
  {
    name: "Ейдриън Чайковски",
    bio: "Ейдриън Чайковски е роден на 14 юни 1972 г. в Уудхал Спа, Линкълншър, Англия. Има полски произход. Учи зоология и психология в Рединг, преди да започне да упражнява право в Рединг и после в Лийдс. След 15 години опити в писането първият му фентъзи роман „Империя в черно и златно“ от поредицата „Сянката на умелите“ е публикуван през 2008 г. Публикуван е под псевдонима „Чайковски“ (на английски: Tchaikovsky), тъй като фамилията му (на английски: Czajkowski) е трудна за произнасяне и правопис на англоговорещите читатели.",
    image: adrian,
    books: [
      { title: "Деца на Времето", cover: childrenOfTime },
      { title: "Деца на Разрухата", cover: childrenOfDestruction },
    ],
    }
]


export default function AuthorsTemplate()
{

    const [index, setIndex] = useState(0)
    const author = authors[index]

    const nextAuthor = () => {
        setIndex(prev => (prev === authors.length - 1 ? 0 : prev + 1));
    }

    const prevAuthor =() => 
    { 
        setIndex(prev => (prev === 0 ? authors.length - 1 : prev - 1));
    }
    
    

  return (
    
  <div className="authors-container" >
<ThemeToggleButton />
    <div className="author-card">
      {/* Бутони */}

      
      <button onClick={prevAuthor} className="nav-button left">
        <ChevronLeftIcon />
      </button>
      <button onClick={nextAuthor} className="nav-button right">
        <ChevronRightIcon />
      </button>

      {/* Снимка */}
      <div className="author-image">
        <img src={author.image} alt={author.name} />
      </div>

      {/* Биография */}
      <div className="author-content">
        <h2>{author.name}</h2>
        <p>{author.bio}</p>
        <button className="more-btn">Виж повече</button>
    
        {/* Книги */}
        <div className="books">
          <h3>Избрани заглавия</h3>
          {author.books.map((book, i) => (
            <div key={i} className="book-item">
              <img src={book.cover} alt={book.title} />
              <span>{book.title}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>

);
    

}