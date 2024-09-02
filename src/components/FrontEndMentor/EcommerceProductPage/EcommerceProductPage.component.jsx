import { useState } from "react";
import "./EcommerceProductPage.style.css";

//import images
import imgProd1_thumb from "../../../assets/FrontEndMentor/EcommerceProductPage/image-product-1-thumbnail.jpg";
import imgProd2_thumb from "../../../assets/FrontEndMentor/EcommerceProductPage/image-product-2-thumbnail.jpg";
import imgProd3_thumb from "../../../assets/FrontEndMentor/EcommerceProductPage/image-product-3-thumbnail.jpg";
import imgProd4_thumb from "../../../assets/FrontEndMentor/EcommerceProductPage/image-product-4-thumbnail.jpg";
import imgProd1_detail from "../../../assets/FrontEndMentor/EcommerceProductPage/image-product-1.jpg";
import imgProd2_detail from "../../../assets/FrontEndMentor/EcommerceProductPage/image-product-2.jpg";
import imgProd3_detail from "../../../assets/FrontEndMentor/EcommerceProductPage/image-product-3.jpg";
import imgProd4_detail from "../../../assets/FrontEndMentor/EcommerceProductPage/image-product-4.jpg";

//Import Icons
import IconPlus from "../../../assets/FrontEndMentor/EcommerceProductPage/icon-plus.svg?react";
import IconMinus from "../../../assets/FrontEndMentor/EcommerceProductPage/icon-minus.svg?react";
import IconCart from "../../../assets/FrontEndMentor/EcommerceProductPage/icon-cart.svg?react";
import IconLeft from "../../../assets/FrontEndMentor/EcommerceProductPage/icon-previous.svg?react";
import IconRight from "../../../assets/FrontEndMentor/EcommerceProductPage/icon-next.svg?react";
import IconClose from "../../../assets/FrontEndMentor/EcommerceProductPage/icon-close.svg?react";

//skeleton of custom product
const customProduct = {
	productId: 1,
	companyName: "Sneaker Company",
	productName: "Fall Limited Edition Sneakers",
	productDescription:
		"These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.",
	productPrice: 250.0,
	productDiscount: 50.0,
	productImagesArr: [
		{
			imageNumber: 1,
			imageThumbnail: imgProd1_thumb,
			imageDetailed: imgProd1_detail,
		},
		{
			imageNumber: 2,
			imageThumbnail: imgProd2_thumb,
			imageDetailed: imgProd2_detail,
		},
		{
			imageNumber: 3,
			imageThumbnail: imgProd3_thumb,
			imageDetailed: imgProd3_detail,
		},
		{
			imageNumber: 4,
			imageThumbnail: imgProd4_thumb,
			imageDetailed: imgProd4_detail,
		},
	],
};

// Use break point MD

const EcommerceProductPage = () => {
	//States below
	const [isMenuShown, setIsMenuShown] = useState(false);
	const [isCartOpen, setIsCartOpen] = useState(false);
	const [cartQuantity, setCartQuantity] = useState(0);
	const [itemQuantity, setItemQuantity] = useState(0);
	const [activeImage, setActiveImage] = useState(1);
	const [isLightBoxActive, setIsLightBoxActive] = useState(false);

	//Destructure the custom product that is input
	const {
		productId,
		companyName,
		productName,
		productDescription,
		productPrice,
		productDiscount,
		productImagesArr,
	} = customProduct;

	const actualPrice = (productPrice * (100.0 - productDiscount)) / 100.0;

	// CSS Variables
	const thumbCSS = "rounded-xl";
	const thumbSelectedCSS = "opacity-25 ";
	const selectedImgCss = "rounded-xl";

	const GetMainImage = () => {
		//cycle through images array and use activeImage value to return image
		const imageToDisplay = productImagesArr.find(
			(image) => image.imageNumber === activeImage
		);
		return (
			<img
				src={imageToDisplay.imageDetailed}
				alt="Selected image"
				className={`${selectedImgCss}`}
			/>
		);
	};

	const selectImageFromThumb = (image) => {
		setActiveImage(image.imageNumber);
	};

	const nextImageHandler = () => {
		let nextActiveImage = activeImage + 1;
		if (nextActiveImage > 4) {
			nextActiveImage = 1;
		}
		setActiveImage(nextActiveImage);
	};
	const previousImageHandler = () => {
		let previousActiveImage = activeImage - 1;
		if (previousActiveImage < 1) {
			previousActiveImage = 4;
		}
		setActiveImage(previousActiveImage);
	};

	const openLightboxWindow = () => {
		setIsLightBoxActive(true);
	};

	const closeLightboxWindow = () => {
		setIsLightBoxActive(false);
	};

	const incItemQuantity = () => setItemQuantity(itemQuantity + 1);
	const decItemQuantity = () =>
		itemQuantity > 0 ? setItemQuantity(itemQuantity - 1) : setItemQuantity(0);

	const addToCartHandler = () => {};

	return (
		<div
			className={`entire-page-container ml-10 bg-EcommerceProduct-white p-10 relative`}>
			{isLightBoxActive && (
				<div className="hidden  md:absolute md:inset-0 md:z-20 md:flex md:justify-center p-5 bg-EcommerceProduct-blackOpa bg-opacity-90 pt-10">
					<div className="lightboxhere md:w-1/2 md:h-1/2 grid grid-cols-4 gap-5">
						<div className="col-span-4 relative">
							<GetMainImage />
							<div className="leftarrow absolute inset-y-0 -left-7 flex items-center ">
								<div
									className="bg-EcommerceProduct-white p-5 rounded-full hover:cursor-pointer"
									onClick={previousImageHandler}>
									<IconLeft />
								</div>
							</div>
							<div className="leftarrow absolute inset-y-0 -right-7 flex items-center  ">
								<div
									className="bg-EcommerceProduct-white rounded-full p-5 hover:cursor-pointer"
									onClick={nextImageHandler}>
									<IconRight />
								</div>
							</div>

							<div
								className="absolute -top-6 -right-6 brightness-[3.0] scale-150 hover:cursor-pointer "
								onClick={closeLightboxWindow}>
								<IconClose />
							</div>
						</div>
						{productImagesArr.map((image) => (
							<div
								className={`col-span-1 hover:cursor-pointer ${
									activeImage === image.imageNumber &&
									"border-2 border-EcommerceProduct-orange rounded-xl "
								}`}
								onClick={() => selectImageFromThumb(image)}
								key={image.imageNumber}>
								<img
									src={image.imageThumbnail}
									alt={`Thumbnail ${image.imageNumber}`}
									className={`${thumbCSS} ${
										activeImage === image.imageNumber && thumbSelectedCSS
									}`}
								/>
							</div>
						))}
					</div>
				</div>
			)}

			<div className={`navigation bar`}> navigation bar</div>

			<div
				className={`body-container md:flex md:flex-row md:gap-10 md:items-center `}>
				<div className={`image-display-container md:w-1/2`}>
					<div className="container-for-image hidden md:grid md:grid-cols-4 md:gap-6   ">
						<div
							className="main-image md:col-span-4 hover:cursor-pointer "
							onClick={openLightboxWindow}>
							<GetMainImage />
						</div>
						{productImagesArr.map((image) => (
							<div
								className={`col-span-1 hover:cursor-pointer ${
									activeImage === image.imageNumber &&
									"border-2 border-EcommerceProduct-orange rounded-xl "
								}`}
								onClick={() => selectImageFromThumb(image)}
								key={image.imageNumber}>
								<img
									src={image.imageThumbnail}
									alt={`Thumbnail ${image.imageNumber}`}
									className={`${thumbCSS} ${
										activeImage === image.imageNumber && thumbSelectedCSS
									}`}
								/>
							</div>
						))}
					</div>

					<div className="container-mobile"></div>
				</div>

				<div className={`product-details-container md:w-1/2`}>
					<p className="text-sm text-EcommerceProduct-darkgreyblue kumbh-sans-700 tracking-wider	">
						{companyName.toUpperCase()}
					</p>
					<h1 className="text-EcommerceProduct-verydarkblue text-4xl kumbh-sans-700 mt-3">
						{productName}
					</h1>
					<p className="text-sm kumbh-sans-400 text-EcommerceProduct-darkgreyblue mt-8">
						{productDescription}
					</p>
					<div className="pricing">
						<p className="text-2xl kumbh-sans-700 text-EcommerceProduct-verydarkblue flex gap-x-5 items-center mt-5">
							$ {actualPrice.toFixed(2)}{" "}
							<span className="text-EcommerceProduct-white bg-EcommerceProduct-verydarkblue px-2 text-lg rounded-lg">
								{productDiscount}%
							</span>
						</p>
						<p className="text-sm text-EcommerceProduct-darkgreyblue kumbh-sans-700 mt-3 line-through">
							${productPrice.toFixed(2)}
						</p>
					</div>
					<div className="quantity flex flex-row items-center mt-5 flex-nowrap gap-x-2">
						<div className="flex flex-row items-center bg-EcommerceProduct-lightgreyishblue py-3 rounded-lg">
							<button className="mx-4" onClick={decItemQuantity}>
								<IconMinus />
							</button>
							<span className="mx-4 text-EcommerceProduct-verydarkblue">
								{itemQuantity}
							</span>
							<button className="mx-4" onClick={incItemQuantity}>
								<IconPlus />
							</button>
						</div>
						<button
							type="button"
							className="flex flex-nowrap items-center bg-EcommerceProduct-orange text-EcommerceProduct-verydarkblue kumbh-sans-700 w-full justify-center py-3 rounded-lg gap-x-3">
							<span className="">
								<IconCart />
							</span>
							Add to cart
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default EcommerceProductPage;
