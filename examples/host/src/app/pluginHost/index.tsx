import styled from "@emotion/styled";
import { initHost } from "@waterclick/plugin-host";
import { ClientMethods } from "@waterclick/plugin-shared";
import { AsyncMethodReturns } from "penpal";
import React, { useCallback, useEffect, useState } from "react";

import { apiBridgeMethods } from "../../apiBridge";

const StyledIFrame = styled.iframe`
  width: 100%;
  height: 400px;
`;

export const PluginHost: React.FC = () => {
  const [iframeEl, setIframeEl] = useState<HTMLIFrameElement | null>(null);
  const [client, setClient] = useState<AsyncMethodReturns<ClientMethods> | null>(null);

  const refCallback = useCallback((el: HTMLIFrameElement) => {
    if (el !== null) {
      setIframeEl(el);
    }
  }, []);

  useEffect(() => {
    if (!iframeEl) {
      return;
    }

    iframeEl.src = "http://localhost:9091";

    initHost(apiBridgeMethods, iframeEl).then((clientApi) => setClient(clientApi));
  }, [iframeEl]);

  return (
    <div>
      <div>{client === null ? "Connecting to client iframe..." : "Connected to client iframe."}</div>
      <StyledIFrame title="Plugin Client" ref={refCallback} />
    </div>
  );
};
