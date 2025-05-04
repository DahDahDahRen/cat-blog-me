import Button from "../Button/Button";

export default function NavBarContent() {
  return (
    <div className="navbar-content">
      <div>
        <span className="navbar-logo">CatBlog</span>
      </div>

      <div>
        <Button size="small">Sign Up</Button>
      </div>
    </div>
  );
}
