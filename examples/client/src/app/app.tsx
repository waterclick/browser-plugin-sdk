import styled from "@emotion/styled";
import { initClient } from "@waterclick/plugin-client";
import { WaterClickAPIMethods } from "@waterclick/plugin-shared";
import { AsyncMethodReturns } from "penpal";
import { useEffect, useState } from "react";
import { useAsyncFn } from "react-use";

import { clientMethods } from "../clientMethods";

const StyledApp = styled.div`
  // Your style here
`;

export function App() {
  const [api, setApi] = useState<AsyncMethodReturns<WaterClickAPIMethods> | null>(null);
  const [fastFnState, doFastFn] = useAsyncFn(async () => await api?.sayHello(), [api]);
  const [slowFnState, doSlowFn] = useAsyncFn(async () => await api?.doSomethingThatTakesAWhile(), [api]);

  useEffect(() => {
    initClient(clientMethods).then((apiClient) => setApi(apiClient));
  }, []);

  useEffect(() => {
    if (api === null) {
      return;
    }

    Promise.all([doFastFn(), doSlowFn()]);
  }, [api, doFastFn, doSlowFn]);

  return (
    <StyledApp>
      <div>{api === null ? "Connecting to parent" : "Connected to parent."}</div>
      {api !== null && (
        <div>
          {fastFnState.loading && "Calling fast function in parent..."}
          {fastFnState.error && "Error calling fast parent function:" + fastFnState.error.message}
          {fastFnState.value && "Fast parent function call result: " + fastFnState.value}
        </div>
      )}
      {api !== null && (
        <div>
          {slowFnState.loading && "Calling slow function in parent..."}
          {slowFnState.error && "Error calling slow parent function:" + slowFnState.error.message}
          {slowFnState.value && "Slow parent function call result: " + slowFnState.value}
        </div>
      )}
      {api !== null && (
        <img
          src="https://dummyimage.com/400x200/000/fff&text=WaterClick+Clicker+Plugin+Here"
          alt="WaterClick Clicker Plugin Here"
        />
      )}
    </StyledApp>
  );
}

export default App;
