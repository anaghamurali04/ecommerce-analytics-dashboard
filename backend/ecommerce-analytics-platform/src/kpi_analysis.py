from sqlalchemy import create_engine
import pandas as pd
password="password"
engine=create_engine(f"postgresql+psycopg2://postgres:{password}@localhost:5432/ecommerce_analytics")
revenue_query="""SELECT ROUND(SUM(payment_value),2) AS total_revenue
FROM payments"""
orders_query="""SELECT COUNT(DISTINCT order_id) AS total_orders
FROM orders"""
aov_query="""SELECT ROUND(SUM(payment_value)/COUNT(DISTINCT order_id),2)
AS average_order_value FROM payments"""
revenue=pd.read_sql(revenue_query,engine)
orders=pd.read_sql(orders_query,engine)
aov=pd.read_sql(aov_query,engine)
print("\n===== BUSINESS KPIs =====\n")
print("Total Revenue:")
print(revenue)
print("\nTotal Orders: ")
print(orders)
print("\nAverage Order Value: ")
print(aov)
