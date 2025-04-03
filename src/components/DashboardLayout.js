import Sidebar from "./sidebar";
import TopBar from "./topbar";

export default function DashboardLayout({ children }) {
    return (
        <div className="flex h-screen w-screen overflow-hidden">
            <Sidebar />
            <div className="w-full h-screen">
                <TopBar />
                <div className="p-6 overflow-auto h-[calc(100vh-70px)]">{children}</div>
            </div>
        </div>
    );
}
