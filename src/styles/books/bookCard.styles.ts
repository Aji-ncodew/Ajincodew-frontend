import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const useBooksCardStyles = makeStyles((theme: Theme) => ({
  root: {
    animation: `$videoTransition 1s ${theme.transitions.easing.easeInOut}`,
    "&:hover": {
      boxShadow: "inset 0px 0px 0px 2px #8145A7",
    },
  },
  image: {
    height: 300,
    width: "auto",
    transform: "rotate(-18deg)",
  },
  "@keyframes videoTransition": {
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
