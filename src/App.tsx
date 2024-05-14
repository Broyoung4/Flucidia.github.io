import "./App.css";
import Nav from "./components/Nav";
import Header from "./sections/Header";
import About from "./sections/About";
import Booking from "./sections/Booking";
import Gallery from "./sections/Gallery";
import Team from "./sections/Team";
import Footer from "./sections/Footer";



export default function App() {
  return (
    <div className="relative">
      <Nav />
      <section className='padding'>
        <Header />
      </section>
      <section className=''>
        <About />
      </section>
      <section className="padding bg-[url('./assets/Dredds1.png')] bg-no-repeat md:bg-top-left bg-cover">
        <Booking />
      </section>
      <section className='padding'>
        <Gallery />
      </section>
      <section className='padding-x py-2'>
        <Team />
      </section>
      <section className='padding'>
        <Footer />
      </section>
      
    </div>
  );
}
