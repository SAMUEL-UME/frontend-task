import { Container } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import heroImage from "../image/hero.jpg";

export function Home() {
  return (
    <Container className="vh-100 d-flex justify-content-center align-items-center">
      <div className="d-flex justify-content-center mb-5 flex-lg-row flex-md-column">
        <div className="w-m-50">
          <h1 className="display-1 text-primary fw-bold lh-1">
            Online shopping
          </h1>
          <p className="text-dark my-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
            voluptate alias reprehenderit id nesciunt impedit consectetur
            corporis, nostrum voluptates blanditiis.
          </p>
          <Link className="text-decoration-none text-light" to="/store">
            <Button className="w-100 rounded-pill" style={{ width: "100%" }}>
              Shop Now
            </Button>
          </Link>
        </div>
        <div className="w-100 mx-3 d-none  d-lg-block "></div>
      </div>
    </Container>
  );
}
