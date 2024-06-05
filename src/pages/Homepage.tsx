import Header from "../components/Header";
import logoSrc from "../assets/mec-logo/mec.png"; // Import the image using ES6 module syntax

function Homepage() {
  const categories = ["Play", "Flash", "Content", "Design", "Producer"];
  return (
    <>
      <Header categories={categories} logoSrc={logoSrc} />{" "}
      {/* Pass the imported logoSrc */}
    </>
  );
}

export default Homepage;
