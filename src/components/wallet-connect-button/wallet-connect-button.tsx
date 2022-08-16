import { useAccount, useAuth } from '@micro-stacks/react';

export const WalletConnectButton: React.FC = () => {
  const { openAuthRequest, isRequestPending, signOut, isSignedIn } = useAuth();
  const { stxAddress } = useAccount();

  const label = isRequestPending
    ? 'Loading...'
    : isSignedIn
    ? 'Sign out'
    : 'Connect Stacks wallet';

  return (
    <div>
      {stxAddress || null}
      <button
        className="rounded bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700"
        onClick={async () => {
          if (isSignedIn) await signOut();
          else await openAuthRequest();
        }}
      >
        {label}
      </button>
    </div>
  );
};
