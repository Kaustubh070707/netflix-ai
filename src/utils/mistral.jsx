import { Mistral } from "@mistralai/mistralai";
import { MISTRAL_API_KEY } from "./constants";
const apiKey = MISTRAL_API_KEY;

const mistralSearch = new Mistral({ apiKey: apiKey });

export default mistralSearch;
