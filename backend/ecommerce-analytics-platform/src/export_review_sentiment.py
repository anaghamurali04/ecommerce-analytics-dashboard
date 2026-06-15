from sqlalchemy import create_engine
import pandas as pd
password="password"
engine=create_engine(f"postgresql+psycopg2://postgres:{password}@localhost:5432/ecommerce_analytics")
query="""SELECT ROUND(100.0*SUM(CASE WHEN review_score>=4 THEN 1 ELSE 0 END)/COUNT(*),2) AS positive_review_percentage
       FROM reviews"""
df=pd.read_sql(query,engine)
df.to_csv("data/processed/review_sentiment.csv",index=False)
print(df)