import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

const About = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
  "/burgerrestaurantreact/images/burgerTeam.jpg",
  "/burgerrestaurantreact/images/cheeseBurger.jpg",
  "/burgerrestaurantreact/images/burgerCustomers.jpg",
  "/burgerrestaurantreact/images/baconBurger.jpg",
  "/burgerrestaurantreact/images/restaurant.jpg",
  "/burgerrestaurantreact/images/chickenSandwich.jpg"
];


  // Function to show the current slide

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 3000); // Slide every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [slides.length]);

  return (
    <div className="page-container">
      {/* Header */}
      <header>
        <nav>
          <div className="logo">The Burger Den</div>
          <ul className="nav-links">
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/menu">Menu</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
          <div className="hamburger">&#9776;</div>
        </nav>
      </header>

      {/* About Section */}
      <section id="about" className="about">
        <h2 className="title">About Us</h2>
        <p>
          At The Burger Den, we believe that great burgers start with fresh, high-quality ingredients and a passion for flavor.
          Since our founding, we’ve been dedicated to serving up mouthwatering, handcrafted burgers that satisfy every craving.
          Come visit us and experience the best burgers in town—because at The Burger Den, every bite is a taste of perfection!
        </p>
      </section>

      {/* Gallery Section with Slider */}
      <section id="gallery" className="gallery">
        <h2>Gallery</h2>
        <div className="slider">
          {slides.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Slide ${index + 1}`}
              style={{
                display: index === currentSlide ? 'block' : 'none',
                transition: 'opacity 1s ease-in-out'
              }}
            />
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer>
        <p>Follow us on: 
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a> | 
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
        </p>
        <p>Business Hours: 9 AM - 10 PM</p>
      </footer>
    </div>
  );
};

export default About;
