import { useState } from "react";
import { useQuery } from "react-query";
// Components
import Drawer from "@material-ui/core/Drawer";
import LinearProgress from "@material-ui/core/LinearProgress";
import Grid from "@material-ui/core/Grid";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import Badge from "@material-ui/core/Badge";
// styles
import { Wrapper } from "./App.styles";
// Types

export type CartItemType = {
  id: number;
  category: string;
  description: string;
  image: string;
  price: number;
  title: string;
  amount: number;
};

const getProducts = async () =>
  await (await fetch("https://fakestoreapi.com/products")).json();

const App = () => {
  return <div className="App">start</div>;
};

export default App;
