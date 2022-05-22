import {Link, Outlet, useNavigate} from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate();
    
    const goBack = () => {
        navigate(-1);//이전 페이지로 이동
    }

    const goArticles = () => {
        navigate(
            '/articles',
            {// replace 옵션의 기능: 페이지를 이동할 때 현재 페이지를 기록에 남기지 않는다.
                replace: true,
            });
    }

    return (
        <div>
            <header style = {
                {
                    background: 'lightgray',
                    padding: 16,
                    fontSize: 24,
                }
            }>
                <Link to={'/'}>Home</Link>
                <p>Header</p>
                <button onClick={goBack}>Go Back</button>
                <button onClick={goArticles}>List of Articles</button>
            </header>
            <main>
                <Outlet />
            </main>
        </div>
    );
};

export default Header;