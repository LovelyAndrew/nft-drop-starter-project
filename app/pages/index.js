import React, { useEffect } from 'react';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import { useWallet } from '@solana/wallet-adapter-react';

import { PhantomWalletAdapter } from '@solana/wallet-adapter-wallets';
import CandyMachine from '../components/CandyMachine';

// Constants
const TWITTER_HANDLE = '_buildspace';
const TWITTER_LINK = `https://twitter.com/${TWITTER_HANDLE}`;

const Home = () => {
  const wallet = useWallet();

  const renderNotConnectedContainer = () => (
    <div>
      <img
        src="https://media.giphy.com/media/eSwGh3YK54JKU/giphy.gif"
        alt="emoji"
      />
      <div className="button-container">
        <WalletMultiButton className="cta-button connect-wallet-button" />
      </div>
    </div>
  );

  useEffect(() => {
    if (
      wallet.publicKey &&
      wallet.wallet.adapter instanceof PhantomWalletAdapter
    ) {
      console.log(`My Public Key: ${wallet.publicKey}`);
    }
  }, [wallet]);

  return (
    <div className="App">
      <div className="container">
        <div className="header-container">
          <p className="header">🍭 Candy Drop</p>
          <p className="sub-text">NFT drop machine with fair mint</p>
          {wallet.publicKey ? (
            <CandyMachine walletAddress={wallet} />
          ) : (
            renderNotConnectedContainer()
          )}
        </div>
        <div className="footer-container">
          <img
            alt="Twitter Logo"
            className="twitter-logo"
            src="twitter-logo.svg"
          />
          <a
            className="footer-text"
            href={TWITTER_LINK}
            target="_blank"
            rel="noreferrer"
          >{`built on @${TWITTER_HANDLE}`}</a>
        </div>
      </div>
    </div>
  );
};

export default Home;
