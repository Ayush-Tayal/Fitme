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
                <InstagramIcon style={{color:'red'}}/>
                <TwitterIcon style={{color:'hsl(214deg 89% 52%)'}}/> 
                <LinkedInIcon style={{color:'hsl(214deg 89% 52%)'}}/>
                <GitHubIcon style={{color:'black'}}/> 
                <FacebookIcon style={{color:'hsl(214deg 89% 52%)'}}/> 
            </div>
        </div>
    )
}

export default Profile
