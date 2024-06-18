import { useRouteError } from "react-router-dom";

const errorPage = () => {
  const error = useRouteError();
  return (
    <div className="flex justify-center min-h-screen items-center flex-col">
      <h1 className="text-3xl font-bold">404</h1>
      <p className="my-5 text-xl">Sorry, an unexpected error ocurred</p>
      <p className="text-lg">
        {error.statusText || error.message}
      </p>
    </div>
  );
};

export default errorPage;
