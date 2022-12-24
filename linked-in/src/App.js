import React, { useEffect } from 'react';
import './App.css';
import { login, logout, selectUser } from './features/counter/userSlice';
import {useDispatch, useSelector} from 'react-redux';
import Feed from './Feed';
import Header from './Header';
import Sidebar from './Sidebar';
import Login from './Login';
import { auth } from './firebase';
import Widgets from './Widgets';

function App() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser)

  useEffect(()=>{
    auth.onAuthStateChanged(userAuth => {
      if(userAuth){
        //logged in
        dispatch(login({
          email:userAuth.email,
          uid: userAuth.uid,
          displayName: userAuth.displayName,
          photoUrl: userAuth.photoURL,
        }))
      }else{
        // logged out
        dispatch(logout())
      }
    })
  },[])

  return (
    <div className="app">
      
    <Header />
      
      
      {!user ?(
        <Login />
      ):(
      <div className='app_body'>
        <Sidebar />
        <Feed />
        <Widgets />
      </div>)}

    </div>
  );
}

export default App;
