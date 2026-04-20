export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">

        <div className="row">
          
          {/* About */}
          <div className="col">
            <h3>Laundry Service</h3>
            <p>
              Fast, reliable and affordable laundry service. 
              We make your life easier.
            </p>
          </div>

          {/* Links */}
          <div className="col">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="/home">Home</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/user">Book Rider</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div className="col">
            <h4>Our Services</h4>
            <ul>
              <li>Dry Cleaning</li>
              <li>Ironing</li>
              <li>Wash & Fold</li>
              <li>Express Service</li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col">
            <h4>Contact Us</h4>
            <p>📍 Pakistan</p>
            <p>📞 +92 300 0000000</p>
            <p>📧 info@email.com</p>

            <div className="social">
              <span>🌐</span>
              <span>📘</span>
              <span>🐦</span>
              <span>📸</span>
            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="bottom">
          <p>© 2026 Waseem Laundry. All Rights Reserved.</p>
        </div>

      </div>
    </footer>
  );
}