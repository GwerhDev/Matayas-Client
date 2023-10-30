import { useEffect } from "react";
import { Products } from "../components/Products/Products";
import { useDispatch } from "react-redux";
import { getProducts, resetProductDetails } from "../../middlewares/redux/actions/products";
import { Slider } from "../components/Slider/Slider";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(()=> {
    dispatch(resetProductDetails());
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <div className="home-container">
      <Slider />
      <div className="page-container">
        <Products />
      </div>
    </div>
  )
}

export default Home;