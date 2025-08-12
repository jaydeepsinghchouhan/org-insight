	import React from 'react';
	import OrgChart from '../components/OrgChart';
	import EmployeeGrid from '../components/EmployeeGrid';
import Home from '../components/Home';

	const publicRoutes = [
		{ path: '/', component: Home },
		{ path: '/employees', component: EmployeeGrid },
		// { path: '/departments', component: <Departments /> },
		{ path: '/organization-tree', component: OrgChart },
		{ path: '*', component: Home },
		];


	export { publicRoutes };
