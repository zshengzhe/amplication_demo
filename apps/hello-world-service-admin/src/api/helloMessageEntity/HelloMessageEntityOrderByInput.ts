import { SortOrder } from "../../util/SortOrder";

export type HelloMessageEntityOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  message?: SortOrder;
  name?: SortOrder;
  updatedAt?: SortOrder;
};
