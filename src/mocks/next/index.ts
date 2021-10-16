/* eslint-disable @typescript-eslint/no-var-requires */

if (typeof window === "undefined") {
  const { mockServer } = require("./server");
  mockServer.listen({ onUnhandledRequest: "bypass" });
} else {
  const { mockWorker } = require("./browser");
  mockWorker.start({ onUnhandledRequest: "bypass" });
}
export {};
