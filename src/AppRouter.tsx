import routes from './config/routes'
import { Routes, Route, Navigate, useLocation, Outlet } from "react-router-dom";
import { AuthContext } from "@/context/createContext";
import MasterContent from "@/components/MasterContent";
import { Login, Home, Category, ShopingCart, Response404, ProductList, Subcategory, AllPosts, PostDetails,ThreeDPage } from "@/pages/index";
import { useContext } from 'react';

const AppRouter = () => (
  <Routes>
    {/** Protected Routes */}
    <Route  path="/" element={<ProtectedArea />}>
      <Route path="/" element={<MasterContent />}>
        <Route path="/" element={<Home />} />
        
        <Route path={routes.category} element={<Category />} />
        <Route path={routes.subCategory} element={<Subcategory />} />
        <Route path={routes.posts} element={<AllPosts />} />
        <Route path={routes.singlePost} element={<PostDetails />} />
        <Route path={routes.shopCart} element={<ShopingCart />} />
        <Route path={routes.productList} element={<ProductList />} />
        <Route path={routes.threedanimation} element={<ThreeDPage />} />
      </Route>
    </Route>

    {/** Public Routes */}
    <Route path={routes.login} element={<PublicArea />}>
      <Route path={routes.login} element={<Login />} />
    </Route>

    {/** Permission denied route */}
    <Route path="/*" element={<Response404 />}>
    </Route>
  </Routes>
);

function ProtectedArea() {
  // let { auth } = useContext(AuthContext);
  let location = useLocation();
  // if (!auth.authUId && !auth.authToken) {
 if (!true) {
    // Redirect them to the /login page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.
    return <Navigate to="/login" state={{ from: location }} replace />;
  } else {
    return <Outlet />;
  }
}

const PublicArea = (props: any) => {
  let { auth } = useContext(AuthContext);

  return !auth.authUId && !auth.authToken ? (
    <Navigate to="/" />
  ) : (
    <Outlet />
  );
};

export default AppRouter;
