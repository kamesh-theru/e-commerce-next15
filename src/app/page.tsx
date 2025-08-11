import Link from "next/link";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";

export default function Home() {
  return (
   <div className="min-h-screen flex flex-col">
    <Navigation />
    <div className="flex-grow">
      <Link href="/products">go to Products</Link>  
    </div>
    <Footer />
   </div>
  );
}
