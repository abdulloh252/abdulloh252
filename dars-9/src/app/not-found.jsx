import React from "react";
import Link from "next/link";
import { headers } from "next/headers";

async function Error() {
  const headersList = headers();
  const domain = headersList.get("host");
  return (
    <div className="mt-[100px] ">
      <div role="alert" className="alert alert-error">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="stroke-current shrink-0 h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <div>
          <span> Not founded {domain}</span>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia,
            iusto?
          </p>
        </div>

        <div>
          <Link className="link text-black" href={"/"}>
            Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Error;
