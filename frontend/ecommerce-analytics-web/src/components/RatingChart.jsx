import { useEffect, useState} from "react";
import Papa from "papaparse";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    CartesianGrid,
    ResponsiveContainer
} from "recharts";

function RatingChart() {
    const [data, setData]=useState([]);
    useEffect(()=>{
        Papa.parse("/review_analysis.csv", {
            download: true,
            header: true,
            skipEmptyLines: true,
            complete: (result)=> {
                const formatted=result.data.filter((row)=> row.review_score && row.total_reviews).map((row)=> ({
                    review_score: Number(row.review_score),
                    total_reviews: Number(row.total_reviews)
                }));
                setData(formatted);
            }
        });
    }, []);
    return (
        <ResponsiveContainer width="100%" height={350}>
            <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="review_score" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="total_reviews" fill="#38bdf8" />
            </BarChart>
        </ResponsiveContainer>
    );
}
export default RatingChart;