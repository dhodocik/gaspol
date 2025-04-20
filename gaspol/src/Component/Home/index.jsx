import React from "react";
import "./style.css";
import { Link, Element } from "react-scroll";
import logo from "../../assets/Logo/Logo-BEM.png";

const Home = () => {
  return (
    <Element name="home">
      <section className="pt-72 home">
        <div className="lg:flex">
          <div className="lg:ml-20 mx-6 self-center">
            <h1 className="text lg:text-5xl text-4xl font-medium">
              Sampaikan Pelaporanmu
            </h1>
            <h1 className="text mt-2 lg:text-5xl text-4xl font-medium">
              Bersama Gaspol
            </h1>
            <p className="max-w-[36rem] md:text-base text-sm mt-8">
              Jangan biarkan keluhan dan aspirasi Anda hanya menjadi suara tanpa
              arah—laporkan melalui GASPOL, sebuah forum resmi yang memastikan
              setiap masukan didengar dan ditindaklanjuti demi terciptanya
              lingkungan yang lebih baik bagi Fasilkom UNSRI.
            </p>
            <Link
              to="laporan"
              smooth={true}
              duration={500}
              className="inline-block mt-4 rounded-sm cursor-pointer  border-angular duration-300 ease-in-out  px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-black  "
            >
              Laporkan!
            </Link>{" "}
          </div>
          <div className="self-center lg:ml-36 lg:mt-0 mt-12 mx-auto">
            <img src={logo} className="w-96 mx-auto" />
          </div>
        </div>
      </section>
    </Element>
  );
};

export default Home;
