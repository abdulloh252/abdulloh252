import React from "react";

function Home() {
  return (
    <div>
      <div
        className="hero h-[500px] w-full mt-[50px] text-white"
        style={{
          backgroundImage:
            "url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold text-white">Hello there</h1>
            <p className="mb-5  text-white">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn glass uppercase  text-white">Home</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
