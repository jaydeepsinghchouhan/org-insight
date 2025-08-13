import OrgChart from "../components/OrgChart";
import Home from "../components/Home";
import Employees from "../components/Employees";
import PageNotFound from "../components/PageNotFound";

const publicRoutes = [
  { path: "/dashboard", component: Home },
  { path: "/employees", component: Employees },
  // { path: '/departments', component: <Departments /> },
  { path: "/organization-tree", component: OrgChart },
  { path: "*", component: PageNotFound },
];

export { publicRoutes };
