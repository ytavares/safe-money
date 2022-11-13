import { CardAccountProps } from "./CardAccount.interface";

export const cardAccountMock: CardAccountProps = {
  accounts: [
    {
      accountBank: 'Conta padrão',
      generalBalance: 200,
      link: ''
    },
    {
      accountBank: 'Nubank',
      generalBalance: -600,
      link: ''
    },
  ]
}