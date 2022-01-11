import React, { useState } from 'react'
import './Navbar.css'
import SearchIcon from '@mui/icons-material/Search';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import { videoData } from '../../videos';

const Navbar = () => {
    const [input, setInput] = useState("");
    // console.log(input);

    return (
        <div id='navbar'>
            <div id='quote'>
                <FitnessCenterIcon/>
                <h3> ONE MORE REP </h3>    
            </div>   

            <div id='input-bar'>
                <SearchIcon/>
                <input 
                    type="text" 
                    placeholder='Search video...' 
                    onChange={(e) => setInput(e.target.value)}
                />
            </div>         
        </div>
    )
}

export default Navbar