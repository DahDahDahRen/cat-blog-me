import Navbar from "../../components/Navbar/Navbar";
import NavBarContent from "../../components/NavBarContent/NavBarContent";
import Container from "../../layout/Container/Container";

export default function SignUp() {
  return (
    <div>
      <Navbar>
        <Container>
          <NavBarContent />
        </Container>
      </Navbar>

      <h1>Sign Up</h1>
    </div>
  );
}
