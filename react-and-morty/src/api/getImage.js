import planet from "../img/planet.jpg";
import cluster from "../img/cluster.jpg";
import dream from "../img/dream.jpg";
import menagerie from "../img/menagerie.jpg";
import resort from "../img/resort.webp";
import tv from "../img/tv.jpg";
import spacestation from "../img/spacestation.webp";

export default function getImage(type) {
  switch (type) {
    case "Planet":
      return planet;
    case "Cluster":
      return cluster;
    case "Dream":
      return dream;
    case "Space station":
      return spacestation;
    case "Menagerie":
      return menagerie;
    case "TV":
      return tv;
    case "Resort":
      return resort;
    default:
      return planet;
  }
}
