import { Routes, Route } from "react-router-dom";
import ProductsHome from "../../pages/ProductsHome.page";
import ProductSpecific from "../../pages/ProductSpecific.page";

const Products = () => {
	return (
		<Routes>
			<Route path="" element={<ProductsHome />} />
			<Route path=":componentName" element={<ProductSpecific />} />
		</Routes>
	);
};

export default Products;
