import RevenueChart from "../components/RevenueChart";
import OrdersChart from "../components/OrdersChart";
function Revenue() {
  return (
    <div className="page-container">

      <h1>Revenue Analytics</h1>

      <div className="stats">

        <div className="card">
          <h3>16.01M</h3>
          <p>Total Revenue</p>
        </div>

        <div className="card">
          <h3>Nov 2017</h3>
          <p>Highest Revenue Month</p>
        </div>

        <div className="card">
            <h3>Nov 2017</h3>
            <p>Highest Orders Month</p>
        </div>

      </div>

      <div className="card chart-card">
        <h2>Monthly Revenue Trend</h2>
        <RevenueChart />
      </div>
      <div className="card chart-card">
        <h2>Monthly Orders Trend</h2>
        <OrdersChart />
      </div>

      <div className="card">
        <h2>Revenue Insights</h2>

        <p>Peak Month: November 2017</p>
        <p>Total Revenue: 16.01M</p>
        <p>Total Orders: 99,441</p>
      </div>

    </div>
  );
}

export default Revenue;