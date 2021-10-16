// eslint-disable-next-line import/no-extraneous-dependencies
import { loadEnvConfig } from "@next/env";

export default async (): Promise<void> => {
  loadEnvConfig(process.cwd());
};
