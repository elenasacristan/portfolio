import React from "react";
import { Link} from "react-router-dom";

export default function Details(){
    return(
        <div className="Details">
            Details
            <Link className="back-button" to="/">Back to home page</Link>
        </div>
    );

}