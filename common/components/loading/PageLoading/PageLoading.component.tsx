import type { FunctionComponent } from 'react';
import type { PageLoadingProps } from './PageLoading.interface';

import { Container, Text } from './PageLoading.styles';

export const PageLoading: FunctionComponent<PageLoadingProps> = () => {
  return (
    <Container>
      <div className="line">
        <div className="pen">
          <div className="pen_overlay" />
          <div className="pen_top" />
          <div className="pen_bottom" />
        </div>
      </div>

      <Text>Carregando...</Text>
    </Container>
  );
};
