from sqlalchemy import create_engine
import pandas as pd
password="password"
engine=create_engine(f"postgresql+psycopg2://postgres:{password}@localhost:5432/ecommerce_analytics")
query="""SELECT s.seller_id,s.seller_state,ROUND(SUM(oi.price),2) AS revenue
    FROM sellers s
    JOIN order_items oi
        ON s.seller_id=oi.seller_id
    GROUP BY s.seller_id,s.seller_state
    ORDER BY revenue DESC"""
df=pd.read_sql(query,engine)
df.to_csv("data/processed/seller_analysis.csv",index=False)
print(df.head())
print("\nRows: ",len(df))