function About() {
    return (
        <div className="page-container">
            <h1>About This Project</h1>
            <div className="card">
                <h2>E-Commerce Analytics Platform</h2>
                <p>
                    This project analyzes e-commerce sales, customer reviews, and seller performance using data engineering, business intelligence and web technologies.
                </p>
            </div>
            <div className="stats">
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
            </div>
            <div className="about-grid">
                <div className="card">
                    <h2>Tech Stack</h2>
                    <p>🐍 Python</p>
                    <p>🗄 PostgreSQL</p>
                    <p>📊 Power BI</p>
                    <p>⚛ React</p>
                    <p>📈 Recharts</p>
                </div>
                <div className="card">
                    <h2>Key Features</h2>
                    <p>✅ Revenue Analytics Dashboard</p>
                    <p>✅ Customer Review Analysis</p>
                    <p>✅ Seller Performance Tracking</p>
                    <p>✅ Interactive Visualizations</p>
                    <p>✅ Real-Time CSV Data Loading</p>
                </div>
            </div>
        </div>
    );
}
export default About;