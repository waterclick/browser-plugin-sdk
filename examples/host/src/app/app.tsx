import styled from "@emotion/styled";

import { Header } from "./header";
import { PluginHost } from "./pluginHost";

const StyledApp = styled.div`
  // Your style here
`;

export function App() {
  return (
    <StyledApp>
      <Header />
      <PluginHost />
    </StyledApp>
  );
}

export default App;
