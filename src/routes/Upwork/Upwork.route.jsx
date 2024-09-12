import React from "react";
import { Route, Routes } from "react-router-dom";
import DailyDesignerReport from "../../components/Upwork/DailyDesignerReport.component";

const Upwork = () => {
	return (
		<Routes>
			<Route path="designer-daily-report" element={<DailyDesignerReport />} />
		</Routes>
	);
};

export default Upwork;
