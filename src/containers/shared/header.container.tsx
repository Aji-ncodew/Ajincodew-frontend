import { HeaderProps } from "../../types/home/header.types";
import Header from "../../components/shared/Header";
import React from "react";

const navbarProps: HeaderProps = {
  links: [
    {
      label: "Home",
      link: "/",
    },
    {
      label: "Articles",
      link: "/articles",
    },
    {
      label: "Podcast",
      link: "https://www.youtube.com/@aji_ncodew/streams",
      isExternal: true,
    },
    {
      label: "About",
      link: "/about",
    },
    {
      label: "Support",
      subLinks: [
        {
          label: "Membership",
          isExternal: true,
          link: "https://www.youtube.com/@aji_ncodew/join",
        }
      ],
    },
  ],
};

export default function HeaderContainer(): JSX.Element {
  return <Header {...navbarProps} />;
}
