export interface AccountsListProps {
  list?: List[];
}

export interface List {
  /**
   * Determina o id da lista
   */
  uid?: string;

  /**
   * Nome da conta
   */
  accountName?: string;

  /**
  * Categoria da conta
  */
  category?: string;

  /**
  * Valor da conta
  */
  amount?: number;

  /**
   * Tipo de conta
   */
  accountType?: string;
}