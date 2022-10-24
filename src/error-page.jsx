import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <img src="https://www.hundeo.com/wp-content/uploads/2019/09/Golden-Labradoodle-Hund-Profil.jpg" height="300px"/>
      <p>But we did find a cute dog instead.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}