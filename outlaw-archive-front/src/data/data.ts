import { Chance } from "chance";
import { IOutlawInformations } from "./types/interfaces/GeneralInterfaces";

const chance = new Chance(42);

function createData(id: number): IOutlawInformations {
  return {
    id,
    wantedName: chance.first(),
    wantedStatus: chance.pickone(["Procurado", "Capturado"]),
    bountyValue: chance.dollar({ max: 250 }),
    dearOrAlive: chance.bool(),
    location: chance.pickone([
      "Valentine",
      "Saint Denis",
      "Blackwater",
      "Rhodes",
      "Annesburg",
    ]),
    notes: chance.sentence(),
  };
}

export const data: IOutlawInformations[] = Array.from(
  { length: 200 },
  (_, index) => createData(index + 1)
);
