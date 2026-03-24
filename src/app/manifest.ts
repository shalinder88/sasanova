import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Sasanova",
    short_name: "Sasanova",
    description: "Evidence-backed software comparisons",
    start_url: "/",
    display: "standalone",
    background_color: "#0c0c0f",
    theme_color: "#0c0c0f",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
