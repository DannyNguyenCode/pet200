import { styled } from '@mui/material/styles';
import Button, { ButtonProps } from '@mui/material/Button';



export const AddPetButton = styled(Button)<ButtonProps>(({ theme }) => ({
    color: theme.palette.common['white'],
    backgroundColor: theme.palette.info.light,
    border:'none',
    '&:hover': {
      color: theme.palette.common['white'],
      border:'none',
      backgroundColor: theme.palette.info.dark,
    },
  }));

export const SigninButton = styled(Button)<ButtonProps>(({ theme }) => ({
    color: theme.palette.common['white'],
    backgroundColor: theme.palette.info.light,
    border:'none',
    '&:hover': {
      color: theme.palette.common['white'],
      border:'none',
      backgroundColor: theme.palette.info.dark,
    },
  }));