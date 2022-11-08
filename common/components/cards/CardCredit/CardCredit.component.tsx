import type { FunctionComponent } from 'react';
import type { CardCreditProps } from './CardCredit.interface';
import { Stack } from '@mui/material';
import {
  Card,
  CardButton,
  CardDescription,
  CardMessage,
  CardTitle,
} from './CardCredit.styles';
import Image from 'next/image';
import CreditCard from '../../../../public/images/creditCard.png';

export const CardCredit: FunctionComponent<CardCreditProps> = ({
  title,
  subtitle,
  description,
  button,
}) => {
  return (
    <Card>
      <Stack
        direction="column"
        justifyContent="flex-start"
        alignItems="flex-start"
      >
        <CardTitle>{title}</CardTitle>
        <Stack
          direction="column"
          justifyContent="center"
          alignItems="center"
          width="100%"
        >
          <Image src={CreditCard} alt="credCard" height={24} width={40} />
          <CardMessage>{subtitle}</CardMessage>
          <CardDescription>{description}</CardDescription>
          <CardButton disabled>{button}</CardButton>
        </Stack>
      </Stack>
    </Card>
  );
};
