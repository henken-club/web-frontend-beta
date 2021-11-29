import { setupWorker } from "msw";

import { handlers } from "./handlers";

export const mockWorker = setupWorker(...handlers);
