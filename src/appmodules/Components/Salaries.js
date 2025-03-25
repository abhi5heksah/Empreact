import React, { useEffect, useState } from 'react';
import Myapi from './../../api'; // Import the local API data

function Salaries() {
    const [data, setData] = useState([]);

    useEffect(() => {
        setData(Myapi.members); // Set data from the imported API
    }, []);

    return (
        <div className='container'>
            <div className='row'>
                {data.map((d) => (
                    <div key={d.id} className='col-md-3'>
                        <div className='card p-3 mt-2'>
                            <h1>Name: {d.name}</h1>
                            <h4>Age: {d.age}</h4>
                            <p>Mobile: {d.mobile}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Salaries;
