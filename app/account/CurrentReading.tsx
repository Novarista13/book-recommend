import React from "react";

const CurrentReading = ({ color, count, title }: any) => {
  console.log(color);

  return (
    <div
      className=" h-[105px] text-white rounded-md max-w-[300px] p-3"
      style={{
        background: color,
      }}
    >
      <div className=" flex align-middle mt-1 mb-3">
        <svg
          width="29"
          height="29"
          viewBox="0 0 29 29"
          fill="none"
          className="bg-white rounded-md inline w-[40px] h-[35px] p-1.5"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14.5 25.9022C14.342 25.9022 14.183 25.8642 14.037 25.7892C12.4047 24.9378 10.591 24.4931 8.75 24.4931C6.90902 24.4931 5.09527 24.9378 3.463 25.7892C3.31046 25.8682 3.14017 25.9067 2.96847 25.9009C2.79676 25.8952 2.62942 25.8454 2.48252 25.7563C2.33561 25.6673 2.21407 25.5419 2.12957 25.3923C2.04507 25.2428 2.00045 25.074 2 24.9022V5.90216C1.99999 5.74086 2.039 5.58195 2.1137 5.43899C2.18841 5.29603 2.29658 5.17326 2.429 5.08116C6.21 2.45016 11.29 2.45016 15.072 5.08116C15.34 5.26816 15.5 5.57516 15.5 5.90216V24.9022C15.5 25.1674 15.3946 25.4217 15.2071 25.6093C15.0196 25.7968 14.7652 25.9022 14.5 25.9022ZM8.75 22.4932C10.36 22.4932 11.971 22.7822 13.5 23.3602V6.44216C12.0694 5.56909 10.4259 5.10718 8.75 5.10718C7.07407 5.10718 5.43056 5.56909 4 6.44216V23.3602C5.51799 22.7867 7.1273 22.493 8.75 22.4932Z"
            fill={color}
          />
          <path
            d="M26 25.9022C25.842 25.9022 25.683 25.8642 25.537 25.7892C23.9047 24.9378 22.091 24.4931 20.25 24.4931C18.409 24.4931 16.5953 24.9378 14.963 25.7892C14.8105 25.8682 14.6402 25.9067 14.4685 25.9009C14.2968 25.8952 14.1294 25.8454 13.9825 25.7563C13.8356 25.6673 13.7141 25.5419 13.6296 25.3923C13.5451 25.2428 13.5005 25.074 13.5 24.9022V5.90216C13.5 5.74086 13.539 5.58195 13.6137 5.43899C13.6884 5.29603 13.7966 5.17326 13.929 5.08116C17.71 2.45016 22.79 2.45016 26.572 5.08116C26.84 5.26816 27 5.57516 27 5.90216V24.9022C27 25.1674 26.8946 25.4217 26.7071 25.6093C26.5196 25.7968 26.2652 25.9022 26 25.9022ZM20.25 22.4932C21.86 22.4932 23.471 22.7822 25 23.3602V6.44216C23.5694 5.56909 21.9259 5.10718 20.25 5.10718C18.5741 5.10718 16.9306 5.56909 15.5 6.44216V23.3602C17.018 22.7867 18.6273 22.493 20.25 22.4932Z"
            fill={color}
          />
        </svg>
        <p className="inline text-2xl mx-[10px]">{count}</p>
      </div>
      <p className="text-lg">{title}</p>
    </div>
  );
};

export default CurrentReading;