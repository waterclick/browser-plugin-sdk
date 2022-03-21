import { ClientMethods, WaterClickAPIMethods } from "@waterclick/plugin-shared";
import { AsyncMethodReturns, connectToParent } from "penpal";

export const initClient = async (
  clientAPI: ClientMethods,
): Promise<AsyncMethodReturns<WaterClickAPIMethods>> =>
  await connectToParent<WaterClickAPIMethods>({
    methods: clientAPI,
  }).promise;
