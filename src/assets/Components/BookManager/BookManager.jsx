import './BookManager.css'
import React, { useState } from 'react'

import { ThemeToggleButton } from '../../../DarkTheme/ToggleButton';



function BookManager() {
    const [books, setBooks] = useState([]);
    const [formData, setFormData] = useState({
        id: null,
        title: '',
        author: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleAddOrUpdate = () => {
        if (formData.id !== null) {
            // Update
            setBooks(
                books.map((book) =>
                    book.id === formData.id ? { ...book, ...formData } : book
                )
            );
        } else {
            // Add
            const newBook = {
                ...formData,
                id: Date.now(), // временно ID
            };
            setBooks([...books, newBook]);
        }

        // Reset form
        setFormData({ id: null, title: '', author: '' });
    };

    const handleEdit = (book) => {
        setFormData(book);
    };

    const handleDelete = (id) => {
        setBooks(books.filter((book) => book.id !== id));
    };

    return (
        <>
        <div className="book-manager">
               
            <h2>Управление на книги</h2>

            <input
                type="text"
                name="title"
                placeholder="Заглавие"
                value={formData.title}
                onChange={handleChange}
            />
            <input
                type="text"
                name="author"
                placeholder="Автор"
                value={formData.author}
                onChange={handleChange}
            />
            <button onClick={handleAddOrUpdate}>
                {formData.id !== null ? 'Обнови книга' : 'Добави книга'}
            </button>

       
            <ul>
                {books.map((book) => (
                    <li key={book.id}>
                        <strong>{book.title}</strong> от {book.author}{' '}
                        <button onClick={() => handleEdit(book)}>Редактирай</button>
                        <button onClick={() => handleDelete(book.id)}>Изтрий</button>
                    </li>
                ))}
            </ul>


        </div>
        
            </>
    );
}

export default BookManager;

