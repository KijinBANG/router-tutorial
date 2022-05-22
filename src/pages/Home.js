import {Link} from "react-router-dom";

const Home = () => {
    return (
        <div>
            <h1>Home</h1>
            <p>This is my own Portal.</p>
            <Link to={'/about'}>About</Link>
        </div>
    );
};

export default Home;