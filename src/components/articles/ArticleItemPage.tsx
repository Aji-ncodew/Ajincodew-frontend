import React from "react";
import { ArticleItemPageProps } from "../../types/articles/articleItemPage.types";
import { CommentsPanelProps } from "../../types/shared/commentsPanel.types";
import { useArticleItemPageStyles } from "../../styles/articles/articleItemPage.styles";
import ImageTitle from "../shared/ImageTitle";
import ArticleMetadata from "./ArticleMetadata";
import { MDXRemote } from "next-mdx-remote";
import CommentsPanel from "../shared/CommentsPanel";
import { Direction } from "@mui/material";
import { isArabicArticle } from "../../lib/utils";

export default function ArticleItemPage({
  article,
}: ArticleItemPageProps): JSX.Element {
  const classes = useArticleItemPageStyles(article);
  const commentsProps: CommentsPanelProps = {
    mediaSlugID: article.id,
    mediaTitle: article.title,
    mediaTypeSlug: "articles",
  };

  const direction = article.textOrientation as Direction;
  return (
    <article className={classes.root}>
      <ImageTitle
        mainImageUrl={article.thumbnailURL}
        title={article.title}
        isArabicTitle={isArabicArticle(article)}
      />
      <div className={classes.bodyContainer}>
        <ArticleMetadata article={article} />
        {article.body && Object.keys(article.body).length > 0}
        {article.bodyMarkdown && <MDXRemote {...article.bodyMarkdown} />}
      </div>
      <CommentsPanel {...commentsProps} className={classes.bodyContainer} />
    </article>
  );
}
