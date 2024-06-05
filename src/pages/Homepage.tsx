import Header from "../components/Header";
import logoSrc from "../assets/mec-logo/mec.png"; // Import the image using ES6 module syntax
import ImageGrid from "../components/ImgCard";
function Homepage() {
  const categories = [
    { name: "PLAY", link: "/play" },
    { name: "FLASH", link: "/flash" },
    { name: "CONTENT", link: "/content" },
    { name: "DESIGN", link: "/design" },
    { name: "PRODUCER", link: "/producer" },
  ];
  return (
    <>
      <Header categories={categories} logoSrc={logoSrc} />{" "}
      <ImageGrid></ImageGrid>
    </>
  );
}

export default Homepage;
