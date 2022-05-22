import {Link} from 'react-router-dom';

const About = () => {
    return (
        <div>
            <h1>About</h1>
            <p>리엑트 라우터를 연습해봅시다!</p>
            <Link to={'/'}>Home</Link>
        </div>
    );
};

export default About;