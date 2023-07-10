import { Projects, About, Skills, Contacts } from '../components';
import Head from 'next/head';
import Layout from '../components/layout/layout';

const MainPage = () => (
  <Layout>
    <Head>
      <title>Луговской Максим: Партфолио</title>
    </Head>
    <Projects />
    <About />
    <Skills />
    <Contacts />
  </Layout>
);
export default MainPage;
