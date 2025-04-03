import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { shortenKeyNames } from './salescard';

export function capitalizeFirstLetter(string) {
    const s = string?.replaceAll("_"," ")
      return s.charAt(0).toUpperCase() + s.slice(1).toLowerCase();
    }

export default function DataTable({ data }) {
    const [sampleData, setfirst] = useState([]);
    const [columns, setcolumn] = useState([]);
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
                const val = shortenKeyNames(response.data?.results[0]?.data);
                setfirst(val);
                setcolumn(Object.keys(val[0]));

                // console.log("response.data");
                console.log(JSON.stringify(response.data));
            })
            .catch((error) => {
                console.log(error);
            });
    }, [data]);
    console.log("columns");
    console.log(columns);
    console.log("sampleData");
    console.log(sampleData);
    return (
        <div className="rounded-md border border-[#F1F1F1] shadow-[0px_1px_0px_0px_rgba(0,0,0,0.12)]">
            {/* msndjs */}
            <table className="w-full border-collapse">
                <thead className="bg-gray-100">
                    <tr>
                        {columns.map((col, index) => (
                            <th key={index} className="p-3 text-left text-gray-700 border-b whitespace-nowrap">
                                {capitalizeFirstLetter(col)}
                            </th>
                        ))}
                    </tr>
                </thead>

                {/* Table Body */}
                <tbody>
                    {sampleData.slice(0,4).map((row, rowIndex) => (
                        <tr key={rowIndex} className="border-b hover:bg-gray-50">
                                {columns.map((col, index) => (
                                    <td key={index} className="p-3 text-gray-600">
                                        {row[col]}
                                    </td>
                                ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

