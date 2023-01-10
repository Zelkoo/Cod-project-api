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
export interface AssaultRifleData {
  lifetime: {
    itemData: {
      weapon_assault_rifle: {
        iw8_ar_akilo47: {
          properties: WeaponPropertiesData;
        };
        iw8_ar_anovember94: {
          properties: WeaponPropertiesData;
        };
        iw8_ar_asierra12: {
          properties: WeaponPropertiesData;
        };
        iw8_ar_falima: {
          properties: WeaponPropertiesData;
        };
        iw8_ar_falpha: {
          properties: WeaponPropertiesData;
        };
        iw8_ar_galima: {
          properties: WeaponPropertiesData;
        };
        iw8_ar_kilo433: {
          properties: WeaponPropertiesData;
        };
        iw8_ar_mcharlie: {
          properties: WeaponPropertiesData;
        };
        iw8_ar_mike4: {
          properties: WeaponPropertiesData;
        };
        iw8_ar_scharlie: {
          properties: WeaponPropertiesData;
        };
        iw8_ar_tango21: {
          properties: WeaponPropertiesData;
        };
        iw8_ar_valpha: {
          properties: WeaponPropertiesData;
        };
        iw8_ar_sierra552: {
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
