import React, { useState, useEffect } from 'react';
import Profile from '../components/Profile';

const ProfilePage = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        // Fetch user profile from backend API
    }, []);

    return (
        <div>
            <h2>Profile Page</h2>
            {user && <Profile user={user} />}
        </div>
    );
};

export default ProfilePage;