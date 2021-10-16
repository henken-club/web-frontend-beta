/// <reference types="node" />

declare namespace NodeJS {
  interface ProcessEnv extends NodeJS.ProcessEnv {
    readonly NODE_ENV: "development" | "production" | "test";

    readonly NEXT_PUBLIC_GRAPHQL_API_ENDPOINT: string;
    readonly NEXT_PUBLIC_MSW_ENABLED?: "true";
    readonly NEXT_PUBLIC_MOCK_AUTH0_ENABLED?: "true";

    readonly NEXT_PUBLIC_AUTH0_DOMAIN: string;
    readonly NEXT_PUBLIC_AUTH0_CLIENT_ID: string;
    readonly NEXT_PUBLIC_AUTH0_AUDIENCE: string;
    readonly NEXT_PUBLIC_AUTH0_REDIRECT_URI: string;
  }
}
