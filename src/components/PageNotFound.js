import { useRouteError } from 'react-router-dom';
import './css/PageNotFound.css';

export default function ErrorPage() {
  const error = useRouteError();

  return (
    <section id="not-found">
      <div id="not-found__container">
        <h1 id="not-found__title">Oopsala!</h1>
        <p className="not-found__body-text">
          Somehow, an error has occurred.
          <br />
          <i>{error.statusText || error.message}</i>
        </p>
      </div>
    </section>
  );
}
