export interface IsShippingField {
  typeRegistration: string;
  INNSearch: number | string;
  typeOrgnization: string;
  nameOrgnization: string;
  INN: number;
  KPP: number;
  OGRN: number;
  adress: string;
  matchesTheActualAddress: boolean;
  taxRegime: string;
  VAT_Rate: string;
}

export interface Props {
  name: string;
}
