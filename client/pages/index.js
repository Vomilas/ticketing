import buildClient from "../api/build-client";

const LandingPage = ({ currentUser }) => {
  return <h1>Main page</h1>;
};

LandingPage.getInitialProps = async context => {
  const client = buildClient(context);
  const { data } = client.get("/api/users/currentuser");

  return data;
};

export default LandingPage;
