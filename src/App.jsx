import { useState } from "react";
import Root from "./Root";
import "./App.css";
import Store from "./ContextStore/Store";

const App = () => {
const [showNavigationLinks, setShowNavigationLinks] = useState(false)

  return (
    <>
    <Store.Provider value={{showNavigationLinks,setShowNavigationLinks}}>
     <Root></Root>
    </Store.Provider>
    </>
  )
}

export default App