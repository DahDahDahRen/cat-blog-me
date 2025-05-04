import Navbar from "../../components/Navbar/Navbar";
import NavBarContent from "../../components/NavBarContent/NavBarContent";
import Container from "../../layout/Container/Container";

export default function Register() {
  return (
    <div>
      <Navbar>
        <Container>
          <NavBarContent />
        </Container>
      </Navbar>

      <h1>Register</h1>
    </div>
  );
}
