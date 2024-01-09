import Link from "next/link";

function Contact() {
  return (
    <div className="card card-side bg-base-100 shadow-xl mt-[50px] ">
      <figure>
        <img
          src="https://images.unsplash.com/photo-1541535881962-3bb380b08458?q=80&w=1934&auto=
          format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Movie"  
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">New movie is released!</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
          voluptas commodi debitis accusantium, labore tenetur, natus at
          excepturi soluta eligendi, dolore maxime? Sint vero porro voluptates
          vel, nulla deserunt aliquam.
        </p>
        <div className="card-actions justify-end">
          <button className="btn glass">Watch</button>
        </div>
      </div>
    </div>
  );
}

export default Contact;
