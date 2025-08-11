import Footer from "@/app/components/Footer";
import Navigation from "@/app/components/Navigation";



export default function StoreLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen flex flex-col">
        <Navigation />
        <div className="flex-grow">

            {children}  
        </div>
        <Footer />
    </div>
  );
}