import { UpdateWantedDto } from "./UpdatedWantedDTO";

export class BulkUpdateWantedDto {
  ids: number[];
  bulk_values: { wantedStatus: string; deadOrAlive: boolean}
}
