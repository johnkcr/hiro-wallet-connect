import useFetch from './useFetch';

const END_POINT = `https://stacks-node-api.testnet.stacks.co/extended/v1/address`;

export const useAccountTransactions = (address: string) => {
  const { data, error } = useFetch(`${END_POINT}/${address}/transactions`);
  return { data, error };
};
