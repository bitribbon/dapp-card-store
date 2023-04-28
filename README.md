# BitRibbon Store Dapp

TL;DR:

The BitRibbon Store Dapp is a modification of the Baseball Card Store Dapp.

Install the
[prerequisites](https://agoric.com/documentation/getting-started/before-using-agoric.html).

Install the sdk & checkout the community-dev branch
```sh
cd agoric-sdk
git checkout community-dev
yarn && yarn build
```

Install the dapp & Initialize VM
```sh
# Terminal 1
git clone https://github.com/bitribbon/dapp-card-store.git
cd dapp-card-store
agoric install
agoric start --reset --verbose
```

Open the Agoric Wallet and REPL UI
```sh
# Terminal 2
cd dapp-card-store
agoric open --repl
```

Deploy the Contract and API
```sh
# Terminal 2
agoric deploy ./contract/deploy.js
agoric deploy ./api/deploy.js
```

Start the Dapp UI
```sh
# Terminal 3
cd dapp-card-store
cd ui && yarn start
```


## Using the Dapp

1. A window for your wallet should open.
2. Under "Dapps" in the wallet, enable the CardStore Dapp.
3. A compilation error may show up on the Dapp store. Close it and refresh the page.
4. Now you should be able to click on a card to make an offer to buy
   it.
5. Approve the offer in your wallet
6. View the card in your wallet.


See the [Dapp Deployment Guide](https://github.com/Agoric/agoric-sdk/wiki/Dapp-Deployment-Guide) for how to deploy this Dapp on a public website, such as https://cardstore.testnet.agoric.com/
