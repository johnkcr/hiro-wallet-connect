import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const About = () => (
  <Main
    meta={
      <Meta
        title="Next.js Boilerplate Presentation"
        description="Next js Boilerplate is the perfect starter code for your project. Build your React application with the Next.js framework."
      />
    }
  >
    <h1 className="text-2xl font-bold">About</h1>
    <section>
      <ul>
        <li>Wallet login</li>
        <li>Account balances</li>
        <li>Transaction History</li>
      </ul>
    </section>
  </Main>
);

export default About;
