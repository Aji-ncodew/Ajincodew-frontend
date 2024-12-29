import ArticlesPageContainer from "../../src/containers/articles/articlesPage.container";
import Head from "next/head";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setArticlesState } from "../../src/store/articles/slice";
import { ArticlesState } from "../../src/types/articles/store.articles.types";

export default function Articles(props: ArticlesState): JSX.Element {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setArticlesState(props));
  }, []);

  return (
    <>
      <Head>
        <title>Ajincodew community</title>
        <meta name="description" content="Articles by Ajincodew community"/>
      </Head>
      <ArticlesPageContainer />
    </>
  );
}