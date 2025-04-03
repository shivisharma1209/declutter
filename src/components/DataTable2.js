export default function DataTable({ data }) {
  const columns = [
    { Header: "SKU Name", accessor: "col1" },
    { Header: "Availablity", subHeaders: [{ Header: "Sales", accessor: "col2" }, { Header: "Out of Stock", accessor: "col3" }, { Header: "Total Inventory", accessor: "col4" }] },
    { Header: "Visibility", subHeaders: [, { Header: "Avg Rank", accessor: "col5" }, { Header: "Est. Traffic", accessor: "col6" }, { Header: "Est. Impressions", accessor: "col7" }, { Header: "Cli", accessor: "col8" }] }
  ];

  // Flatten columns for the second header row
  const flattenedColumns = columns.flatMap(col => 
    col.subHeaders ? col.subHeaders : [col]
  );

  return (
    <div className="overflow-x-auto bg-white shadow-md rounded-md mt-6">
      <table className="w-full border-collapse">
        <thead className="bg-white">
          <tr>
            {columns.map((column, index) => (
              <th 
                key={index} 
                colSpan={column.subHeaders ? column.subHeaders.length : 1}
                rowSpan={column.accessor === "col1" ? 2 : 1}
                className={`p-3 text-center text-gray-700 border-b border-gray-200 ${
                  column.accessor === "col1" ? "align-middle" : ""
                }`}
              >
                {column.Header}
              </th>
            ))}
          </tr>
          <tr>
            {flattenedColumns.map((column, index) => (
              column.accessor !== "col1" ? (
                <th 
                  key={index}
                  className="p-3 text-center text-gray-700 border-b border-gray-200"
                >
                  {column.Header}
                </th>
              ) : null
            ))}
          </tr>
        </thead>

        {/* Table Body */}
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex} className="border-b hover:bg-gray-50">
              {flattenedColumns.map((column, index) => (
                <td key={index} className="p-3 text-gray-600">
                  {row[column.accessor]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// Example data
const data = [
  { col1: "Row 1", col2: "Data 1", col3: "Data 2", col4: "Data 3", col5: "Data 4", col6: "Data 5", col7: "Data 6", col8: "Data 7" },
  { col1: "Row 2", col2: "Data 8", col3: "Data 9", col4: "Data 10", col5: "Data 11", col6: "Data 12", col7: "Data 13", col8: "Data 14" },
  { col1: "Row 3", col2: "Data 15", col3: "Data 16", col4: "Data 17", col5: "Data 18", col6: "Data 19", col7: "Data 20", col8: "Data 21" },
  { col1: "Row 4", col2: "Data 22", col3: "Data 23", col4: "Data 24", col5: "Data 25", col6: "Data 26", col7: "Data 27", col8: "Data 28" },
];
