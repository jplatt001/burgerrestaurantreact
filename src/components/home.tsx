import { Link } from 'react-router-dom';
import "../styles.css";

function Home() {
  return (
    <div className="background">
      <header className="header">
        <nav className="nav">
          <div className="logo">The Burger Den</div>
          <ul className="nav-links">
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/menu">Menu</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
      </header>

      <main className="home-main">
        <div className="hero-image"></div>
      </main>

      <footer className="footer">
        <p>Follow us on:
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"> Facebook </a> | 
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"> Instagram </a>
        </p>
        <p>Business Hours: 9 AM - 10 PM</p>
      </footer>
    </div>
  );
}

export default Home;
