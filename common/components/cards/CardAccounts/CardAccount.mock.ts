import { CardAccountProps } from "./CardAccount.interface";

export const cardAccountMock: CardAccountProps = {
  generalBalance: 800,
  accounts: [
    {
      name: 'Conta padrão',
      generalBalance: 200,
      link: ''
    },
    {
      name: 'Nubank',
      generalBalance: -600,
      link: ''
    },
  ]
}