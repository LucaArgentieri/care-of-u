import React, {useState} from 'react'
import {useStory} from 'react-router-dom'
import firebase from '../firebase/Firebase'

export default function Login() {
    const history = useHistory();
    const [creds, setCreds] = useState({ nickname: '' });
    const [showLoading, setShowLoading] = useState(false);
    const ref = firebase.database().ref('users/');


    const onChange = (e) => {
        e.persist();
        setCreds({...creds, [e.target.name]: e.target.value});
    }

    const login = (e) => {
        e.preventDefault();
        setShowLoading(true);
        ref.orderByChild('nickname').equalTo(creds.nickname).once('value', snapshot => {
            if (snapshot.exists()) {
                localStorage.setItem('nickname', creds.nickname);
                history.push('/roomlist');
                setShowLoading(false);
            } else {
                const newUser = firebase.database().ref('users/').push();
                newUser.set(creds);
                localStorage.setItem('nickname', creds.nickname);
                history.push('/roomlist');
                setShowLoading(false);
            }
        });
    };

    return (
        <div>
            {showLoading &&
                <div><h1>Loading...</h1></div>
            }
            <div>
                <form onSubmit={login}>
                    <div>
                        <label>Nickname</label>
                        <input type="text" name="nickname" id="nickname" placeholder="Enter Your Nickname" value={creds.nickname} onChange={onChange} />
                    </div>
                    <button type="submit">
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
}