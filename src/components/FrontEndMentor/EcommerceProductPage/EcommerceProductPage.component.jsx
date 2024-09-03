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
import imageProfile from "../../../assets/FrontEndMentor/EcommerceProductPage/image-avatar.png";

//Import Icons
import IconPlus from "../../../assets/FrontEndMentor/EcommerceProductPage/icon-plus.svg?react";
import IconMinus from "../../../assets/FrontEndMentor/EcommerceProductPage/icon-minus.svg?react";
import IconCart from "../../../assets/FrontEndMentor/EcommerceProductPage/icon-cart.svg?react";
import IconLeft from "../../../assets/FrontEndMentor/EcommerceProductPage/icon-previous.svg?react";
import IconRight from "../../../assets/FrontEndMentor/EcommerceProductPage/icon-next.svg?react";
import IconClose from "../../../assets/FrontEndMentor/EcommerceProductPage/icon-close.svg?react";
import IconMenu from "../../../assets/FrontEndMentor/EcommerceProductPage/icon-menu.svg?react";
import IconDelete from "../../../assets/FrontEndMentor/EcommerceProductPage/icon-delete.svg?react";

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
	const selectedImgCss =
		"md:rounded-xl md:object-contain object-cover h-60 w-full md:h-fit md:w-fit";
	const navLinksCss =
		"hover:border-b-4 hover:border-ThreeColumnPreview-orange hover:cursor-pointer";

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
		if (isCartOpen) {
			setIsCartOpen(false);
		}
		setIsLightBoxActive(true);
	};

	const closeLightboxWindow = () => {
		setIsLightBoxActive(false);
	};

	const toggleCartOpen = () => {
		setIsCartOpen(!isCartOpen);
	};

	const toggleMenuOpen = () => {
		if (isCartOpen) {
			setIsCartOpen(false);
		}
		setIsMenuShown(!isMenuShown);
	};

	const incItemQuantity = () => setItemQuantity(itemQuantity + 1);
	const decItemQuantity = () =>
		itemQuantity > 0 ? setItemQuantity(itemQuantity - 1) : setItemQuantity(0);

	const addToCartHandler = () => {
		const newCartQuantity = cartQuantity + itemQuantity;
		setCartQuantity(newCartQuantity);
		setItemQuantity(0);
	};
	const deleteCartItem = () => {
		setCartQuantity(0);
	};

	return (
		<div
			className={`entire-page-container mx-auto bg-EcommerceProduct-white  md:p-10 relative max-w-6xl`}>
			{isLightBoxActive && (
				<div className="hidden  md:absolute md:inset-0 md:z-20 md:flex md:justify-center p-5 bg-EcommerceProduct-blackOpa bg-opacity-90 pt-10">
					<div className="lightboxhere md:w-1/2 md:h-1/2 grid grid-cols-4 gap-5">
						<div className="col-span-4 relative">
							<GetMainImage />
							<div className="leftarrow absolute inset-y-0 -left-7 flex items-center ">
								<div
									className="bg-EcommerceProduct-white py-3 px-4 rounded-full hover:cursor-pointer hover:text-EcommerceProduct-orange"
									onClick={previousImageHandler}>
									<IconLeft />
								</div>
							</div>
							<div className="leftarrow absolute inset-y-0 -right-7 flex items-center  ">
								<div
									className="bg-EcommerceProduct-white rounded-full py-3 px-4 hover:cursor-pointer hover:text-EcommerceProduct-orange"
									onClick={nextImageHandler}>
									<IconRight />
								</div>
							</div>

							<div
								className="absolute -top-6 -right-6  scale-150 hover:cursor-pointer text-EcommerceProduct-white hover:text-EcommerceProduct-orange "
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
									className={`hover:opacity-25 ${thumbCSS} ${
										activeImage === image.imageNumber && thumbSelectedCSS
									}`}
								/>
							</div>
						))}
					</div>
				</div>
			)}

			<div className={`navigation bar  mx-auto`}>
				<div className="flex flex-row  md:items-stretch w-full justify-between  md:border-b md:border-EcommerceProduct-greyishblue h-14 mb-1  md:mb-16 md:h-16">
					<div className="links flex items-center md:items-stretch gap-x-4 md:gap-x-10 ">
						<div className={`icon-menu flex text-xl md:hidden pl-5 relative`}>
							{isMenuShown ? (
								<div className="side-menu absolute  h-screen w-screen -top-10 left-0 z-10 bg-EcommerceProduct-blackOpa bg-opacity-85 mt-3">
									<div className="w-2/3  h-full bg-EcommerceProduct-white p-5 ">
										<div className="text-EcommerceProduct-darkgreyblue text-sm">
											<IconClose
												height={"1em"}
												width={"1em"}
												viewBox={"0 0 14 15"}
												onClick={toggleMenuOpen}
												className={`hover:cursor-pointer`}
											/>
										</div>
										<ul className="flex flex-col gap-y-3 text-EcommerceProduct-verydarkblue kumbh-sans-700 mt-10 ">
											<li className={`${navLinksCss}`}>Collections</li>
											<li className={`${navLinksCss}`}>Men</li>
											<li className={`${navLinksCss}`}>Women</li>
											<li className={`${navLinksCss}`}>About</li>
											<li className={`${navLinksCss}`}>Contact</li>
										</ul>
									</div>
								</div>
							) : (
								<IconMenu
									height={"1em"}
									width={"1em"}
									viewBox={"0 0 16 15"}
									onClick={toggleMenuOpen}
									className={`hover:cursor-pointer`}
								/>
							)}
						</div>
						<div className="category-selected kumbh-sans-700 text-3xl text-EcommerceProduct-verydarkblue  ">
							<h2 className="mb-1.5 md:mb-0">sneakers</h2>
						</div>
						<div className="other-links kumbh-sans-400 hidden md:flex  ">
							<ul className="flex gap-x-5 text-EcommerceProduct-darkgreyblue md:mt-2 ">
								<li className={`${navLinksCss}`}>Collections</li>
								<li className={`${navLinksCss}`}>Men</li>
								<li className={`${navLinksCss}`}>Women</li>
								<li className={`${navLinksCss}`}>About</li>
								<li className={`${navLinksCss}`}>Contact</li>
							</ul>
						</div>
					</div>

					<div className="cart-and-profile flex items-center flex-nowrap   gap-x-5 md:gap-x-8 md:pb-6">
						<div className="text-xl inline-block text-EcommerceProduct-darkgreyblue  relative">
							<IconCart
								height={"1em"}
								width={"1em"}
								viewBox={"0 0 22 20"}
								onClick={toggleCartOpen}
								className="hover:cursor-pointer"
							/>

							{cartQuantity > 0 && (
								<div className="absolute -top-2 -right-4 text-xs text-center text-EcommerceProduct-lightgreyishblue bg-EcommerceProduct-orange px-2 rounded-full">
									{cartQuantity}
								</div>
							)}

							{isCartOpen && (
								<div className="absolute z-30  top-12 -right-11 w-screen md:w-auto md:-left-80 md:top-12 md:-right-24 h-fit ">
									<div className="bg-EcommerceProduct-white ml-4 border shadow-lg rounded-lg">
										<h2 className="text-lg kumbh-sans-700 p-3 text-EcommerceProduct-verydarkblue border-b shadow-sm">
											Cart
										</h2>

										{cartQuantity > 0 ? (
											<>
												<div className="flex flex-nowrap mt-3 items-center md:justify-evenly justify-between p-5 md:p-0">
													<div className="p-2 md:w-1/4">
														<img
															src={
																productImagesArr.find(
																	(image) => image.imageNumber === activeImage
																).imageThumbnail
															}
															alt="item-thumbnail"
															className="rounded-lg max-h-14 object-cover"
														/>
													</div>
													<div className="text-base md:text-sm text-EcommerceProduct-darkgreyblue kumbh-sans-400">
														<p>{productName}</p>
														<p>
															${actualPrice} x {cartQuantity}{" "}
															<span className="kumbh-sans-700 text-EcommerceProduct-verydarkblue pl-2">
																${cartQuantity * actualPrice}
															</span>{" "}
														</p>
													</div>
													<div className="">
														<IconDelete
															onClick={deleteCartItem}
															className="hover:cursor-pointer"
														/>
													</div>
												</div>
												<div className="text-sm p-5">
													<button className="bg-EcommerceProduct-orange text-EcommerceProduct-verydarkblue w-full py-3 rounded-lg kumbh-sans-700">
														Checkout
													</button>
												</div>
											</>
										) : (
											<div className="h-32 flex justify-center items-center text-EcommerceProduct-darkgreyblue text-sm kumbh-sans-700">
												<p>Your cart is empty</p>
											</div>
										)}
									</div>
								</div>
							)}
						</div>
						<img
							src={imageProfile}
							alt="avatar picture"
							className="rounded-full object-cover h-8 md:h-14 border-2 border-transparent  hover:border-2 hover:border-ThreeColumnPreview-orange hover:cursor-pointer"
						/>
					</div>
				</div>
			</div>

			<div
				className={`body-container md:flex md:flex-row md:gap-20 md:items-center md:px-20`}>
				<div className={`image-display-container w-full md:w-1/2`}>
					<div className="container-for-image block md:grid md:grid-cols-4 md:gap-6   ">
						<div
							className="main-image md:col-span-4 md:hover:cursor-pointer relative"
							onClick={openLightboxWindow}>
							<GetMainImage />
							<div className="leftarrow absolute inset-y-0 left-0 flex items-center md:hidden">
								<div
									className="bg-EcommerceProduct-white py-3 px-4 rounded-full hover:cursor-pointer hover:text-EcommerceProduct-orange"
									onClick={previousImageHandler}>
									<IconLeft />
								</div>
							</div>
							<div className="leftarrow absolute inset-y-0 right-0 flex items-center md:hidden  ">
								<div
									className="bg-EcommerceProduct-white rounded-full py-3 px-4 hover:cursor-pointer hover:text-EcommerceProduct-orange"
									onClick={nextImageHandler}>
									<IconRight />
								</div>
							</div>
						</div>

						{productImagesArr.map((image) => (
							<div
								className={`hidden md:block col-span-1 hover:cursor-pointer ${
									activeImage === image.imageNumber &&
									"border-2 border-EcommerceProduct-orange rounded-xl "
								}`}
								onClick={() => selectImageFromThumb(image)}
								key={image.imageNumber}>
								<img
									src={image.imageThumbnail}
									alt={`Thumbnail ${image.imageNumber}`}
									className={` hover:opacity-25 ${thumbCSS} ${
										activeImage === image.imageNumber && thumbSelectedCSS
									}`}
								/>
							</div>
						))}
					</div>

					<div className="container-mobile"></div>
				</div>

				<div
					className={`product-details-container w-full mt-4 md:mt-0 md:w-1/2 p-4 md:p-0`}>
					<p className="text-sm text-EcommerceProduct-darkgreyblue kumbh-sans-700 tracking-wider	">
						{companyName.toUpperCase()}
					</p>
					<h1 className="text-EcommerceProduct-verydarkblue text-3xl md:text-4xl kumbh-sans-700 mt-3">
						{productName}
					</h1>
					<p className="text-sm kumbh-sans-400 text-EcommerceProduct-darkgreyblue mt-8">
						{productDescription}
					</p>

					<div className="pricing flex flex-row md:flex-col justify-between items-center md:items-start ">
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

					<div className="quantity flex flex-col gap-y-4 md:flex-row items-center mt-5 md:flex-nowrap md:gap-x-2">
						<div className="flex flex-row items-center bg-EcommerceProduct-lightgreyishblue py-3 rounded-lg w-full md:w-fit justify-between">
							<button className="mx-4 pl-4 md:pl-0" onClick={decItemQuantity}>
								<IconMinus />
							</button>
							<span className="mx-4 text-EcommerceProduct-verydarkblue">
								{itemQuantity}
							</span>
							<button className="mx-4 pr-4 md:pr-0" onClick={incItemQuantity}>
								<IconPlus />
							</button>
						</div>
						<button
							type="button"
							className="flex flex-nowrap items-center bg-EcommerceProduct-orange text-EcommerceProduct-verydarkblue kumbh-sans-700 w-full justify-center py-3 rounded-lg gap-x-3 hover:brightness-125"
							onClick={addToCartHandler}>
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
