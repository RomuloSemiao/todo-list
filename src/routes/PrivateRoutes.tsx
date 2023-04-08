import { Navigate, Outlet } from 'react-router-dom';const PrivateRoutes = () => {
	const { signed }: any = false;
	return signed ? <Outlet /> : <Navigate to="/" />;
};

export { PrivateRoutes };
