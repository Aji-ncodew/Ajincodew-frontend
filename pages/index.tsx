import * as React from "react";
import HomePageContainer from "../src/containers/home/homePage.container";
import { NextPageContext } from "next";
import { HomeState } from "../src/types/home/store.home.types";
import { setHomeState } from "../src/store/home/slice";

import { useDispatch } from "react-redux";

export default function Home(props: HomeState) {
  const dispatch = useDispatch();
  dispatch(setHomeState(props));

  return <HomePageContainer />;
}
