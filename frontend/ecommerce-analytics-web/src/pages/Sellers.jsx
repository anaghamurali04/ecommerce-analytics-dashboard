import SellerChart from "../components/SellerChart";
function Sellers() {
    return (
        <div className="page-container">
            <h1>Seller Analytics</h1>
            <div className="stats">
                <div className="card">
                    <h3>3095</h3>
                    <p>Total Sellers</p>
                </div>
                <div className="card">
                    <h3>4391.48</h3>
                    <p>Average Revenue Per Seller</p>
                </div>
            </div>
            <div className="card chart-card">
                <h2>Top 10 Sellers by Revenue</h2>
                <SellerChart />
            </div>
        </div>
    );
}

export default Sellers;