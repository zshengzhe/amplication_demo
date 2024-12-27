import { HelloMessageEntityWhereInput } from "./HelloMessageEntityWhereInput";
import { HelloMessageEntityOrderByInput } from "./HelloMessageEntityOrderByInput";

export type HelloMessageEntityFindManyArgs = {
  where?: HelloMessageEntityWhereInput;
  orderBy?: Array<HelloMessageEntityOrderByInput>;
  skip?: number;
  take?: number;
};
