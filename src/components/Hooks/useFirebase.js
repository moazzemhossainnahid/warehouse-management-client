import { useState } from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
const useFirebase = () => {
    const [createUserWithEmailAndPassword] = useCreateUserWithEmailAndPassword(auth);
    const [signInWithEmailAndPassword] = useSignInWithEmailAndPassword(auth);

    const [passError, setPassError] = useState('');
    const [conPassError, setConPassError] = useState('');

    const handleSignupForm = (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        const confirmpassword = event.target.confirmpassword.value;

        if(password.length < 8){
            setPassError('Password must be at least 8 Charecters');
            setConPassError('');
            return;
        }else if(password !== confirmpassword){
            setConPassError('Password & Confirm Password Not Matched..!');
            setPassError('');
            return;
        }else{
            setPassError('')
            setConPassError('');
        }

        createUserWithEmailAndPassword(email, password)
        toast("Submitted Successfully")
        event.target.reset();

    }

    const handleSigninForm = (event) => {
        event.preventDefault();

        const email = event.target.email.value;
        const password = event.target.password.value;

        signInWithEmailAndPassword(email, password);
        event.target.reset();
        toast('Sign in Successfull')

    }

    return {
        passError,
        conPassError,
        handleSignupForm,
        handleSigninForm
    }
};

export default useFirebase;