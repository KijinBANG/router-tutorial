import {Route, Routes} from 'react-router-dom'
import About from './pages/About'
import Home from './pages/Home'
import Profile from "./pages/Profile";
import Article from './pages/Article';
import Articles from './pages/Articles';
import Header from './layout/Header';
import NotFound from './pages/NotFound';
import Login from './pages/Login'
import MyPage from './pages/MyPage';
import './App.css';

export default function App() {
    return (
        <Routes>
            <Route element={<Header />}>
                <Route index path={'/'} element={<Home/>}/>
                <Route path={'/about'} element={<About/>}/>
                <Route path={'/profiles/:username'} element={<Profile />} />
                <Route path={'/articles'} element={<Articles />}>
                    <Route path={':id'} element={<Article />} />
                </Route>
                <Route path={'/login'} element={<Login />} />
                <Route path={'/mypage'} element={<MyPage />} />
                <Route path={'*'} element={<NotFound />} />
            </Route>
        </Routes>
    );
};
