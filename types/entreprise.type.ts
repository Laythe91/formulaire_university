export type EntrepriseRenseignement = {
  state: boolean;
  effectif1: string;
  effectif2: string;
};

export type EntrepriseInformation = {
  state: boolean;
};

export type EntreprisePersonne = {
  state: boolean;

  checkbox: {
    state: boolean;
  };

  name: string;
  address: string;
  effectif: string;

  tel: string;
  fax: string;

  representant: {
    name: string;
    tel: string;
    mail: string;
  };

  responsable: {
    name: string;
    tel: string;
    mail: string;
  };
};

export type EntrepriseType = {
  renseignement: EntrepriseRenseignement;
  titulaire: EntreprisePersonne;
  soustraitante: EntreprisePersonne;
  information: EntrepriseInformation;
};
