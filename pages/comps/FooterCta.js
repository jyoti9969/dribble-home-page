
const FooterCta=() =>{
  return (
    <section className="footer-cta sm:py-8 md:py-6 bg-[#fddb73] text-center lg:px-32  sm:px-32 "  >
    <div className="footer-cta__content flex flex-col items-center max-w-[1200px] mx-auto px-6 overflow-hidden">
      <h2 className="hero__heading font-serif lg:px-24 md:px-16  lg:text-4xl md:text-3xl  tracking-tight max-w-[340px] mx-auto mt-10 mb-6 md:max-w-[580px]">
        Find your next designer today
      </h2>
  
      <div className="footer-cta__copy   text-[12px] text-center">
        The world’s leading brands use Dribbble to hire creative talent. Browse millions of top-rated portfolios to find your perfect creative match.
      </div>
  
      <div className="footer-cta__actions py-2">
        <a className="btn2 inline-flex items-center mx-2 justify-center min-w-[36px] min-h-[30px] px-3 text-[8px] font-semibold my-3  bg-[#0d0c22] text-white rounded-full border border-transparent transition-colors duration-150 hover:bg-[#0d0c22]"  href="/">Get started now</a>
        <a href="/hiring" className="btn2 inline-flex items-center justify-center min-w-[36px] min-h-[30px] px-3 text-[8px] font-semibold my-3  bg-white text-black rounded-full border border-transparent transition-colors duration-150 hover:bg-[#0d0c22]" >Learn about hiring</a>
      </div>
  
      <div className="footer-cta__copy text-[12px] pb-2 ">
        Are you a designer?
        <a  href="/signup/" className="underline px-1">Join Dribbble</a>
      </div>
    </div>
  </section>
  )
}

export default FooterCta
