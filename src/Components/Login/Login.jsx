import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/Context';

const Login = () => {

    const { login } = React.useContext(AuthContext);

    const [loginError, setLoginError] = React.useState(null);

    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        setLoginError(null);
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        login(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate('/');
            })
            .catch(error => {
                setLoginError(error.message);
            });
        // login()
    }
    return (
        <div className='bg-slate-200'>
            <div className=' h-screen flex justify-center items-center'>
                <div className='shadow-xl px-5 rounded-xl py-10 bg-white'>
                    <h2 className='text-3xl text-center mb-5'>Login</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="form-control w-full max-w-xs">
                            <label className="label"> <span className="label-text">Email</span></label>
                            <input name='email' type="text" className="input input-bordered w-full max-w-xs" placeholder='Enter your email' />
                        </div>
                        <div className="form-control w-full max-w-xs my-5">
                            <label className="label"> <span className="label-text">Password</span></label>
                            <input name='password' type="password" className="input input-bordered w-full max-w-xs" placeholder='Enter your password' />
                            <label className=""> <span className="hover:underline cursor-pointer">Forget Password?</span></label>
                        </div>
                        <input className='button w-full' value="Login" type="submit" />
                        <div>
                            {loginError && <p className='text-red-600'>{loginError}</p>}
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;