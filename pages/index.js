
import Image from "next/image";
import FooterCta from "./comps/FooterCta";
import Footer from "./comps/Footer";
import DesignCard from "./comps/DesignCard";
import Carousel from "./comps/Carousel";
import CardCarousel from "./comps/CardCarousel";
import Navbar from "./comps/Navbar";
import Head from "next/head";
export default function Home() {
  return (
    <>
    <Head>
        <title>Dribbble</title>
      </Head>
    <Navbar />
    <section className="hero pt-10 pb-5  bg-[#f8f7f4] text-center" >
    <div className="home-container flex flex-col items-center max-w-[1200px] mx-auto px-6 overflow-hidden">
      <div className="home-badge relative inline-flex items-center min-h-[20px]  px-4 bg-yellow-300 text-gray-800 rounded-full  text-[10px] font-semibold tracking-tight">
        <a  href="/signup">Over 3 million ready-to-work creatives!</a>
      </div>
      <h1 className="hero__heading font-serif   text-5xl leading-[56px] tracking-tight max-w-[340px] mx-auto mt-5 mb-6 md:max-w-[580px]">The world’s destination for design</h1>
      <div className="home-type-body-large text-xs  ">Get inspired by the work of millions of top-rated designers &amp; agencies around the world.</div>
      <a className="btn2 inline-flex items-center justify-center min-w-[36px] min-h-[30px] px-3 text-[8px] font-semibold my-3  bg-[#0d0c22] text-white rounded-full border border-transparent transition-colors duration-150 hover:bg-[#0d0c22]" href="/" >Get started</a>
    </div>
  
  </section>
  <Carousel />
  <DesignCard />
 <FooterCta />
 <CardCarousel />
 <Footer />
</>
  );
}
