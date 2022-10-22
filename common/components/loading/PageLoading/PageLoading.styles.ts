/* eslint-disable sonarjs/no-duplicate-string */
import { styled, alpha } from '@mui/material/styles';
import { Stack, Typography } from '@mui/material';


export const Container = styled(Stack)(({ theme }) => ({
  width: '100%',
  height: '90vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  '.line': {
    position: 'relative',
    width: '40rem',
    height: '0.6rem',
    borderRadius: '3rem',
    background: theme.palette.grey[400],
    transform: 'scale(0.60)',
  },

  '.line::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    width: 0,
    borderRadius: '3rem',
    height: '100%',
    background: theme.palette.primary.main,
    animation: 'line_drow 10s ease-out infinite',
    animationTimingFunction: 'cubic-bezier(0.71, 0.22, 0.29, 0.73)',
  },

  '.line .pen': {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '25rem',
    height: '4rem',
    lineHeight: '4rem',
    background: alpha(theme.palette.primary.main, 0.125),
    textAlign: 'center',
    transform: 'translate(1%, -365%) rotate(-45deg)',
    transformOrigin: 'center',
    animation: 'pen_move 10s ease-out infinite',
    animationTimingFunction: 'cubic-bezier(0.71, 0.22, 0.29, 0.73)',
  },

  '.line .pen .pen_overlay': {
    position: 'absolute',
    top: 0,
    left: 0,
    height: '100%',
    width: '100%',
    overflow: 'hidden',
  },

  '.line .pen .pen_overlay::after': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    height: '100%',
    width: '100%',
    background: theme.palette.primary.main,
    zIndex: -1,
    animation: 'color_empty 10s ease-out infinite',
    animationTimingFunction: 'cubic-bezier(0.71, 0.22, 0.29, 0.73)',
  },

  '.line .pen .pen_overlay::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    right: 0,
    height: '100%',
    width: '0%',
    background: theme.palette.primary.main,
    zIndex: -1,
    animation: 'color_full 10s ease-out infinite',
    animationTimingFunction: 'cubic-bezier(0.71, 0.22, 0.29, 0.73)',
  },

  '.line .pen .pen_top': {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '8%',
    height: '100%',
    transform: 'translateX(-95%)',
    background: theme.palette.grey[800],
  },

  '.line .pen .pen_top::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    height: '0.8rem',
    borderStyle: 'solid',
    borderColor: `transparent ${theme.palette.grey[800]} transparent transparent`,
    borderWidth: '2rem 4rem 2rem 0',
    transform: 'translateX(-101%)',
  },

  '.line .pen .pen_top::after': {
    content: '""',
    position: 'absolute',
    top: '50%',
    left: '-100%',
    width: '1rem',
    height: '1rem',
    borderRadius: '1rem 0 0 1rem',
    background: theme.palette.primary.main,
    transform: 'translate(-215%, -50%)',
  },

  '.line .pen .pen_bottom': {
    position: 'absolute',
    top: 0,
    right: 0,
    width: '12%',
    height: '102%',
    borderRadius: '0 0.8rem 0.8rem 0',
    transform: 'translate(90%, -1%)',
    background: theme.palette.grey[800],
  },

  '@keyframes line_drow': {
    '0%, 90%, 100%': { width: 0 },
    '50%, 60%': { width: '100%' },
  },

  '@keyframes color_empty': {
    '0%': { left: 0 },
    '50%, 60%': { left: '100%' },
    '90%, 100%': { left: '-100%' },
  },

  '@keyframes color_full': {
    '0%': { width: 0 },
    '50%, 60%': { width: 0 },
    '90%, 100%': { width: '100%' },
  },

  '@keyframes pen_move': {
    '0%': {
      left: 0,
      transform: 'translate(1%, -365%) rotate(-45deg)',
    },

    '50%': {
      left: '100%',
      transform: 'translate(1%, -365%) rotate(-45deg)',
    },

    '55%': {
      left: '100%',
      transform: 'translate(1%, -385%) rotate(-45deg)',
    },

    '60%': {
      left: '100%',
      transform: 'translate(-8%, -310%) rotate(140deg)',
    },

    '90%': {
      left: '0%',
      transform: 'translate(-8%, -310%) rotate(140deg)',
    },

    '95%': {
      left: '0%',
      transform: 'translate(-8%, -450%) rotate(140deg)',
    },

    '100%': {
      left: '0%',
      transform: 'translate(1%, -365%) rotate(315deg)',
    },
  },
}));


export const Text = styled(Typography)(({ theme }) => ({
  fontWeight: 500,
  fontSize: '1.40rem',
  letterSpacing: '0.065em',
  marginTop: theme.spacing(1),
}));
