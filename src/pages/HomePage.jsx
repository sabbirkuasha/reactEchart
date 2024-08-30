import { Link } from "react-router-dom";

function HomePage() {
  return (
    <>
      <title>React Learning: Home Page</title>

      <div className="py-5">
        <div className="flex justify-center flex-col gap-2">
          <h1>Hey, lets navigate between pages</h1>
          <p>
            Go to
            <Link className="btn btn-primary" to="/aboutUs">
              About Us ➙
            </Link>
            page
          </p>
        </div>
      </div>
    </>
  );
}

export default HomePage;
