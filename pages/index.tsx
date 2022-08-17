import { SplatScreen } from '../common/components/screen';
import { splatScreenProps } from '../common/components/screen/SplatScreen.mock';
import { Box } from '@mui/material';

export default function Home() {
  return (
    <Box>
      <SplatScreen {...splatScreenProps} />
    </Box>
  );
}
