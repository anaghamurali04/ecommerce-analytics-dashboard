from sqlalchemy import create_engine
import pandas as pd
password="password"
engine=create_engine(f"postgresql+psycopg2://postgres:{password}@localhost:5432/ecommerce_analytics")
query="""SELECT DATE_TRUNC('month',o.order_purchase_timestamp) AS month,
        ROUND(SUM(p.payment_value),2) AS revenue,
        COUNT(DISTINCT o.order_id) AS total_orders
    FROM orders o
    JOIN payments p
        ON o.order_id=p.order_id
    GROUP BY month
    ORDER BY month"""
df=pd.read_sql(query,engine)
highest_revenue=df.loc[df["revenue"].idxmax()]
highest_orders=df.loc[df["total_orders"].idxmax()]
kpi_df=pd.DataFrame({"highest_revenue_month":[highest_revenue["month"]],
                     "highest_revenue_value":[highest_revenue["revenue"]],
                     "highest_orders_month":[highest_orders["month"]],
                     "highest_orders_value":[highest_orders["total_orders"]]})
kpi_df.to_csv("data/processed/monthly_kpis.csv",index=False)
print(kpi_df)