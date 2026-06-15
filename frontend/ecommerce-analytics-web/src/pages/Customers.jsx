import RatingChart from "../components/RatingChart";
function Customers() {
    return (
        <div className="page-container">
            <h1>Customer Analytics</h1>
            <div className="stats">
                <div className="card">
                    <h3>4.09</h3>
                    <p>Average Rating</p>
                </div>
                <div className="card">
                    <h3>99,224</h3>
                    <p>Total Reviews</p>
                </div>
                <div className="card">
                    <h3>77.07%</h3>
                    <p>Positive Reviews</p>
                </div>
            </div>
            <div className="card chart-card">
                <h2>Review Score Distribution</h2>
                <RatingChart />
            </div>
        </div>
    );
}

export default Customers;