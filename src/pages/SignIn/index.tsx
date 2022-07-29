import { useState } from 'react';
import { GoogleLogo, TextHOne } from 'phosphor-react';

import { GoogleAuthProvider, signInWithPopup, User } from 'firebase/auth';
import { auth } from '../../services/firebase';

import './styles.scss';


export function SignIn(){

    const[ user, setUser ] = useState<User>({} as User);

    function handleGoogleSignIn(){
        const provider = new GoogleAuthProvider();

        signInWithPopup(auth, provider)
        .then((result) => {
            setUser(result.user);
        })
        .catch((error) => {
            console.log(error);
        });
    }

    return (
        <div className="container">

            <div className='user'>
                {user.photoURL && <img src={user.photoURL} alt="Foto do usuário" />}
                <strong>{user.displayName}</strong>
                <small>{user.email}</small>
            </div>

            <h1>Acesse sua conta</h1>

            <span>
                Utilizando autenticação com o Google, você facilita a vida do usuário, permitindo o uso da sua aplicação sem fazer cadastro.
            </span>

            <button type="button" className="button" onClick={handleGoogleSignIn}>
                <GoogleLogo />
                Entrar com Google
            </button>
        </div>
    );
    
}