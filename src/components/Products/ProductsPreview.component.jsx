import { Link } from "react-router-dom";

const ProductsPreview = ({ product }) => {
	const { title, linkTo } = product;
	return (
		<div className="">
			<h3 className="text-center">
				<Link to={linkTo}>{title} </Link>
			</h3>
			<div className="">{product.component}</div>
		</div>
	);
};

export default ProductsPreview;
