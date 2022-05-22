import {useParams} from "react-router-dom";

const data = {
    keygenie: {
        name: 'kijin',
        description: 'planning & design expert'
    },
    samcarrmichael: {
        name: 'diego',
        description: 'developer who likes react.js'
    },
};

const Profile = () => {
    const param = useParams();
    const profile = data[param.username];

    return (
        <div>
            <h1>User Profile</h1>
            {profile ? (
                <div>
                    <h2>{profile.name}</h2>
                    <p>{profile.description}</p>
                </div>
            ) : (
                <p>This profile does not exist.</p>
            )}
        </div>
    );
};

export default Profile;