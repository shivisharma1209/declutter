import tableStruct from './tableStruct.json';
import DashboardLayout from '../components/DashboardLayout';
import SalesCard from '../components/salescard';
import DataTable from '../components/DataTable';
import "../app/globals.css";

export default function Home() {
    return (
        <DashboardLayout>
            <div className="grid grid-cols-3 gap-6 text-black">
                {
                    tableStruct.cards.map((card, index) => {
                        switch (card.visualizationType) {
                            case 'linechart':
                                return(
                                    <SalesCard
                                        key={index}
                                        title={card.title}
                                        id={card.id}
                                        description={card.description}
                                        data={JSON.parse(card.query)} // Parse query if it's a string
                                    />
                                );
                                break;
                            case 'semipiechart':
                                return(
                                    <SalesCard
                                        key={index}
                                        title={card.title}
                                        id={card.id}
                                        description={card.description}
                                        data={JSON.parse(card.query)} // Parse query if it's a string
                                    />
                                );
                                break;

                            case 'table':
                                return(
                                    <div key={index} className="col-span-3 w-full overflow-x-auto">
                                        <DataTable
                                            title={card.title}
                                            id={card.id}
                                            description={card.description}
                                            data={JSON.parse(card.query)} // Parse query if it's a string
                                        />
                                    </div>
                                );
                                break;

                            default:
                                return(
                                    <div key={index}>
                                        <h3>{card.title}</h3>
                                        <p>Unsupported visualization type: {card.visualizationType}</p>
                                    </div>
                                );
                                break;
                        }
                })}
            </div>
        </DashboardLayout>
    );
}


// import DashboardLayout from "../components/DashboardLayout";
// import SalesCard from "../components/salescard";
// import DataTable from "../components/DataTable";
// import "../app/globals.css";

// const salesData = [
//   { day: "10", value: 4.5 },
//   { day: "11", value: 5.0 },
//   { day: "12", value: 6.2 },
// ];

// const tableColumns = [
//   { Header: "SKU Name", accessor: "sku" },
//   { Header: "Sales", accessor: "sales" },
//   { Header: "Out of Stock", accessor: "stock" },
// ];


// export default function Home() {
//   return (
//     <DashboardLayout>
//       <div className="grid grid-cols-3 gap-6 text-black">
//         <SalesCard title="Sales (MRP)" id = "Sales" value="125.49" percentage={2.4} data={salesData} />
//         <SalesCard title="Total Quantity Sold" value="125.49" percentage={2.4} data={salesData} />
//         <SalesCard title="Top Cities" value="125.49" percentage={2.4} data={salesData} />
//       </div>
//       <h3 className="mt-8 text-xl font-semibold text-black">SKU Level Data</h3>
//       <DataTable columns={tableColumns} data={tableData} />
//     </DashboardLayout>
//   );
// }

