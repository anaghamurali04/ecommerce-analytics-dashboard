from sqlalchemy import create_engine
import pandas as pd
password="password"
engine=create_engine(f"postgresql+psycopg2://postgres:{password}@localhost:5432/ecommerce_analytics")
query="""SELECT customer_state,COUNT(*) AS total_customers
    FROM customers
    GROUP BY customer_state
    ORDER BY total_customers DESC"""
df=pd.read_sql(query,engine)
df.to_csv("data/processed/customer_states.csv",index=False)
print(df.head())
print("\nRows: ",len(df))
print("\ncustomer_states.csv created successfully!")