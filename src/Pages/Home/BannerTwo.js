import React from "react";
import treatment from "../../assets/images/treatment.png";
import PrimaryButton from "../Shared/PrimaryButton";

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
            The doctor is the most remarkable profession in the World. A doctor
            treats every kind of disease, making us ready to work again. A sick
            person will certainly look for a nearby genuine Doctor. He gets
            money when he treats a diseased person. The doctor always gives
            honest advice to his patients. He also gives us some necessary
            medicines according to our disease. We should follow his description
            seriously. We often begin treating a member of our family instead of
            visiting a doctor. It is not good, and our mistake may put him in a
            more chronic situation. We should never avoid visiting a doctor. He
            is the only person who can cure us and make us healthy again.
          </p>
          <PrimaryButton>Get Started</PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default BannerTwo;
