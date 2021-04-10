import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>MyBlog</h1>
            <div className="links">
                <Link to="/" style={{
                    color: 'white',
                    backgroundColor: '#f1356d',
                    borderRadius: '6px'
                }}>Home</Link>
                <Link to="/create" style={{
                    color: "white",
                    backgroundColor: '#f1356d',
                    borderRadius: '6px'
                }}>New Blog</Link>
            </div>
        </nav>
    );
}
 
export default Navbar;