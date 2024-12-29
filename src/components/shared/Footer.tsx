import { useFooterStyles } from "../../styles/shared/footer.styles";
import * as React from "react";

export default function Footer(): JSX.Element {
  const classes = useFooterStyles();
  const currentYear = new Date().getFullYear();
  return (
    <footer className={classes.root}>
      <div className={classes.contentContainer}>
        &#169; Ajincodew community, {currentYear}.
      </div>
    </footer>
  );
}
