import { Helmet } from 'react-helmet-async';

const PageNotFound = () => {
  return (
    <>
      <Helmet>
        <title>404 - Az oldal nem található | EHS Szolgáltatás</title>
        <meta name="description" content="A keresett oldal nem található." />
        <meta name="robots" content="noindex,follow" />
      </Helmet>
      <div className="not-found-page"> 
        <div className="container">
          <h1 className="heading">404</h1>
          <h2 className="sub-heading">Az oldal nem található</h2>
          <p>Oops! Előfordulhat, hogy a keresett oldalt eltávolították, vagy átmenetileg nem érhető el.</p>
        </div>
      </div>
    </>
  );
};

export default PageNotFound;