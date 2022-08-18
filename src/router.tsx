import { Routes, Route, Outlet, Navigate } from "react-router-dom";
import { RoutePath } from "types/routes";
import Home from "pages/Home/index";
import Login from "pages/Login";
import Settings from "pages/Settings";
import ManageGames from "components/ManageGames";
import ManageUsers from "components/ManageUsers";
import ManageGenres from "components/ManageGenres";
import { Auth } from "helpers/Auth";

const AuthenticatedRoutes = () => {
  const isAuthentcated = Auth.isAuth();
  return isAuthentcated ? <Outlet /> : <Navigate to={RoutePath.LOGIN} />;
};

const Router = () => {
  return (
    <Routes>
      <Route path={RoutePath.LOGIN} element={<Login />} />
      <Route path="/" element={<AuthenticatedRoutes />}>
        <Route path={RoutePath.HOME} element={<Home />} />
        <Route path={RoutePath.SETTINGS} element={<Settings />}>
          <Route path={RoutePath.SETTINGS_GENRES} element={<ManageGenres />} />
          <Route path={RoutePath.SETTINGS_GAMES} element={<ManageGames />} />
          <Route path={RoutePath.SETTINGS_USERS} element={<ManageUsers />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default Router;
