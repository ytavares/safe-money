export interface DialogAddAccountProps {
  /**
   * Determina se a caixa de dialogo está aberta
   */
  open: boolean;

  /**
   * Evento emitido ao fechar a caixa de dialogo
   */
  onClose?: () => void;

  /**
   * Evento emitido ao submeter o formulário
   */
  onSubmit?: () => void;

}