import { useState } from 'react';
import Card from '../Card';
import './Tours.css';

function Tours({ tours, removeTour }) {

    const [searchInput, setSearchInput] = useState('');

    function SearchItem() {
        const textBox = document.getElementById('search');
        setSearchInput(textBox.value);
    }

    const filtered = !searchInput
        ? tours
        : tours.filter((details) =>
            details.name.toLowerCase().includes(searchInput.toLowerCase())
        );

    return (
        <div className='container'>
            <div>
                <h2 className='title'> Plan With Love </h2>
            </div>
            <div>
                <input type='search' id="search" />
                <button onClick={SearchItem}>search</button>
            </div>
            <div className='cards'>
                {
                    filtered.map((tour) => {
                        return <Card {...tour} removeTour={removeTour}></Card>
                    })
                }
            </div>
        </div>
    )
}

export default Tours;