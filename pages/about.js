import Layout from "../components/Layout";

function About({ test }) {
  return (
    <Layout>
      <h1 class="title">About Us</h1>
      Random value with SSR: {test}
    </Layout>
  );
}

export async function getServerSideProps(context) {
  return {
    props: {
      test: Math.random()
    }
  };
}

export default About;
