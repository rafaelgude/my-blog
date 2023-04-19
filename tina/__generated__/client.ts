import { createClient } from "tinacms/dist/client";
import { queries } from "./types";
export const client = createClient({ url: 'http://localhost:4001/graphql', token: '1ead0d9090b0e7bfb37ac5d6119eafe3bbed7042', queries });
export default client;
  