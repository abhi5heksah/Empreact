import React, { useEffect } from 'react'
import axios from 'axios'

function Myaxios() {

    const Myaxiosfunc = ()=>{
        axios.get('https://dummyjson.com/users').then((d)=>{
            console.log(d)
        })
};

//     const Myaxiosfunc = ()=>{
//        fetch('https://dummyjson.com/users').then((d)=>{
//             console.log(d)
//         })
// };

useEffect(()=>{
    Myaxiosfunc();
},[])


    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-3'>
                    <div className='card p-3 mt-2 bg-danger'>
                        <h1>sno:</h1>
                        <h4>Student Name:</h4>
                        <p>Subject:</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Myaxios