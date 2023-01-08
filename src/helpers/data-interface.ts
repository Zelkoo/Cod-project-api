export interface PistolData {
  lifetime: {
    itemData: {
      weapon_pistol: {
        iw8_pi_cpapa: {
          properties: WeaponPropertiesData;
        };
        iw8_pi_mike1911: {
          properties: WeaponPropertiesData;
        };
        iw8_pi_golf21: {
          properties: WeaponPropertiesData;
        };
        iw8_pi_decho: {
          properties: WeaponPropertiesData;
        };
        iw8_pi_papa320: {
          properties: WeaponPropertiesData;
        };
        iw8_pi_mike9: {
          properties: WeaponPropertiesData;
        };
      };
    };
  };
}
export interface WeaponPropertiesData {
  hits: number
  kills: number
  kdRatio: number
  headshots: number
  accuracy: number
  shots: number
  deaths: number

}
