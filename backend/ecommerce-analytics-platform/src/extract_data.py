from sqlalchemy import create_engine
import pandas as pd
password="password"
engine=create_engine(f"postgresql+psycopg2://postgres:{password}@localhost:5432/ecommerce_analytics")
query="""SELECT
    o.order_id,o.order_purchase_timestamp,
    c.customer_state,
    p.payment_value
FROM orders o
JOIN customers c
    ON o.customer_id = c.customer_id
JOIN payments p
    ON o.order_id=p.order_id;"""
df=pd.read_sql(query,engine)
print(df.head())
print("\nRows: ",len(df))