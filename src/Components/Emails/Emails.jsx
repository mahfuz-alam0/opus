import React from 'react';
import { AuthContext } from '../../Context/Context';

const Emails = () => {

    const { user } = React.useContext(AuthContext);

    const [emails, setEmails] = React.useState([]);

    React.useEffect(() => {
        fetch('http://localhost:5000/emails')
            .then(res => res.json())
            .then(data => setEmails(data))
    }, []);

    console.log(emails)

    return (
        <div className='max-w-[1120px] mx-auto text-center'>
            <div className='max-w-[400px] mx-auto'>
                {/* {
                    emails.map(email => )
                } */}
                <ul>
                    {
                        emails.map(email => <li className='my-3 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text'>{email.email}</li>)
                    }
                    
                </ul>
            </div>
        </div>
    );
};

export default Emails;