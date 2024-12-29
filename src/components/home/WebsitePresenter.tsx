import * as React from "react";
import { Typography } from "@mui/material";
import { useWebsitePresenterStyles } from "../../styles/home/websitePresenter.styles";
import YoutubeEmbed from "./YoutubeEmbed";
import { WebsitePresenterProps } from "../../types/home/websitePresenter.types";
import Typewriter from "typewriter-effect";

export default function WebsitePresenter({
  videoId,
  videoStart,
}: WebsitePresenterProps): JSX.Element {
  const classes = useWebsitePresenterStyles();
  const typeWriterOptions = {
    loop: true,
    autoStart: true,
    wrapperClassName: classes.typewriter,
    delay: 50,
    strings: [
      "IT community 🤝",
      "Tech enthusiasts 💻",
      "Podcast hosts 🎙️",
      "Content creators ✍️"
    ],
  };

  return (
    <section className={classes.root}>
      <div className={classes.container}>
        <div>
          <Typography variant="h3" component="h1" className={classes.mainTitle}>
            Welcome to AJINCODEW!
          </Typography>
          <Typography
            variant="h4"
            component="div"
            className={classes.paragraph}
          >
            <div className={classes.selfPresentation}>
              This is the AJINCODEW Community, we are a (
              <Typewriter options={typeWriterOptions} />
              );
            </div>
            <div className={classes.websiteComment}>
              {
                "/* In this platform, we share our creations, insights, and knowledge on technology and beyond. Together, we grow and inspire. */"
              }
            </div>
          </Typography>
        </div>
        <div>
          <YoutubeEmbed
            embedId={videoId}
            videoStart={videoStart}
            autoPlay={true}
            className={classes.videoContainer}
          />
        </div>
      </div>
    </section>
  );
}