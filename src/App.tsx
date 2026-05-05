import React, { useEffect, useState } from "react";
import "./App.css";
import { useFetch } from "./hooks/useFetch";
import { useAppDispatch } from "./store/redux-hooks";
import { setUser } from "./store/userSlice";
import { SideNav } from "./components/SideNav";
import Dashboard from "./components/Dashboard";
import UserForm from "./components/UserForm";
import UserData from "./components/UserData";
import SensitiveData from "./components/SensitiveData";

function App() {
  const dispatch = useAppDispatch();
  const { data } = useFetch("https://jsonplaceholder.typicode.com/posts");

  useEffect(() => {
    if (data) {
      dispatch(setUser(data));
    }
  }, [data]);

  const [route, setRoute] = useState("dashboard");

  const renderPage = () => {
    switch (route) {
      case "dashboard":
        return <Dashboard/>;
      case "userForm":
        return <UserForm/>;
      case "userData":
        return <UserData/>;
      case "superAdmin":
        return <SensitiveData/>;
      default:
        return <Dashboard/>;
    }
  };

  const updateRoute = (str: string) => {
    setRoute(str);
  };

  return (
    <div className="app-layout">
      <div className="app-sidebar">
        <SideNav updateRoute={updateRoute} />
      </div>
      <div className="app-content">{renderPage()}</div>
    </div>
  );
}

export default App;
