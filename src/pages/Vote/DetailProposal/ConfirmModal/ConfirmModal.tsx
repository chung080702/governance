import { Box, Dialog, DialogContent, DialogTitle, Grid } from '@mui/material';
import { useState } from 'react';
import Moment from 'react-moment';
import BootstrapButton from 'src/components/primitives/BootstrapButton';
import { useDetailProposalContext } from 'src/contexts/detail-proposal-context';
import { useWeb3Context } from 'src/contexts/web3-context';
import { useGovernorDelegateContract, useVotingContract } from 'src/hooks/useContract';
import useNotifier from 'src/hooks/useNotifier';

declare global {
  interface Window { snarkjs: any; }
}

type Props = {
  data: 'For' | 'Against';
  open: boolean;
  idPropsal: string;
  votingPower: string | number;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  closeModal: any;
  pubKey: string
};

export default function ConfirmModal(props: Props) {
  const { notifyError, notifySuccess } = useNotifier();
  const { fetch } = useDetailProposalContext();
  const governorDelegateContract = useGovernorDelegateContract(true);
  const votingContract = useVotingContract(true);
  const [loadingVote, setLoadingVote] = useState(false);
  const { address } = useWeb3Context();


  async function vote(idProposal: string, choice: 1 | 0) {
    setLoadingVote(true);

    try {
      if (!address || !votingContract) {
        console.log(address, votingContract);
        throw new Error('Wallet connection error');
      }
      // await (await votingContract.).wait();
      const r = BigInt(Math.floor(Math.random() * 1000000));
      const kx = BigInt(Math.floor(Math.random() * 1000000));
      const kr = BigInt(Math.floor(Math.random() * 1000000));
      const PUBLIC_URL = window.location.origin + '/governance';
      console.log(window.snarkjs)
      const { proof, publicSignals } = await window.snarkjs.groth16.fullProve(
        {
          xFake: props.votingPower,
          sign: choice,
          X: props.votingPower,
          r,
          g: 7907,
          h: 7867,
          D: props.pubKey,
          kX: kx,
          kR: kr,
        },
        PUBLIC_URL + '/vote.wasm',
        PUBLIC_URL + '/vote.zkey'
      );
      const callData = (
        await window.snarkjs.groth16.exportSolidityCallData(proof, publicSignals)
      )
        .toString()
        .split(',')
        .map((e: any) => {
          e = e.replaceAll('[', '');
          e = e.replaceAll(']', '');

          e = e.replaceAll('"', '');
          return e;

        });
      const a = callData.slice(0, 2).map((e: any) => BigInt(e));
      const b: any[2][2] = [callData.slice(2, 4).map((e: any) => BigInt(e)), callData.slice(4, 6).map((e: any) => BigInt(e))];

      const c = callData.slice(6, 8).map((e: any) => BigInt(e));
      const publicInputs = callData.slice(8, callData.length).map((e: any) => BigInt(e));
      ///console.log(a, b, c, publicInputs)
      await (await votingContract.votePoll(a, b, c, idProposal, publicInputs[0],
        { gammaX: publicInputs[1], deltaX: publicInputs[2], gammaR: publicInputs[3], deltaR: publicInputs[4] }, [])).wait();

      notifySuccess('Vote successfully');
      fetch(props.idPropsal);
    } catch (error) {
      console.log(error)
      // console.error('Failed to call vote function: ', error);
      notifyError('Vote fail! ' + (error as Error).message);
    }
    setLoadingVote(false);
  }
  const handleClose = () => {
    props.closeModal();
  };
  async function onVoteAction() {
    if (props.data == 'For') {
      await vote(props.idPropsal, 1);
    } else {
      await vote(props.idPropsal, 0);
    }

    handleClose();
  }
  return (
    <Dialog
      open={props.open}
      onClose={
        loadingVote
          ? () => {
            return;
          }
          : handleClose
      }
      fullWidth
      maxWidth="xs"
    >
      <DialogTitle style={{ fontWeight: 700 }}>Confirm to cast this vote</DialogTitle>
      <DialogContent sx={{ position: 'relative' }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
          <span>Checkpoint</span>
          <span>
            <Moment date={Date.now()} format="MMMM Do yyyy, hh:mm A" />
          </span>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
          <span>Voting Power</span>
          <span>{props.votingPower}</span>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
          <span>Option</span>
          <span style={{ fontWeight: 'bold', color: props.data === 'For' ? '#03BD9D' : '#F06542' }}>{props.data}</span>
        </Box>
        <br />
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <BootstrapButton
              loading={loadingVote}
              disabled={loadingVote}
              variant="contained"
              color="secondary"
              fullWidth
              onClick={handleClose}
            >
              Cancel
            </BootstrapButton>
          </Grid>
          <Grid item xs={6}>
            <BootstrapButton
              loading={loadingVote}
              disabled={loadingVote}
              variant="contained"
              color="primary"
              fullWidth
              onClick={onVoteAction}
            >
              Confirm
            </BootstrapButton>
          </Grid>
        </Grid>
      </DialogContent>
    </Dialog>
  );
}
