import {Injectable} from "@angular/core";
import {map, Observable} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {AssaultRifleData, PistolData, WeaponPropertiesData} from "./helpers/data-interface";
@Injectable({
  providedIn: 'any'
})
export class DataService {
  ebr14?: WeaponPropertiesData;
  mk2Carbine?: WeaponPropertiesData;
  kark98k?: WeaponPropertiesData;
  crossBow?: WeaponPropertiesData;
  sks?: WeaponPropertiesData;
  srpr208?: WeaponPropertiesData;
  // marksmanRifle
  ak47?:WeaponPropertiesData;
  an94?: WeaponPropertiesData;
  oden?: WeaponPropertiesData;
  fal?: WeaponPropertiesData;
  fr556?: WeaponPropertiesData;
  cr56amax?: WeaponPropertiesData;
  kilo141?: WeaponPropertiesData;
  m13?: WeaponPropertiesData;
  m4a1?: WeaponPropertiesData;
  fnscar17?: WeaponPropertiesData;
  grau556?: WeaponPropertiesData;
  ram7?: WeaponPropertiesData;
  asVal?: WeaponPropertiesData;
  // Pistols
  _357?: WeaponPropertiesData;
  renetti?: WeaponPropertiesData;
  _1911?: WeaponPropertiesData;
  x16?: WeaponPropertiesData;
  _50gs?: WeaponPropertiesData;
  m19?: WeaponPropertiesData;
  // Rocket Luncher
  pila?: WeaponPropertiesData;
  rpg7?: WeaponPropertiesData;
  joker?: WeaponPropertiesData;
  sterlap?: WeaponPropertiesData;
  // Melee Weapon
  knife?: WeaponPropertiesData;
  akimboBlades?: WeaponPropertiesData;
  akimboBlunt?: WeaponPropertiesData;
  shield?: WeaponPropertiesData;
  // RKM
  pkm?: WeaponPropertiesData;
  sa87?: WeaponPropertiesData;
  m91?: WeaponPropertiesData;
  mg34?: WeaponPropertiesData;
  holger26?: WeaponPropertiesData;
  burenMk9?: WeaponPropertiesData;
  rkmFinn?: WeaponPropertiesData;
  kmRaal?: WeaponPropertiesData;
  // Shotgun
  model680?: WeaponPropertiesData;
  r90?: WeaponPropertiesData;
  _725?: WeaponPropertiesData;
  origin12?: WeaponPropertiesData;
  vlkRouge?: WeaponPropertiesData;
  jak12?: WeaponPropertiesData;
  // Sniper
  ax50?: WeaponPropertiesData;
  rytecAmr?: WeaponPropertiesData;
  hdr?: WeaponPropertiesData;
  dragunow: WeaponPropertiesData;
  // Machine Gun
  mp7?: WeaponPropertiesData
  aug?: WeaponPropertiesData
  p90?: WeaponPropertiesData
  iso?: WeaponPropertiesData
  mp5?: WeaponPropertiesData
  striker45?: WeaponPropertiesData
  pp19Bizon?: WeaponPropertiesData
  fennec?: WeaponPropertiesData
  uzi?: WeaponPropertiesData
  // Tactical Equipment
  gasGranate?: any;
  wykrywajacy?: any;
  decoy?: any;
  smoke?: any;
  ogluszajacy?: any;
  sensorPulse?: any;
  flesh?: any;
  adrealine?: any;
// Offensive Equipment
  granate?: any;
  thermit?: any;
  claymore?: any;
  c4?: any;
  mine?: any;
  throwingKnife?: any;
  molotov?: any;
  // Strike Reward
  airStrike?: any
  cruiseMissile?: any
  manualTurret?: any
  whitePhosphorus?: any
  jetVtol?: any
  chopperGunner?: any
  gunShip?: any
  autoTurret?: any
  clusterFire?: any
  colos?: any
  wheelson?: any
  chopperSupport?: any
  airDrop?: any
  chopperRadar?: any
  counterUav?: any
  uav?: any
  superUav?: any
  // ulepszenia polowe
  droneIem?: any;
  trophy?: any;
  supplyDrop?: any;
  drop?: any;
  taktycznyDesan?: any;
  armorBox?: any;
  recon?: any;
  deadSilence?: any;
  tacticShield?: any;
  powerAmmo?: any;
  balon?: any;
  // Account Info
  gameTitle?: string;
  gamePlatform?: string;
  userName?: string;
  accountLevel?: number;
  remainderExp?: number;
  gainedExp?: number;
  prestige?: number;
  totalExp?: number;

  constructor(private http: HttpClient) {
  }

  // headers = new HttpHeaders({
  //   'X-RapidAPI-Key': '',
  //   'X-RapidAPI-Host': 'call-of-duty-modern-warfare.p.rapidapi.com'
  // });
  //
  // public fetchData(): Observable<any> {
  //   return this.http.get('https://call-of-duty-modern-warfare.p.rapidapi.com/multiplayer/Zelkoo/acti', {
  //     headers: this.headers
  //
  //   })
  // }

  public fetchData(): Observable<any> {
    return this.http.get('./assets/cod-data.json');
  }
  getOverviewData(prop: any): Observable<any> {
    return this.fetchData().pipe(map((data: any) => {
      const fullData = data
      const propertiesData = fullData.lifetime.all.properties
      return propertiesData[prop]
    }))
}
  getAssaultRifleData(weaponName: string, properties: string): Observable<any> {
    return this.fetchData().pipe(
      map((data: AssaultRifleData) => {
        const assaultRifle = data.lifetime.itemData.weapon_assault_rifle
        const weapons = {
          ak47: this.ak47 = assaultRifle.iw8_ar_akilo47?.properties,
          an94: this.an94 = assaultRifle.iw8_ar_anovember94?.properties,
          oden: this.oden = assaultRifle.iw8_ar_asierra12?.properties,
          fal: this.fal = assaultRifle.iw8_ar_falima?.properties,
          fr556: this.fr556 = assaultRifle.iw8_ar_falpha?.properties,
          cr56amax: this.cr56amax = assaultRifle.iw8_ar_galima?.properties,

          kilo141: this.kilo141 = assaultRifle.iw8_ar_kilo433?.properties,
          m13: this.m13 = assaultRifle.iw8_ar_mcharlie?.properties,
          m4a1: this.m4a1 = assaultRifle.iw8_ar_mike4?.properties,
          fnscar17: this.fnscar17 = assaultRifle.iw8_ar_scharlie?.properties,
          grau556: this.grau556 = assaultRifle.iw8_ar_sierra552?.properties,
          ram7: this.ram7 = assaultRifle.iw8_ar_tango21?.properties,
          asVal: this.asVal = assaultRifle.iw8_ar_valpha?.properties
        };
        return weapons[weaponName][properties];
      })
    );
  }
  getShotgunRifleData(weaponName: string, properties: string): Observable<any> {
    let weapons: any
    return this.fetchData().pipe(
      map((data: any) => {
        const fullData = data
        const shotgun = fullData.lifetime.itemData.weapon_shotgun
        const weapons: any = {
          model1680: this.model680 = shotgun.iw8_sh_romeo870?.properties,
          r90: this.r90 = shotgun.iw8_sh_dpapa12?.properties,
          _725: this._725 = shotgun.iw8_sh_charlie725?.properties,
          origin12: this.origin12 = shotgun.iw8_sh_oscar12?.properties,
          vlkRouge: this.vlkRouge = shotgun.iw8_sh_mike26?.properties,
          jak12: this.jak12 = shotgun.iw8_sh_aalpha12?.properties,
        };
        return weapons[weaponName][properties];
      })
    );
  }
  getMarksmanRifleData(weaponName: string, properties: string): Observable<any> {
    let weapons: any
    return this.fetchData().pipe(
      map((data: any) => {
        const fullData = data
        const marksmanRifle = fullData.lifetime.itemData.weapon_marksman
        const weapons: any = {
          ebr14: this.ebr14 = marksmanRifle.iw8_sn_sbeta?.properties,
          mk2Carbine: this.mk2Carbine = marksmanRifle.iw8_sn_romeo700?.properties,
          kark98k: this.kark98k = marksmanRifle.iw8_sn_kilo98?.properties,
          crossBow: this.crossBow = marksmanRifle.iw8_sn_crossbow?.properties,
          sks: this.sks = marksmanRifle.iw8_sn_mike14?.properties,
          srpr208: this.srpr208 = marksmanRifle.iw8_sn_sksierra?.properties,
        };
        return weapons[weaponName][properties];
      })
    );
  }
  getLargeMachineGunqData(weaponName: string, properties: string): Observable<any> {
    let weapons: any
    return this.fetchData().pipe(
      map((data: any) => {
        const fullData = data
        const largeMachineGun = fullData.lifetime.itemData.weapon_lmg
        const weapons: any = {
          pkm: this.pkm = largeMachineGun.iw8_lm_pkilo?.properties,
          sa87: this.sa87 = largeMachineGun.iw8_lm_lima86?.properties,
          m91: this.m91 = largeMachineGun.iw8_lm_kilo121?.properties,
          mg34: this.mg34 = largeMachineGun.iw8_lm_mgolf34?.properties,
          holger26: this.holger26 = largeMachineGun.iw8_lm_mgolf36?.properties,
          burenMk9: this.burenMk9 = largeMachineGun.iw8_lm_mkilo3?.properties,
          rkmFinn: this.rkmFinn = largeMachineGun.iw8_lm_sierrax?.properties,
          kmRaal: this.kmRaal = largeMachineGun.iw8_la_mike32?.properties,
        };
        return weapons[weaponName][properties];
      })
    );
  }
  getSniperRifleData(weaponName: string, properties: string): Observable<any> {
    let weapons: any
    return this.fetchData().pipe(
      map((data: any) => {
        const fullData = data
        const sniper = fullData.lifetime.itemData.weapon_sniper
        const weapons: any = {
          ax50: this.ax50 = sniper.iw8_sn_alpha50?.properties,
          rytecAmr: this.rytecAmr = sniper.iw8_sn_xmike109?.properties,
          hdr: this.hdr = sniper.iw8_sn_hdromeo?.properties,
          dragunow: this.dragunow = sniper.iw8_sn_delta?.properties,
        };
        return weapons[weaponName][properties];
      })
    );
  }
  getMachineGunData(weaponName: string, properties: string): Observable<any> {
    return this.fetchData().pipe(
      map((data: any) => {
        const fullData: any = data
        const smg = fullData.lifetime.itemData.weapon_smg
        const weapons: any = {
          mp7: this.mp7 = smg.iw8_sm_mpapa7?.properties,
          aug: this.aug = smg.iw8_sm_augolf?.properties,
          p90: this.p90 = smg.iw8_sm_papa90?.properties,
          iso: this.iso = smg.iw8_sm_charlie9?.properties,
          mp5: this.mp5 = smg.iw8_sm_mpapa5?.properties,
          striker45: this.striker45 = smg.iw8_sm_smgolf45?.properties,
          pp19Bizon: this.pp19Bizon = smg.iw8_sm_beta?.properties,
          fennec: this.fennec = smg.iw8_sm_victor?.properties,
          uzi: this.uzi = smg.iw8_sm_uzulu?.properties,
        };
        return weapons[weaponName][properties];
      })
    );
  }
  getTacticalEqData(weaponName: string, properties: string): Observable<any> {
    let weapons: any
    return this.fetchData().pipe(
      map((data: any) => {
        const fullData = data
        const tacticalsEquipment = fullData.lifetime.itemData.tacticals
        const weapons: any = {
          gasGranate: this.gasGranate = tacticalsEquipment.equip_gas_grenade?.properties,
          wykrywajacy: this.wykrywajacy = tacticalsEquipment.equip_snapshot_grenade?.properties,
          decoy: this.decoy = tacticalsEquipment.equip_decoy?.properties,
          smoke: this.smoke = tacticalsEquipment.equip_smoke?.properties,
          ogluszajacy: this.ogluszajacy = tacticalsEquipment.equip_concussion?.properties,
          sensorPulse: this.sensorPulse = tacticalsEquipment.equip_hb_sensor?.properties,
          flesh: this.flesh = tacticalsEquipment.equip_flash?.properties,
          adrealine: this.adrealine = tacticalsEquipment.equip_adrenaline?.properties,
          granate: this.granate = tacticalsEquipment.equip_frag?.properties,
          thermit: this.thermit = tacticalsEquipment.equip_thermite?.properties,
          claymore: this.claymore = tacticalsEquipment.equip_claymore?.properties,
          c4: this.c4 = tacticalsEquipment.equip_c4?.properties,
          mine: this.mine = tacticalsEquipment.equip_at_mine?.properties,
          throwingKnife: this.throwingKnife = tacticalsEquipment.equip_throwing_knife?.properties,
          molotov: this.molotov = tacticalsEquipment.equip_molotov?.properties,
        };
        return weapons[weaponName][properties];
      })
    );
  }
  getKillsStreakData(weaponName: string, properties: string): Observable<any> {
    let weapons: any
    return this.fetchData().pipe(
      map((data: any) => {
        const fullData = data
        const killStreak = data.lifetime.scorestreakData.lethalScorestreakData

        const weapons: any = {
          airStrike:  this.airStrike = killStreak.precision_airstrike?.properties,
          cruiseMissile:  this.cruiseMissile = killStreak.cruise_predator?.properties,
          manualTurret: this.manualTurret = killStreak.manual_turret?.properties,
          whitePhosphorus: this.whitePhosphorus = killStreak.white_phosphorus?.properties,
          jetVtol: this.jetVtol = killStreak.hover_jet?.properties,
          chopperGunner: this.chopperGunner = killStreak.chopper_gunner?.properties,
          gunShip: this.gunShip = killStreak.gunship?.properties,
          autoTurret: this.autoTurret = killStreak.sentry_gun?.properties,
          clusterFire: this.clusterFire = killStreak.toma_strike?.properties,
          colos: this.colos = killStreak.juggernaut?.properties,
          chopperSupport:  this.chopperSupport = killStreak.chopper_support?.properties,
          wheelson: this.wheelson = killStreak.pac_sentry?.properties,
          airDrop: this.airDrop = killStreak?.properties,
          chopperRadar: this.chopperRadar = killStreak.radar_drone_overwatch?.properties,
          counterUav: this.counterUav = killStreak.scrambler_drone_guard?.properties,
          uav:  this.uav = killStreak.uav?.properties,
          superUav: this.superUav = killStreak.directional_uav?.properties,
        };
        return weapons[weaponName][properties];
      })
    );
  }
  getFieldUpgradesData(weaponName: string, properties: string): Observable<any> {
    let weapons: any
    return this.fetchData().pipe(
      map((data: any) => {
        const fullData = data
        const fieldUpgrades = fullData.lifetime.itemData.supers
        const weapons: any = {
          droneIem: this.droneIem = fieldUpgrades.super_emp_drone?.properties,
          trophy: this.trophy = fieldUpgrades.super_trophy?.properties,
          supplyDrop: this.supplyDrop = fieldUpgrades.super_ammo_drop?.properties,
          drop: this.drop = fieldUpgrades.super_weapon_drop?.properties,
          // this.taktycznyDesant <<-- do spradzenia?.properties,
          armorBox: this.armorBox = fieldUpgrades.super_armor_drop?.properties,
          recon: this.recon = fieldUpgrades.super_recon_drone?.properties,
          deadSilence: this.deadSilence = fieldUpgrades.super_deadsilence?.properties,
          tacticShield: this.tacticShield = fieldUpgrades.super_tac_cover?.properties,
          powerAmmo: this.powerAmmo = fieldUpgrades.super_support_box?.properties,
          balon: this.balon = fieldUpgrades.super_select?.properties,
        };
        return weapons[weaponName][properties];
      })
    );
  }
  getPistolData(weaponName: string, properties: string): Observable<any> {
    return this.fetchData().pipe(
      map((data: any
      ) => {
        const pistol = data.lifetime.itemData.weapon_pistol
        const weapons = {
          _357: this._357 = pistol.iw8_pi_cpapa?.properties,
          renetti: this.renetti = pistol.iw8_pi_mike9?.properties,
          _1911: this._1911 = pistol.iw8_pi_mike1911?.properties,
          x16: this.x16 = pistol.iw8_pi_golf21?.properties,
          _50gs: this._50gs = pistol.iw8_pi_decho?.properties,
          m19: this.m19 = pistol.iw8_pi_papa320?.properties,
        };
        return weapons[weaponName][properties];
      })
    );
  }

  getRocketLuncherData(weaponName: string, properties: string): Observable<any> {
    let weapons: any
      return this.fetchData().pipe(
        map((data: any) => {
          const fullData = data
          const rocketLuncher = fullData.lifetime.itemData.weapon_launcher
          const weapons: any = {
            pila: this.pila = rocketLuncher.iw8_la_gromeo?.properties,
            rpg7: this.rpg7 = rocketLuncher.iw8_la_rpapa7?.properties,
            joker: this.joker = rocketLuncher.iw8_la_juliet?.properties,
            sterlap: this.sterlap = rocketLuncher.iw8_la_kgolf?.properties,
          };
          return weapons[weaponName][properties];
        })
      );
   }

   getMeleeWeaponData(weaponName: string, properties: string): Observable<any> {
    let weapons: any
     return this.fetchData().pipe(
       map((data: any) => {
         const fullData = data
         const shield = fullData.lifetime.itemData.weapon_other
         const meleeWeapon = fullData.lifetime.itemData.weapon_melee
         const weapons: any = {
           knife: this.knife = meleeWeapon.iw8_knife?.properties,
           akimboBlades: this.akimboBlades = meleeWeapon.iw8_me_akimboblades?.properties,
           akimboBlunt: this.akimboBlunt = meleeWeapon.iw8_me_akimboblunt?.properties,
           shield: this.shield = shield.iw8_me_riotshield?.properties,
         };
         return weapons[weaponName][properties];
       })
     );
   }
   // }
  //  getGameInfoData(weaponName: string, properties: string) {
  //    this.fetchData().subscribe((data) => {
  //      const fullData = data.data
  //      const shield = fullData.lifetime.itemData.weapon_other
  //      const meleeWeapon = fullData.lifetime.itemData.weapon_melee
  //      const weapons: any = {
  //        gameTitle: this.gameTitle = fullData.title,
  //        gamePlatform: this.gamePlatform = fullData.platform,
  //        userName: this.userName = fullData.username,
  //        accountLevel: this.accountLevel = fullData.level,
  //        remainderExp: this.remainderExp = fullData.levelXpRemainder,
  //        gainedExp: this.gainedExp = fullData.levelXpGained,
  //        prestige: this.prestige = fullData.prestige,
  //        totalExp: this.totalExp = fullData.totalXp,
  //      };
  //      return weapons[weaponName][properties];
  //    })
}
