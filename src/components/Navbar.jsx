import React from 'react'
import {Link} from 'react-router-dom'
import {UserAuth} from '../context/AuthContext'


const Navbar = () => {
    const {user, logOut} = UserAuth()

    const handleSignOut = async () => {
        try{
            await logOut()
        }catch(error){
            console.log(error);
        }
    }

    return (
        <div className='navbar'>
            <h1>Auth Google</h1>
            {user?.displayName ?
                <button
                    onClick={handleSignOut}
                >Logout</button>
                :
                <Link to='/singin'>Sing In</Link>
            }
        </div>
    )
}

export default Navbar