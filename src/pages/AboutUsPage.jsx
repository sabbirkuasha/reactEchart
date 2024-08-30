// import React from "react";

import { Link } from "react-router-dom";

function AboutUsPage() {
  return (
    <>
      <title>React Learning: About Page</title>

      <div className="py-5">
        <div className="flex justify-center flex-col gap-2">
          <h1>Hey, lets navigate between pages</h1>
          <p>
            Go to
            <Link className="btn btn-primary" to="/">
              Home ➙
            </Link>
            HomePage
          </p>
        </div>
      </div>
    </>
  );
}

export default AboutUsPage;
