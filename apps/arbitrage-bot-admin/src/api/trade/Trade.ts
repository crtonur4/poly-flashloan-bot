import { ArbitragePath } from "../arbitragePath/ArbitragePath";

export type Trade = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  initialAmount: number | null;
  profit: number | null;
  timestamp: Date | null;
  arbitragePath?: ArbitragePath | null;
};
