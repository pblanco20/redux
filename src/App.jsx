import React from "react";
import { Provider } from "react-redux";
import generateStore from "./Redux/store";
import Pokemones from "./components/Pokemones";

import "./styles.css";

function App() {
  const store = generateStore();
  return (
    <Provider store={store}>
      <Pokemones />
    </Provider>
  );
}

export default App;
