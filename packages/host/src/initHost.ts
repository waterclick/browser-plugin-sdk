import { ClientMethods, WaterClickAPIMethods } from "@waterclick/plugin-shared";
import { AsyncMethodReturns, connectToChild } from "penpal";

export const initHost = async (
  apiMethods: WaterClickAPIMethods,
  iframe: HTMLIFrameElement,
): Promise<AsyncMethodReturns<ClientMethods>> =>
  await connectToChild<ClientMethods>({
    iframe,
    methods: apiMethods,
  }).promise;
