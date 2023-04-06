import React from "react";

const PosVideo = () => {
  return (
    <div className="md:pb-12 px-6">
      <div className="pos-container py-12 mb-12">
        <iframe
          class="w-full h-[300px] md:h-[400px] lg:h-[500px] rounded-md"
          frameborder="0"
          allowfullscreen="1"
          title="A Point of sale"
          src="https://www.youtube.com/embed/XHOmBV4js_E"
          id="widget2"
        />
      </div>
    </div>
  );
};

export default PosVideo;
