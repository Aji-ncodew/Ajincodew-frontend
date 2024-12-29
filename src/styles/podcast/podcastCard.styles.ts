import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const usePodcastCardStyles = makeStyles((theme: Theme) => ({
  root: {
    animation: `$podcastTransition 1s ${theme.transitions.easing.easeInOut}`,
  },
  container: {
    display: "flex",
    justifyContent: "flex-start",
  },
  media: {
    height: 125,
  },
  title: {
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
  content: {
    width: "100%",
    overflow: "hidden",
  },
  metadataPanel: {
    color: "gray",
    fontSize: "0.8rem",
  },
  "@keyframes podcastTransition": {
    "0%": {
      opacity: 0,
      transform: "translateY(4rem)",
    },
    "100%": {
      opacity: 1,
      transform: "translateY(0)",
    },
  },
}));
