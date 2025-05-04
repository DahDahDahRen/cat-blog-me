import Navbar from "../../components/Navbar/Navbar";
import Button from "../../components/Button/Button";
import Container from "../../layout/Container/Container";
import NavBarContent from "../../components/NavBarContent/NavBarContent";
import StyledHome from "./Home.styled";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <StyledHome>
      <Navbar>
        <Container>
          <NavBarContent />
        </Container>
      </Navbar>

      <header>
        <Container>
          <div className="header-content">
            <div className="header-content_text">
              <h1 className="heading-one">
                🐈 CatBlog — Where Every Meow Has a Story
              </h1>

              <p className="sub-heading">
                Discover, share, and celebrate the internet’s favorite
                companions—one whisker at a time.
              </p>
            </div>

            <div className="header-content_panel">
              <div className="header-content_container">
                <Link to="/register">
                  <Button size="large">Register</Button>
                </Link>
                <span>or</span>
                <Link to="/signup">
                  <Button size="large">Sign Up</Button>
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </header>
    </StyledHome>
  );
}
