import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { login } from './features/counter/userSlice';
import { auth } from './firebase';
import './Login.css';

function Login() {
    const [email ,setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [name, setName] = useState("")
    const [profilePic, setProfilePic] = useState("")
    const dispatch = useDispatch()
    const loginToApp =(e)=>{
        e.preventDefault()
        auth.signInWithEmailAndPassword(email,password)
        .then(userAuth =>{
            dispatch(login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName :userAuth.user.displayName,
                profileUrl: userAuth.user.photoURL,
            }))
        }).catch((err) => alert(err))
    }

    const register =()=>{
        if(!name){
            return(alert("Enter a full name"))
        }

        auth.createUserWithEmailAndPassword(email,password)
        .then((userAuth) => {
            userAuth.user.updateProfile({
                displayName: name,
                photoURL: profilePic,
            })
            .then(()=>{
                dispatch(login({
                    email: userAuth.user.email,
                    uid: userAuth.user.uid,
                    displayName: name,
                    photoUrl : profilePic,
                }))
            })
        }).catch(err => alert(err))
    }
  return (
    <div className='login'>
        <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/LinkedIn_Logo.svg/2560px-LinkedIn_Logo.svg.png' alt =""/>

        <form>
            <input  value ={name} onChange={e=> setName(e.target.value)} type = "text" placeholder='Full name (required if registering)'/>
            <input value={profilePic} onChange={e =>setProfilePic(e.target.value)} type="text" placeholder='Profile picture Url (optional)'/>
            <input value={email} onChange={e => setEmail(e.target.value)} type="email" placeholder='Email' />
            <input value= {password} onChange={e => setPassword(e.target.value)} type ="password" placeholder='Password'/>

            <button type="submit" onClick={loginToApp}>Sign In</button>
        </form>

        <p> Not a member? 
            <span className='login_register' onClick={register}> Register Now</span>
        </p>

    </div>
  )
}

export default Login