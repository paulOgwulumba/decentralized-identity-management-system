'use client';

import classNames from 'classnames';
import { Button } from '@/components/buttons';
import { useWallet } from '@txnlab/use-wallet';
import { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';
import { ConnectWalletVisibleAtom } from '@/state';

interface Props {
  onCancel: () => void;
  dids: string[];
}

export const VerifyDids = ({ onCancel, dids }: Props) => {
  const { activeAddress } = useWallet();
  const setWalletConnect = useSetRecoilState(ConnectWalletVisibleAtom);

  // useEffect(() => {
  //   if (activeAddress) {
  //     onWalletConnect();
  //   }
  // }, [activeAddress]);

  return (
    <div
      className={classNames(
        'flex flex-col w-[100%] h-[100%] mt-5 lg:mt-10',
        'justify-center items-center',
      )}
    >
      <div
        className={classNames(
          'flex flex-col w-[100%] max-w-[600px] bg-white',
          'gap-8 py-10 px-8 rounded-lg min-h-[400px]',
        )}
        style={{ boxShadow: '0px 12px 16px -4px #10182814' }}
      >
        <h1 className="text-2xl font-[600] text-center">Select the DID you want to proceed with</h1>
        {dids.map((did) => (
          <p key={did} className="flex text-base text-center text-[#8a8a8a] font-[500]">
            {did.slice(0, 50)}...
            {did.slice(did.length - 10, did.length)}
          </p>
        ))}
        <Button onClick={() => setWalletConnect(true)} className="mt-[auto]">
          Connect wallet to get or create your DID
        </Button>
      </div>
    </div>
  );
};
