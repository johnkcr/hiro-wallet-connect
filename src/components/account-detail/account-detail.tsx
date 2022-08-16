import { useAccountBalance } from '@/hooks/use-account-balance';
import { useAccountTransactions } from '@/hooks/use-account-transactions';

interface AccountDetailProps {
  address: string;
}

const AccountBalance: React.FC<AccountDetailProps> = ({ address }) => {
  const { data, error } = useAccountBalance(address);
  if (error) {
    return <div>Unable to fetch the balance</div>;
  }

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Balance: {data && data.balance}</h2>
    </div>
  );
};

const AccountTransactionHistory: React.FC<AccountDetailProps> = ({
  address,
}) => {
  const { data, error } = useAccountTransactions(address);
  if (error) {
    return <div>Unable to fetch the balance</div>;
  }

  if (!data) {
    return <div>Loading...</div>;
  }

  // "tx_id": "0xb16077b94222bc1466396d30df13db460864e85ce929a20aae0a2ac80b31e4e2",
  // "tx_status": "success",
  // "tx_type": "coinbase",
  // "fee_rate": "0",
  // "sender_address": "ST2TJRHDHMYBQ417HFB0BDX430TQA5PXRX6495G1V",
  // "sponsored": false,
  // "post_condition_mode": "deny",
  // "block_hash": "0x83f84f814c1b00ddb672d93b97d06c8326f76746d90a979c12b69e54beb73f69",
  // "block_height": 5603,
  // "burn_block_time": 1594335838,
  // "canonical": true,
  // "is_unanchored": false,
  // "microblock_hash": "0x590a1bb1d7bcbeafce0a9fc8f8a69e369486192d14687fe95fbe4dc1c71d49df",
  // "microblock_sequence": 5,
  // "microblock_canonical": true,
  // "tx_index": 0,
  console.log({ data });

  return (
    <div className="mt-10">
      <h2>Transaction History</h2>
      {data && data.result && data.result.map((v, id) => <div key={id}> </div>)}
    </div>
  );
};

export const AccountDetail: React.FC<AccountDetailProps> = ({ address }) => {
  return (
    <div>
      <AccountBalance address={address} />
      <AccountTransactionHistory address={address} />
    </div>
  );
};
