import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

export default function ScrollToTop() {
    let history = useHistory();
  
    useEffect(() => {
      history.listen(() => {
        window.scrollTo(0, 0);
      });
    }, []);
    return null;
  }