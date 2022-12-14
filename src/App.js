import React from "react";
import LandingPage from "./Components/LandingPage/LandingPage";

import PropertyListingPage from "./Components/PropertyListingPage";
import OnClickProperty from "./Components/OnClickProperty/index";
import Login from "./Components/admin/Login/login";
import Properties from "./Components/admin/Properties/Properties";
import Users from "./Components/admin/Users/Users";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Services from "./Components/ServicesComponent/Services";
import AddProperty from "./Components/admin/Properties/AddProperty";
import EditProperty from "./Components/admin/Properties/EditProperty";
import Testimonials from "./Components/admin/Testimonials/Testimonials";

const App = () => {
	return (
		<div>
			<Router>
				<Routes>
					<Route path='/' element={<LandingPage />} />
					<Route path='/home' element={<LandingPage />} />
					<Route path='/properties' element={<PropertyListingPage />} />
					<Route path='/services1' element={<Services />} />
					<Route path='/property-details' element={<OnClickProperty />} />
					<Route path='/admin' element={<Login />} />
					<Route path='/admin-properties' element={<Properties />} />
					<Route path='/admin-users' element={<Users />} />
					<Route path='/admin-AddProperties' element={<AddProperty />} />
					<Route path='/admin-EditProperties' element={<EditProperty />} />
					<Route path='/admin-testimonials' element={<Testimonials />} />
				</Routes>
			</Router>
		</div>
	);
};

export default App;
