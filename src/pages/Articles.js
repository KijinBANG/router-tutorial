import {Link, Outlet} from 'react-router-dom';

const Articles = () => {
    return (
        <div>
            <Outlet />
            <ul>
                <li>
                    <Link to={'/articles/1'}>first article</Link>
                </li>
                <li>
                    <Link to={'/articles/2'}>second article</Link>
                </li>
                <li>
                    <Link to={'/articles/3'}>third article</Link>
                </li>
            </ul>
            <Link to={'/'}>Home</Link>
        </div>
    );
};

export default Articles;