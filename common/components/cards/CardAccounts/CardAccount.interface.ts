export interface CardAccountProps {
  /**
   * Determina o saldo geral da conta
   */
  generalBalance?: number;

  /**
   * Determina se o valor está visivel ou não
   */
  visible?: boolean;

  /**
   * Determina a lista de contas
   */
  accounts?: Accounts[];
}

export interface Accounts {
  /**
   * Determina o nome da conta
   */
  name?: string;

  /**
   * Src da imagem do banco da conta
   */
  src?: string;

  /**
   * Determina o valor que tem na conta
   */
  generalBalance: number;

  /**
   * Determina o link de redirecionamento dos detalhes de conta
   */
  link?: string;
}