from sqlalchemy import create_engine
import pandas as pd
password="password"
engine=create_engine(f"postgresql+psycopg2://postgres:{password}@localhost:5432/ecommerce_analytics")
query="""SELECT review_score,COUNT(*) AS total_reviews
    FROM reviews
    GROUP BY review_Score
    ORDER BY review_score"""
df=pd.read_sql(query,engine)
df.to_csv("data/processed/review_analysis.csv",index=False)
print(df)
print("\nRows:",len(df))
print("\nreview_analysis.csv created successfully!")