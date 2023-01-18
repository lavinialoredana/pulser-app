import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  console.log("There was an error", error);

  return (
    <div className="Error-page-container">
      <h1 data-testid="error-title"> Oops!</h1>
      <p> Sorry, an unexpected error just happened.</p>
      <p>
        <i> {error.statusText || error.message}</i>
      </p>
    </div>
  );
};

export default ErrorPage;
