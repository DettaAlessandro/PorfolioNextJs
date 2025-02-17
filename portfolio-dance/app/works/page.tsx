import VideoGallery from "../ui/video-gallery";
const videos = [
  { videoId: "1GiWSyxS3J8?si=3167-JaIbkysvkUd", title: "Video Title 1", description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet." },
  { videoId: "MMWshuaS45Q?si=Pj5uxgEcghA7j5_8", title: "Video Title 2", description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem" },
  { videoId: "PJIMT8NPeV8?si=N57PQ2tcAIlusFHV", title: "Video Title 2", description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem" },
  { videoId: "nlY8cPe1dro?si=vvI9gePA5GLmlse9", title: "Video Title 2", description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem" },
];

export default function Page() {
    return (
      <VideoGallery videos={videos}/>
    );
  }
  