'use client';

import classNames from 'classnames';
import styles from './index.module.scss';
import { Button } from '@/components/buttons';
import { useEffect, useState } from 'react';
import { Welcome } from './welcome';
import { useWallet } from '@txnlab/use-wallet';
import { GettingDid } from './getting-did';
import { VerifyDids } from './verify-did';

export const NewHome = () => {
  const { activeAddress } = useWallet();
  const [view, setView] = useState<'welcome' | 'getting-did' | 'create-did' | 'verify-did'>(
    'welcome',
  );
  const [dids, setDids] = useState<string[]>([]);

  useEffect(() => {}, []);

  return (
    <main className={styles.container}>
      {view === 'welcome' && <Welcome onWalletConnect={() => setView('getting-did')} />}
      {view === 'getting-did' && (
        <GettingDid
          onCancel={() => setView('welcome')}
          onGetDids={(dids) => {
            setDids(dids);
            setView('verify-did');
          }}
        />
      )}
      {view === 'verify-did' && <VerifyDids dids={dids} onCancel={() => setView('welcome')} />}
    </main>
  );
};
