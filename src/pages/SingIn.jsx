import React , {useEffect} from 'react'
import {GoogleButton} from 'react-google-button'
import { UserAuth } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'

const SingIn = () => {
    const {googleSignIn , user} = UserAuth()
    const navigate = useNavigate()


    const handleGoogleSingIn = async () => {
        try {
            await googleSignIn()
        } catch (error) {
            console.log(error);
        }
    }

    useEffect( () => {
        if(user != null) {
            navigate('/account' , {replace: true})
        }
    } , [user])

  return (
    <div>
        <h1>Sing In</h1>
        <div style={ {marginTop: '30px'} }>
            <GoogleButton
                onClick={handleGoogleSingIn}
            />
        </div>
    </div>
  )
}

export default SingIn