import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, AreaChart, Area } from "recharts";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

export function shortenKeyNames(obj) {
    if (typeof obj !== 'object' || obj === null) {
        return obj;
    }

    if (Array.isArray(obj)) {
        return obj.map(item => shortenKeyNames(item));
    }

    const newObj = {};
    Object.keys(obj).forEach(key => {
        const newKey = key.includes('.') ? key.split('.').pop() : key; // Keep only the part after the last dot
        newObj[newKey] = shortenKeyNames(obj[key]); // Recursively apply to the value
    });
    return newObj;
}

export default function SalesCard({ title, value, percentage, data }) {

    const [sampleData, setfirst] = useState(null);

    useEffect(() => {
        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: 'https://amaranth-muskox.aws-us-east-1.cubecloudapp.dev/dev-mode/feat/frontend-hiring-task/cubejs-api/v1/load',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJicmFuZElkIjoiNDkiLCJleHAiOjE3NDM0OTYyMTIsImlzcyI6ImN1YmVjbG91ZCJ9.luqfkt0CQW_B01j5oAvl_8hicbFzPmyLXfvEZYJbej4'
            },
            data: JSON.stringify({
                "query": data[0],
                "queryType": "multi"
            })
        };

        axios.request(config)
            .then((response) => {
                setfirst(shortenKeyNames(response.data?.results[0]?.data));
                // console.log("response.data");
                // console.log(JSON.stringify(response.data));
            })
            .catch((error) => {
                console.log(error);
            });
    }, [data]);

    return (
        <div className="border border-[#F1F1F1] shadow-[0px_1px_0px_0px_rgba(0,0,0,0.12)] rounded-lg bg-white w-full h-full group">
            <div className="flex items-center px-3 py-2 border-b border-[#F1F1F1]">
                <div className="text-sm font-semibold text-[#515153]">{title}</div>
                {/* <div className="flex items-center gap-2 mt-2">
                    <h2 className="text-2xl font-bold">{value}</h2>
                    <span className={`text-sm ${percentage > 0 ? "text-green-500" : "text-red-500"}`}>
                        {percentage > 0 ? `↑ ${percentage}%` : `↓ ${percentage}%`}
                    </span>
                </div> */}
            </div>
            <ResponsiveContainer width="100%" height={170} >
                <AreaChart
                    data={sampleData}
                    margin={{
                        top: 10,
                        right: 16,
                        left: -5,
                        bottom: 0
                    }}
                >
                    {/* <LineChart data={sampleData}> */}
                    {/* <XAxis dataKey="day" />
                    <YAxis datakey="sales_mrp_sum" /> */}
                    <XAxis
                        // tickFormatter={tickFormatter}
                        dataKey="day"
                        axisLine={false}
                        tickLine={false}
                        tick={{ fill: "#6B7583", fontSize: 10, fontWeight: 400, dy: 8, dx: -10 }}
                        minTickGap={20}
                        interval="equidistantPreserveStart"
                    />
                    <YAxis
                        datakey="sales_mrp_sum"
                        axisLine={false}
                        tickLine={false}
                        tick={{ fill: "#6B7583", fontSize: 10, fontWeight: 400 }}
                    />
                    <CartesianGrid strokeWidth={1} stroke="#D1D3DA8F" />
                    <Tooltip />
                    {/* <Line type="monotone" dataKey="sales_mrp_sum" stroke="#4A90E2" strokeWidth={2} /> */}
                    <Area
                        type="bump"
                        dataKey={"sales_mrp_sum"}
                        stroke={"#2EB76F"}
                        fillOpacity={1}
                        // strokeDasharray={index === 0 ? null : "2 2"}
                        fill={`url(#green)`}
                    // activeDot={<CustomActiveDot />}
                    />
                    <defs>
                        <linearGradient id={"green"} x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor={"#2EB76F"} stopOpacity={0.15} />
                            <stop offset="95%" stopColor={"#2EB76F"} stopOpacity={0} />
                        </linearGradient>
                    </defs>
                </AreaChart>
                {/* </LineChart> */}
            </ResponsiveContainer>
        </div>
    );
}
