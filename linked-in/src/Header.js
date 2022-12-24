import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationIcon from '@mui/icons-material/Notifications';
import HeaderOption from './HeaderOption';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/counter/userSlice';
import { auth } from './firebase';

function Header() {
    
    const user = useSelector(selectUser)
    const dispatch = useDispatch()

    const logoutApp = ()=>{
        dispatch(logout)
        auth.signOut()
    }
  return (

    

    <div className='header'>
        
        
        <div className='header_left'>
            <img  src="https://cdn-icons-png.flaticon.com/128/3536/3536505.png" alt=" "/>
            <div className='header_search'>
                <SearchIcon />
                <input placeholder='Search' text='text' />
            </div>
        </div>

        <div className='header_right'>
            <HeaderOption Icon={HomeIcon} title="Home"/>
            <HeaderOption Icon={SupervisorAccountIcon} title="My Network"/>
            <HeaderOption Icon ={BusinessCenterIcon} title="Jobs"/>
            <HeaderOption Icon ={ChatIcon} title="Messaging"/>
            <HeaderOption Icon ={NotificationIcon} title="Notification"/>
            <HeaderOption avatar={true} title='me' onClick={logoutApp}/>

        </div>

    </div>
  )
}

export default Header