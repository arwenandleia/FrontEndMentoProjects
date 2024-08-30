import { Link } from "react-router-dom";
import ProductsPreview from "../components/Products/ProductsPreview.component";
import { productsList } from "../data/products/productsList";

const ProductsHome = () => {
	return (
		<div className="w-full flex flex-col items-stretch">
			<h2 className="text-center m-5">Components I have built</h2>

			<div className="components-container grid grid-cols-1 md:grid-cols-2 gap-6 scale-50 origin-top">
				{productsList.map((product) => (
					<ProductsPreview product={product} key={product.title} />
				))}
			</div>
		</div>
	);
};

export default ProductsHome;
