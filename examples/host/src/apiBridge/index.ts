import { WaterClickAPIMethods } from "@waterclick/plugin-shared";

export const apiBridgeMethods: WaterClickAPIMethods = {
  sayHello: () => {
    console.log("sayHello executing in Host");
    return "hi thar";
  },
  doSomethingThatTakesAWhile: async (): Promise<string> => {
    console.log("doSomethingThatTakesAWhile executing in Host");
    await new Promise((resolve) => setTimeout(resolve, 2000));

    return "Whew, that took a while";
  },
};
