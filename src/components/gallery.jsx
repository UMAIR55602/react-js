import { useState } from "react";
import { Gallery } from "./helper";
import { Link } from "react-router-dom";

function GalleryComponent() {
  const [visibleImages, setVisibleImages] = useState(8);

  const handleLoadMore = () => {
    setVisibleImages((prev) => Math.min(prev + 8, Gallery.length));
  };

  return (
    <div
      className="xl:px-72 max-lg:px-10 pt-10"
      style={{
        backgroundImage: "url('/assets/images/Ellipse 2 (1).png')",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="grid grid-cols-2 max-md:grid-cols-1 justify-center gap-10">
        {Gallery.slice(0, visibleImages).map((item, index) => (
          <div
            key={index}
            className="flex justify-center bg-white p-4 shadow rounded-lg"
          >
            <Link to={item.link}>
              <img src={item.image} alt={`Gallery Image ${index + 1}`} />
            </Link>
          </div>
        ))}
      </div>
      {visibleImages < Gallery.length && (
        <div className="flex justify-center pt-16">
          <button
            onClick={handleLoadMore}
            className="bg-[#3C71FF] text-white py-2 px-4 rounded-full hover:bg-blue-600 transition"
          >
            Load More !
          </button>
        </div>
      )}
    </div>
  );
}

export default GalleryComponent;
