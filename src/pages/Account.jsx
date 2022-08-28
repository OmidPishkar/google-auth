import React , {useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'

const Account = () => {
    const navigate = useNavigate()
    const {logOut , user} = UserAuth()


    const handleSignOut = async () => {
        try{
            await logOut()
        }catch(error){
            console.log(error);
        }
    }

    useEffect( () => {
        if(user === null){
            navigate('/' , {replace: true})
        }
    } , [user])

  return (
    <div>
        <h1>Account</h1>
        <div>
            <p>Wellcome , {user?.displayName}</p>
        </div>
        <button
        onClick={handleSignOut}>Logout</button>
    </div>
  )
}

export default Account