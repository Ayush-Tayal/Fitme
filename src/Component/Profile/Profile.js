import React from 'react'
import './Profile.css'
import ProfilePic from '../../Assests/profile.png'
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';  
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';

const Profile = () => {
    return (
        <div id='profile'>
            <img src={ProfilePic} alt='alt' id='profile-pic'/>
            <h1> Ayush Tayal </h1>
            <h2> Fitness Freak </h2>
            
            <div id='icons'>
                <InstagramIcon className='icon' style={{color:'red'}} onClick={() => window.open('https://www.instagram.com')} />
                <TwitterIcon className='icon' style={{color:'hsl(214deg 89% 52%)'}} onClick={() => window.open('https://www.twitter.com')} /> 
                <LinkedInIcon className='icon' style={{color:'hsl(214deg 89% 52%)'}} onClick={() => window.open('https://www.linkedin.com')} />
                <GitHubIcon className='icon' style={{color:'black'}} onClick={() => window.open('https://www.github.com')}/> 
                <FacebookIcon className='icon' style={{color:'hsl(214deg 89% 52%)'}} onClick={() => window.open('https://www.facebook.com')}/> 
            </div>
        </div>
    )
}

export default Profile
