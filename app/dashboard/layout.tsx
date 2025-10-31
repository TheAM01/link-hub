import "../globals.css";
// import Sidebar from "@/components/layout/Sidebar";

export default function DashboardLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={` antialiased flex`}
            >
                {/* <Sidebar/> */}
                <div className="flex flex-1">
                    {children}
                </div>
            </body>
        </html>
    );
}
// ${geistSans.variable} ${geistMono.variable}