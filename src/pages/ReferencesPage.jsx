import React from "react";
import References from "../components/References";
import { Helmet } from "react-helmet-async";

const ReferencesPage = () => {

    return (
        <>
            <Helmet>
                <title>Referenciák | EHS Szolgáltatás</title>
                <meta name="description" content="Tekintse meg az EHS Szolgáltatás referenciáit munkavédelem, tűzvédelem, környezetvédelem és energiahatékonyság területén." />
            </Helmet>
            <div className="ref-div" >
                <References />
            </div>
        </>
    )
}

export default ReferencesPage