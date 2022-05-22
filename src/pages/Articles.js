import {NavLink, Outlet} from 'react-router-dom';

const Articles = () => {


    return (
        <div>
            <Outlet />
            <ul>
                {/*<li>
                    <NavLink
                        to={'/articles/1'}
                        style={({isActive}) => (isActive ? activeStyle : undefined)}
                    >first article</NavLink>
                </li>
                <li>
                    <NavLink
                        to={'/articles/2'}
                        style={({isActive}) => (isActive ? activeStyle : undefined)}
                    >second article</NavLink>
                </li>
                <li>
                    <NavLink
                        to={'/articles/3'}
                        style={({isActive}) => (isActive ? activeStyle : undefined)}
                    >third article</NavLink>
                </li>*/}
                <ArticleItem id={1} />
                <ArticleItem id={2} />
                <ArticleItem id={3} />
            </ul>
        </div>
    );
};

const ArticleItem = ({id}) => {
    const activeStyle = {
        color: 'green',
        fontSize: 21,
    };
    return (
        <li>
            <NavLink
                to={`/articles/${id}`}
                style={({isActive}) => (isActive ? activeStyle : undefined)}
            >
                Article No.{id}
            </NavLink>
        </li>
    )
}

export default Articles;