import React, { useEffect, useState } from "react";
import "./App.css";
import Button from "./Button";
import { Link, Route, useLocation } from "wouter";
import Form from "./Form";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Global from "./Global";

function App() {
  const [version, setVersion] = useState("1.3.2");

  const key = localStorage.getItem("key") ? localStorage.getItem("key") : null;

  const [location, setLocation] = useLocation();

  useEffect(() => {
    console.log(Global.serviceUrl);
    fetch(Global.serviceUrl)
      .then((resp) => {
        toast.success("Servicio preparado", {
          autoClose: 2000,
        });
      })
      .catch((error) => {
        toast.error("Error de comunicación");
      });

    if (key) {
      setLocation("/button/" + key);
    }
  }, []);

  return (
    <div className="App">
      <Route component={Form} path="/" />
      <Route component={Button} path="/button/:key" />
      <br />
      <br />
      <div className="version">
        <Link to="/">{version}</Link>
      </div>
      <ToastContainer newestOnTop />
    </div>
  );
}

export default App;
