import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <section className="hero">
        <h1>E-Commerce Analytics Platform</h1>

        <p>
          Analyze revenue trends, customer satisfaction, and seller
          performance through interactive dashboards powered by Python,
          PostgreSQL, Power BI, and React.
        </p>

        <div className="hero-buttons">
          <Link to="/revenue">
            <button>Explore Dashboard</button>
          </Link>

          <a
            href="https://github.com/anaghamurali04/Ecommerce-analytics-dashboard"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="github-btn">
              View GitHub Repository
            </button>
          </a>
        </div>
      </section>

      <section className="stats">
        <div className="card">
          <h3>16.01M</h3>
          <p>Total Revenue</p>
        </div>

        <div className="card">
          <h3>99,441</h3>
          <p>Total Orders</p>
        </div>

        <div className="card">
          <h3>4.09</h3>
          <p>Average Rating</p>
        </div>

        <div className="card">
          <h3>3095</h3>
          <p>Total Sellers</p>
        </div>
      </section>

      <section className="quick-links">
        <Link to="/revenue" style={{ textDecoration: "none" }}>
          <div className="card quick-card">
            <h2>Revenue Analytics</h2>
            <p>
              Explore revenue trends, monthly sales,
              and order performance.
            </p>
          </div>
        </Link>

        <Link to="/customers" style={{ textDecoration: "none" }}>
          <div className="card quick-card">
            <h2>Customer Analytics</h2>
            <p>
              Analyze customer reviews,
              ratings and sentiment.
            </p>
          </div>
        </Link>

        <Link to="/sellers" style={{ textDecoration: "none" }}>
          <div className="card quick-card">
            <h2>Seller Analytics</h2>
            <p>
              Track seller performance
              and revenue contribution.
            </p>
          </div>
        </Link>
      </section>

      <section className="card project-section">
        <h2>Project Highlights</h2>

        <p>Revenue Analytics Dashboard</p>
        <p>Customer Review Analysis</p>
        <p>Seller Performance Insights</p>
        <p>Interactive React Visualizations</p>
        <p>PostgreSQL Data Warehouse</p>
      </section>

      <section className="card project-section">
        <h2>Technology Stack</h2>

        <p>Python</p>
        <p>PostgreSQL</p>
        <p>Power BI</p>
        <p>React</p>
        <p>Recharts</p>
      </section>

      <footer className="footer">
        <p>
          E-Commerce Analytics Platform • Built with React, Python,
          PostgreSQL and Power BI
        </p>
      </footer>
    </>
  );
}

export default Home;