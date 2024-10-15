//TODO: Remove if unused
import { Container } from 'src/atoms/Container';

import { main, layout } from './style.module.css';

export const Main = ({ children }) => {
  return (
    <main
      className={main}
      style={
        {
          //TODO: get the NavHeight by context
          //marginBlockStart: NavHeight,
        }
      }
    >
      <Container>
        <div className={layout}>{children}</div>
      </Container>
    </main>
  );
};
