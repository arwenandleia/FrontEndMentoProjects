import { useParams } from "react-router-dom";
import { productsList } from "../data/products/productsList";

const ProductSpecific = () => {
	const { componentName } = useParams();

	const productInUse = productsList.find(
		(product) => product.linkTo === componentName
	);

	return (
		<div className="">
			<h2 className="text-4xl w-full text-center">{productInUse.title} </h2>
			<div className="">{productInUse.component}</div>
		</div>
	);
};

export default ProductSpecific;
