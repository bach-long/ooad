import HomeLayout from "../../layout/HomeLayout"
import { Link } from "react-router-dom";
import { Routes, Route } from 'react-router-dom'
import Home from "./home";
import Job from "./job";
import Company from "./company";
import Profile from "./profile";
import Search from './home/search'

const items = [
    {
        label: <Link to='/'>Trang chủ</Link>,
        key: 'home',
    },
    {
        label: <Link to={'/job'}>Việc làm</Link>,
        key: 'job',
    },
    {
        label: <Link to={'/company'}>Công ty</Link>,
        key: 'company',
    },
    {
        label: <Link to={'/profile'}>Hồ sơ</Link>,
        key: 'profile',
    },
];


const User = () => {
    return (
        <HomeLayout menu={items}>
            <div style={{ paddingTop: 4 }}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/search" element={<Search/>} />
                    <Route path="/job" element={<Job />} />
                    <Route path="/company" element={<Company />} />
                    <Route path="/profile" element={<Profile />} />
                </Routes>
            </div>
        </HomeLayout>
    )
}

export default User