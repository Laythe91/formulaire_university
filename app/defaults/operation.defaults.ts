import { OperationType } from "@/types/operation.type";

export const operationDefaults: OperationType = {
  state: false,
  annuel: { state: false },
  ponctuel: { state: false },
  plus400h: { state: false },
  danger: { state: false },
  date: {
    start: "",
    end: "",
  },
  objet: "",
};
