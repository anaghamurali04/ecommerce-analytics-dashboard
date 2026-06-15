from sqlalchemy import create_engine
import pandas as pd
password="password"
engine=create_engine(f"postgresql+psycopg2://postgres:{password}@localhost:5432/ecommerce_analytics")
query="""SELECT ROUND(AVG(review_score),2) AS average_review_score,
       COUNT(*) AS total_reviews
    FROM reviews"""
df=pd.read_sql(query,engine)
df.to_csv("data/processed/review_kpis.csv",index=False)
print(df)