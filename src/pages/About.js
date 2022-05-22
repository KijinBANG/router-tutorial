import {Link} from 'react-router-dom';
import {useLocation} from "react-router-dom";

const About = () => {
    const location = useLocation();

    return (
        <div>
            <h1>About</h1>
            <p>리엑트 라우터를 연습해봅시다!</p>
            <Link to={'/'}>Home</Link>
            <p>Querystring: {location.search}</p>
        </div>
    );
};

export default About;