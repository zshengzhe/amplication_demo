import { HelloMessageEntity as THelloMessageEntity } from "../api/helloMessageEntity/HelloMessageEntity";

export const HELLOMESSAGEENTITY_TITLE_FIELD = "name";

export const HelloMessageEntityTitle = (
  record: THelloMessageEntity
): string => {
  return record.name?.toString() || String(record.id);
};
