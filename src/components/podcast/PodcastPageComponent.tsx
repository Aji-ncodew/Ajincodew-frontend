import * as React from "react";
import PodcastCard from "./PodcastCard";
import { PodcastPageProps } from "../../types/podcast/components.types";
import { usePodcastPageStyles } from "../../styles/podcast/podcastPageComponent.styles";
import MainTitle from "../shared/MainTitle";

export default function PodcastPageComponent({
  podcastPageEpisodes,
}: PodcastPageProps): JSX.Element {
  const classes = usePodcastPageStyles();
  return (
    <section className={classes.root}>
      <MainTitle>AJI NDWIW Podcast</MainTitle>
      <div className={classes.cardsContainer}>
        {podcastPageEpisodes &&
          Object.keys(podcastPageEpisodes).map((key) => (
            <PodcastCard
              key={podcastPageEpisodes[key].slug.current}
              podcastCardData={podcastPageEpisodes[key]}
              className={classes.podcastCard}
            />
          ))}
      </div>
    </section>
  );
}
