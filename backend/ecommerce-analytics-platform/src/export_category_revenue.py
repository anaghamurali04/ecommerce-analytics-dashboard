from sqlalchemy import create_engine
import pandas as pd
password="password"
engine=create_engine(f"postgresql+psycopg2://postgres:{password}@localhost:5432/ecommerce_analytics")
query="""SELECT ct.product_category_name_english,
         ROUND(SUM(oi.price),2) AS revenue
    FROM products p
    JOIN order_items oi
        ON p.product_id=oi.product_id
    JOIN category_translation ct
        ON p.product_category_name=ct.product_category_name
    GROUP BY ct.product_category_name_english
    ORDER BY revenue DESC"""
df=pd.read_sql(query,engine)
df.to_csv("data/processed/category_revenue.csv",index=False)
print(df.head())
print("\nRows: ",len(df))
print("\ncategory_revenue.csv created successfully!")
