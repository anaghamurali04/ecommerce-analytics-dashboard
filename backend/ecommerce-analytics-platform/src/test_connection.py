print("Script started")
from sqlalchemy import create_engine
import pandas as pd
password="password"
engine=create_engine(f"postgresql+psycopg2://postgres:{password}@localhost:5432/ecommerce_analytics")
query="SELECT COUNT(*) AS total_orders FROM orders;"
df=pd.read_sql(query,engine)
print(df)