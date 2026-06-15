from sqlalchemy import create_engine
import pandas as pd
password="password"
engine=create_engine(f"postgresql+psycopg2://postgres:{password}@localhost:5432/ecommerce_analytics")
query="""SELECT COUNT(DISTINCT seller_id) AS total_Sellers,
       ROUND(SUM(revenue)/COUNT(DISTINCT seller_id),2) AS avg_revenue_per_seller
       FROM (SELECT s.seller_id,SUM(oi.price) AS revenue
            FROM sellers s
            JOIN order_items oi
                ON s.seller_id=oi.seller_id
            GROUP BY s.seller_id) seller_revenue"""
df=pd.read_sql(query,engine)
df.to_csv("data/processed/seller_kpis.csv",index=False)
print(df)