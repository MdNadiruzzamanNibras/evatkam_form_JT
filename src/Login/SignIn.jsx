import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../firebase.config";


const SignIn = () => {
    const navigate = useNavigate()
     const [
            signInWithEmailAndPassword,
            user,
            loading,
            error,
          ] = useSignInWithEmailAndPassword(auth);
    if (loading) {
        <p>Loading....</p>
    }
    const handlesignIn = event=>{
          event.preventDefault();
          
          const email = event.target.email.value;
        const password = event.target.password.value;
        console.log( email,password);
          signInWithEmailAndPassword(email, password)
          navigate('/dashboard')
    }
    if (error) {
        <p className='text-red-700'>{ error.message}</p>
    }
    console.log(user);
    return (
        <div>
            <div className="flex justify-center items-center h-screen">
                <div>
                    <h1 className='text-center font-bold text-2xl my-4'>Sign In</h1>
                     <form  onSubmit={handlesignIn}>
            
            <input type="text" name="email" id="" required placeholder='email'className="input input-bordered input-primary w-full max-w-xs py-2 my-2 px-8"/> <br />
            <input type="password" name="password" id="" required placeholder='password' className="input input-bordered input-primary w-full max-w-xs py-2 my-2 px-8"/> <br />
            <button className='btn btn-outline text-center ml-40'>SignIn</button>
                    </form>
                    <p>New User? <Link to="/signup" className='pr-4'>Please SignUp</Link> </p>
               </div>
                
            </div>
        </div>
    );
};

export default SignIn;