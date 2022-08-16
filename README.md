# Stacks Development Introduction

## References
* [Hiro Wallet](https://wallet.hiro.so/)
* [Api URL](https://stacks-node-api.testnet.stacks.co)
* [Stacks API + Faucet](https://docs.hiro.so/api#tag/Faucets)
* [Microstacks](https://micro-stacks.dev/)

## Prompt

Download Hiro wallet and create an account. 

Call the Faucet endpoint on the stacks API using your new wallet testnet address as an argument, to receive testnet STX.

Using the Microstacks docs, build a Next.js page with the following:

* Wallet login
* Account balances
* Transaction History

Stacks blocks take about 10 min to propagate, so transactions will be pending for around this time after called. Use websockets to update the states of transactions in the transaction history view from pending state to confirmed.