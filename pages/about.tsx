import * as React from "react";
import { Avatar } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";

import MainTitle from "../src/components/shared/MainTitle";
import { useAboutPageStyles } from "../src/styles/about/aboutPage.styles";
import { IconLinkProps } from "../src/types/about/iconLink.types";
import { IconLink } from "../src/components/about/IconLink";
import Head from "next/head";

export default function About(): JSX.Element {
  const classes = useAboutPageStyles();
  const iconLinks: IconLinkProps[] = [
    {
      link: "https://www.linkedin.com/company/ajincodew2024/?viewAsMember=true",
      icon: <LinkedInIcon />,
      label: "Linkedin",
    },
    {
      link: "https://github.com/Aji-ncodew",
      icon: <GitHubIcon />,
      label: "Github",
    },
  ];

  return (
    <>
      <Head>
        <meta name="description" content="About Ajincodew community" />
      </Head>
      <section className={classes.root}>
        <div className={classes.mainContainer}>
          <div className={classes.textContainer}>
            <MainTitle>About Us</MainTitle>
            <p className={classes.text}>
              Welcome to AJINCODEW, a vibrant Moroccan IT community driven by a shared passion for technology and innovation. 
              Based in the heart of Morocco, our mission is to connect developers, engineers, and tech enthusiasts to foster 
              collaboration, learning, and growth.
              <br />
              At AJINCODEW, we focus on creating value through insightful podcasts, engaging videos, and well-crafted articles 
              that inspire and educate. Our community thrives on exploring the latest trends in software engineering, with a 
              strong emphasis on backend development while embracing frontend creativity.
              <br />
              We believe in the power of diversity and open dialogue. Through our podcasts, we delve into meaningful conversations, 
              welcoming differing perspectives and ideas. Beyond tech, our members share a love for reading, sports, and the 
              constant pursuit of personal and professional excellence.
              <br />
              Join us as we build a supportive and innovative space where ideas turn into impactful solutions. Together, we shape 
              the future of IT in Morocco and beyond.
            </p>
            <div className={classes.iconLinksContainer}>
              {iconLinks.map((iconLink) => (
                <IconLink key={iconLink.label} {...iconLink} />
              ))}
            </div>
          </div>
          <div className={classes.avatarContainer}>
            <Avatar
              alt={"Ajincodew community"}
              title={"Ajincodew community"}
              src={"/ajincodew.png"}
              className={classes.avatar}
            />
          </div>
        </div>
      </section>
    </>
  );
}
