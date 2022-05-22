import {Link, useLocation, useSearchParams} from 'react-router-dom';

const About = () => {
    const location = useLocation();
    const [searchParams, setSearchParams] = useSearchParams();
    const detail = searchParams.get('detail');
    const mode = searchParams.get('mode');

    const onToggleDetail = () => {
        setSearchParams({
            mode,
            detail: detail === 'true' ? false : true
        });
    };

    const onIncreaseMode = () => {
        console.log('mode: ', mode);
        const nextMode = mode === null ? 1 : 1 + parseInt(mode);
        console.log(nextMode, mode);
        setSearchParams({mode: nextMode, detail});
    };

    return (
        <div>
            <h1>About</h1>
            <p>리엑트 라우터를 연습해봅시다!</p>
            <Link to={'/'}>Home</Link>
            <p>Querystring: {location.search}</p>
            <p>detail: {detail}</p>
            <p>mode: {mode}</p>
            <button onClick={onToggleDetail}>Toggle detail</button>
            <button onClick={onIncreaseMode}>mode + 1</button>
        </div>
    );
};

export default About;