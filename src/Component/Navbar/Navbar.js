import React from 'react'
import './Navbar.css'
import SearchIcon from '@mui/icons-material/Search';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';

const Navbar = () => {
    return (
        <div id='navbar'>
            <div id='quote'>
                <FitnessCenterIcon/>
                <h3> ONE MORE REP </h3>    
            </div>   

            <div id='input-bar'>
                <SearchIcon/>
                <input type="text" placeholder='Search video...' />
            </div>         
        </div>
    )
}

export default Navbar