export type OperationType = {
  state: boolean;
  annuel: { state: boolean };
  ponctuel: { state: boolean };
  plus400h: { state: boolean };
  danger: { state: boolean };
  date: {
    start: string;
    end: string;
  };
  objet: string;
};
