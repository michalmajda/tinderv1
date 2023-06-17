import React from 'react';
import "./TopButtons.css";
import IconButton from '@mui/material/IconButton';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';

function TopButtons(){
    return(
        <div className='header'>
            <img
                    className='tinder-logo'
                    src="https://logos-world.net/wp-content/uploads/2020/09/Tinder-Logo.png"
                    alt="tinder-logo"
            />
            <div className='head-nav'>
                <IconButton aria-label="notification" size="large">
                    <NotificationsIcon fontSize="large" className='nav-icon'/>
                </IconButton>
                <IconButton aria-label="menu" size="large">
                    <MenuRoundedIcon fontSize="large" className='nav-icon' />
                </IconButton>
            </div>
            
            
            
        </div>
    );
}

export default TopButtons;