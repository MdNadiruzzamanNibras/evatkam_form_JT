import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';

import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../../firebase.config';

const SignUp = () => {
    const navigate = useNavigate()
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    if (loading) {
        <p>Loading....</p>
    }
    const handlesignUP = event=>{
          event.preventDefault();
          const name = event.target.name.value;
          const email = event.target.email.value;
        const password = event.target.password.value;
        console.log(name, email);
          createUserWithEmailAndPassword(email, password)
          navigate('/dashboard')
    }
    if (error) {
        <p className='text-red-700'>{ error.message}</p>
    }
    console.log( user);
    return (
        <div>
            <div className="flex justify-center items-center h-screen">
                <div>
                    <h1 className='text-center font-bold text-2xl my-4'>Sign UP</h1>
                     <form  onSubmit={handlesignUP}>
            <input type="text" name="name" id="" required placeholder='name' className="input input-bordered input-primary w-full max-w-xs py-2 my-2 px-8"/> <br />
            <input type="text" name="email" id="" required placeholder='email'className="input input-bordered input-primary w-full max-w-xs py-2 my-2 px-8"/> <br />
            <input type="password" name="password" id="" required placeholder='password' className="input input-bordered input-primary w-full max-w-xs py-2 my-2 px-8"/> <br />
            <button className='btn btn-outline text-center ml-40'>SignUP</button>
                    </form>
                    <p>Already Account? <Link to='/'  >Please SignIn</Link></p>
               </div>
                
            </div>
        </div>
    );
};

export default SignUp;