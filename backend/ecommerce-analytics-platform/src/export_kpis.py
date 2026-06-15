from sqlalchemy import create_engine
import pandas as pd
password="password"
engine=create_engine(f"postgresql+psycopg2://postgres:{password}@localhost:5432/ecommerce_analytics")
query="""SELECT ROUND(SUM(payment_value),2) AS total_revenue,
       COUNT(DISTINCT order_id) AS total_orders,
       ROUND(SUM(payment_value)/COUNT(DISTINCT order_id),2) AS average_order_value
       FROM payments"""
kpis=pd.read_sql(query,engine)
kpis.to_csv("data/kpi_summary.csv",index=False)
print("KPI file created successfully!")
print(kpis)