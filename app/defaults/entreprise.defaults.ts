import { EntrepriseType } from "@/types/entreprise.type";

export const entrepriseDefaults: EntrepriseType = {
  renseignement: {
    state: false,
    effectif1: "",
    effectif2: "",
    soustraitant: "",
  },
  information: {
    state: false,
  },

  titulaire: {
    state: false,
    checkbox: { state: false },

    name: "",
    address: "",
    effectif: "",

    tel: "",
    fax: "",

    representant: {
      name: "",
      tel: "",
      mail: "",
    },

    responsable: {
      name: "",
      tel: "",
      mail: "",
    },
  },

  soustraitante: [],
};
