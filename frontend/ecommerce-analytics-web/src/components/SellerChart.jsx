import {useEffect,useState} from "react";
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
function SellerChart() {
    const [data,setData]=useState([]);
    useEffect(()=> {
        Papa.parse("/seller_analysis.csv", {
            download: true,
            header: true,
            skipEmptyLines: true,
            complete: (result)=> {
                const formatted=result.data.slice(0,10).map((row)=> ({
                    seller: row.seller_id.slice(0,6),
                    revenue: Number(row.revenue)
                }));
                setData(formatted);
            }
        });
    }, []);
    return (
        <ResponsiveContainer width="100%" height={400}>
            <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="seller" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="revenue" fill="#f59e0b" />
            </BarChart>
        </ResponsiveContainer>
    );
}
export default SellerChart;