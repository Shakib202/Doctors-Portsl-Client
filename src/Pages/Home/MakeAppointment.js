import React from "react";
import doctor from "../../assets/images/doctor.png";
import appointment from "../../assets/images/appointment.png";
import PrimaryButton from "../Shared/PrimaryButton";

const MakeAppointment = () => {
  return (
    <section style={{
      background: `url(${appointment})`
    }} 
    className="flex justify-center items-center">
      <div className="flex-1 hidden lg:block">
        <img className="mt-[-100px]" src={doctor} alt="" />
      </div>
      <div className="flex-1">
        <h3 className="text-xl text-primary mb-2 font-bold">Appointment</h3>
        <h2 className="text-2xl text-white">Make an Appointment Today</h2>
        <p className="text-white">
          Doctors play a pivotal role in building the society. They are the
          lifelines of the community. This term can be used very literally for
          the Doctors who shape culture and save those that are diseased and
          unhealthy. Doctors work hard to save the lives of patients with
          serious ailments. They act as an inspiration to society. The job of a
          Doctor is to find out what the disease of a person us to provide
          medicines and treatments accordingly. There are various kinds of
          doctors. Some specialize in heart medication, while some specialize in
          children’s diseases. The task of the Doctor is hence varied and highly
          convoluted.
        </p>
        <div className="mt-3"><PrimaryButton>Get Started</PrimaryButton></div>
      </div>
    </section>
  );
};

export default MakeAppointment;
