import {useLocation, useSearchParams} from 'react-router-dom';

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
        console.log(isNaN(mode))
        const nextMode = mode === null || isNaN(mode) ? 1 : 1 + parseInt(mode);
        console.log(nextMode, mode);
        setSearchParams({mode: nextMode, detail});
    };

    return (
        <div>
            <h1>About</h1>
            <p>Let's study about react-router</p>
            <p>Querystring: {location.search}</p>
            <p>detail: {detail}</p>
            <p>mode: {mode}</p>
            <button onClick={onToggleDetail}>Toggle detail</button>
            <button onClick={onIncreaseMode}>mode + 1</button>
        </div>
    );
};

export default About;