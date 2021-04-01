import Header from "../components/Header";

function About(props) {
  const user = props.user;

  return (
    <div>
      About Me
      <Header user={user} />
    </div>
  );
}

export default About;
