import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { shortenKeyNames } from './salescard';

export function capitalizeFirstLetter(string) {
    const s = string?.replaceAll("_"," ")
      return s.charAt(0).toUpperCase() + s.slice(1).toLowerCase();
    }

export default function DataTable({data, title}) {
    const [sampleData, setfirst] = useState([]);
    const [columns, setcolumn] = useState([]);
    const [tableTitle, settitle] = useState(title);
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
            })
            .catch((error) => {
                console.log(error);
            });
    }, [data]);
    return (
        <div className="rounded-md border border-[#F1F1F1] shadow-[0px_1px_0px_0px_rgba(0,0,0,0.12)]">
            <div className="font-bold p-2 text-lg">
                {tableTitle}
                <button className="rounded-xl text-black bg-white flex float-right p-1">
                        <div className="bg-green-600 hover:bg-green-800 rounded-md text-white p-1">Filters</div>
                    </button>
            </div>
            <table className="w-full border-collapse">
                <thead className="bg-gray-100">
                    <tr>
                        {columns.map((col, index) => (
                            <th key={index} className="p-3 text-left border border-gray-100 text-gray-700 whitespace-nowrap">
                                {capitalizeFirstLetter(col)}
                            </th>
                        ))}
                    </tr>
                </thead>

                {/* Table Body */}
                <tbody>
                    {sampleData.slice(0,4).map((row, rowIndex) => (
                        <tr key={rowIndex} className="border border-gray-100 hover:bg-gray-50">
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

