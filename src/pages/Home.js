import {Link} from "react-router-dom";

const Home = () => {
    return (
        <div>
            <h1>Home</h1>
            <p>This is my own Portal.</p>
            <ul>
                <li>
                    <Link to={'/about'}>About</Link>
                </li>
                <li>
                    Profiles
                </li>
                <ul>
                    <li>
                        <Link to={'/profiles/keygenie'}>keyGENIE's profile</Link>
                    </li>
                    <li>
                        <Link to={'/profiles/samcarrmichael'}>SamCarrMichael's profile</Link>
                    </li>
                    <li>
                        <Link to={'/profiles/void'}>profile that does not exist.</Link>
                    </li>
                </ul>
                <li>
                    <Link to={'/articles'}>List of Articles</Link>
                </li>
                <li>
                    <Link to={'/mypage'}>My Page</Link>
                </li>
            </ul>
        </div>
    );
};

export default Home;