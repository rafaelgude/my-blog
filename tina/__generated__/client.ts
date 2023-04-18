import { createClient } from "tinacms/dist/client";
import { queries } from "./types";
export const client = createClient({ url: 'https://content.tinajs.io/1.4/content/2a8e0a04-456f-4e85-b959-6cce8fce9128/github/main', token: '1ead0d9090b0e7bfb37ac5d6119eafe3bbed7042', queries });
export default client;
  