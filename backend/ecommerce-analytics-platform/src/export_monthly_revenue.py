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
df.to_csv("data/processed/monthly_revenue.csv",index=False)
print(df.head())
print("\nRows: ",len(df))
print("\nmonthly_revenue.csv created successfully!")