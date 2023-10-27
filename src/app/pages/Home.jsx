import { useEffect } from "react";
import { Products } from "../components/Products/Products";
import { useDispatch } from "react-redux";
import { getProducts, resetProductDetails } from "../../middlewares/redux/actions/products";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(()=> {
    dispatch(resetProductDetails());
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <div className="page-container">
      <Products />
    </div>
  )
}

export default Home;