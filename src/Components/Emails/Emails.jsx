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
        <div className='max-w-[1120px] mx-auto'>
            <div className='max-w-[500px] mx-auto bg-emerald-400'>
                {/* {
                    emails.map(email => )
                } */}
                <ul>
                    <li>mahfuz</li>
                    <li>mahfuz</li>
                    <li>mahfuz</li>
                </ul>
            </div>
        </div>
    );
};

export default Emails;