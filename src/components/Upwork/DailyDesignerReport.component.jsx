import React from "react";
import { FaStarOfLife } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import { FaStar } from "react-icons/fa";
import { IoIosStar } from "react-icons/io";

const DailyDesignerReport = () => {
	return (
		<div className="bg-white text-black w-full h-svh">
			<header className="pt-5">
				<h1 className="text-center text-3xl font-extrabold font-serif flex items-center justify-center text-black">
					{" "}
					<FaStarOfLife className="inline-flex bg-black text-white m-1 p-2 rounded-full text-4xl mr-4" />{" "}
					Designer Daily Report
				</h1>
			</header>
			<main className="flex flex-col w-full items-center mt-24 ">
				<h2 className="text-8xl text-black text-center font-bold font-serif">
					Everything about design,
				</h2>
				<h3 className="text-8xl text-black text-center font-bold font-serif">
					in just <span className="text-7xl">&#128400;</span> minutes
				</h3>

				<p className="mt-8 text-2xl  text-gray-400 tracking-wider">
					Your report will be ready everyday at{" "}
					<span className="flex-nowrap">00:00 PST.</span> Free and
					non-distracting
				</p>

				<section className="flex items-start gap-x-5 mt-10">
					<div className="flex flex-col">
						<button className=" text-2xl px-10 py-4 bg-orange-100 block shadow-md shadow-orange-800 rounded-2xl text-orange-900 text-opacity-60 hover:bg-orange-800 hover:text-orange-100">
							<span className="font-bold ">Add to Chrome</span>, it's Free
						</button>
						<button className="block mt-5 text-gray-500 tracking-wide font-semibold text-opacity-75">
							Other Browsers{" "}
							<IoMdArrowDropdown className="inline-flex align-text-bottom" />{" "}
						</button>
					</div>

					<button className="text-2xl px-10 py-4 border border-black shadow-md shadow-black rounded-2xl font-bold text-gray-600 hover:text-white hover:bg-black">
						Use on Web
					</button>
				</section>

				<section className="mt-20 flex flex-nowrap items-center gap-x-20 border-gray-100 shadow-lg py-5 px-10 rounded-2xl">
					<div className="inline-block">
						<div className="flex items-center gap-x-5">
							<img
								src="https://fonts.gstatic.com/s/i/productlogos/chrome_store/v7/192px.svg"
								alt=""
								className="h-10"
							/>
							<p className="text-2xl text-gray-400 tracking-wide">
								chrome web store
							</p>
						</div>
						<p className="text-lg font-medium text-gray-500  mt-2">
							Reviewed by 378 users
						</p>
					</div>
					<div className="px-8 py-4 rounded-full bg-gray-100 text-md text-gray-500 ">
						<p className="flex items-center">
							<IoIosStar className="inline-flex text-yellow-400  text-2xl" />
							<IoIosStar className="inline-flex text-yellow-400  text-2xl" />
							<IoIosStar className="inline-flex text-yellow-400  text-2xl" />
							<IoIosStar className="inline-flex text-yellow-400  text-2xl" />
							<IoIosStar className="inline-flex text-yellow-400  text-2xl mr-3" />
							4.9 out of 5
						</p>
					</div>
				</section>
			</main>
		</div>
	);
};

export default DailyDesignerReport;
