import AddProperty from "../pages/AddProperty";
import ShowListProperty from "../pages/ShowListProperty";
import ListProperty from "../pages/ListProperty";
import { RouteLinks } from "./RoutesLinks";


export const PublicRoute = [
  {
    component: <AddProperty />,
    path: RouteLinks.addproperty,
    exact: true,
  },
  {
    component: <ShowListProperty />,
    path: RouteLinks.showlistproperty,
  },
  {
    component: <ListProperty />,
    path: RouteLinks.listproperty,
  },
];