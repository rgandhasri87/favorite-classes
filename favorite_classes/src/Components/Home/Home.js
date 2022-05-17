import React, { useState } from 'react';
import Class from "../Class/Class";

import "./Home.css"

function Home(props) {

    const [value, setValue] = useState('');
    const [favoriteClasses, setClasses] = useState([]);

    const handleChange = (event) => {
        setValue(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!favoriteClasses.includes(value)) {
            setClasses(favoriteClasses.concat(value));
            setValue('');
        }
        console.log(favoriteClasses);
    }

    return (
        <div>
            <h1>Use this website to keep track of your favorite classes!</h1>
            <form onSubmit={handleSubmit}>
                <div id="form-container">
                    <input type="text" value={value} onChange={handleChange} placeholder="Enter a class"></input>
                    <button id="form-submit" type="submit">Add Class!</button>
                </div>
            </form>
            <div id="class-container">
                {favoriteClasses.map((favClass) =>
                    <Class name={favClass} key={favClass}></Class>
                )}
            </div>

        </div>
    )
}

export default Home;