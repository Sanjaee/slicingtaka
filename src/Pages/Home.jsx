import { Navbars } from "../Components/Navbars";
import { Products } from "../Components/Products";
import SliderTop from "../Components/SliderTop";

export const Home = () => {
  return (
    <div className="">
      <SliderTop />
      <Navbars />
      <Products />
    </div>
  );
};
