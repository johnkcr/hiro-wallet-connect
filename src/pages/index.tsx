import { useAccount } from '@micro-stacks/react';
import { useRouter } from 'next/router';

import { AccountDetail } from '@/components/account-detail';
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const Index = () => {
  const router = useRouter();

  const { stxAddress } = useAccount();

  return (
    <Main
      meta={
        <Meta
          title="Next.js Boilerplate Presentation"
          description="Next js Boilerplate is the perfect starter code for your project. Build your React application with the Next.js framework."
        />
      }
    >
      <h1 className="text-2xl font-bold"></h1>
      {stxAddress && <AccountDetail address={address} />}
    </Main>
  );
};

export default Index;
