export interface HomeOverviewProps {
  /**
   * Determina o nome do usuario
   */
  userName?: string | null;

  /**
   * Determina a foto do usuário
   */
  srcAvatar?: string;

  /**
   * Determina botão para deslogar
   */
  onDisconnect?: () => void;
}