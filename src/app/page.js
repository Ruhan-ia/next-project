import Banner from "./Component/Banner/Banner";
import OurPolicy from "./Component/OurPolicy/OurPolicy";
import Testimonial from "./Component/Testimonial/Testimonial";
import Cards from "./Component/TotalCard/Cards/Cards";


export default function Home() {
  return (
      <main className="bg-gradient-to-r from-[#c8bdba] to-[#a4929b] w-full min-h-screen mx-auto grid place-items-center">
        <div>
          <Banner></Banner>
          <Cards></Cards>
          <OurPolicy></OurPolicy>
          <Testimonial></Testimonial>


        </div>
      </main>
     
  );
}
