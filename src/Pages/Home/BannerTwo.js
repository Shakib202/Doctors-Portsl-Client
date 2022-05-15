import React from "react";
import treatment from "../../assets/images/treatment.png";

const BannerTwo = () => {
  return (
    <div class="hero min-h-screen">
      <div class="hero-content flex-col lg:flex-row">
        <img src={treatment} class="max-w-sm rounded-lg shadow-2xl" />
        <div>
          <h1 class="text-5xl font-bold">
            Exceptional Dental Care, on Your Terms
          </h1>
          <p class="py-6">
            Oral hygiene is the practice of keeping one's mouth clean and free
            of disease and other problems by regular brushing of the teeth and
            cleaning between the teeth. It is important that oral hygiene be
            carried out on a regular basis to enable prevention of dental
            disease and bad breath.
          </p>
          <button class="btn btn-primary uppercase text-white font-bold bg-gradient-to-r from-secondary to-primary">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default BannerTwo;
