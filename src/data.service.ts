import {Injectable} from "@angular/core";
import {map, Observable} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";
@Injectable({
  providedIn: 'any'
})
export class DataService {
  //MarksmanRifle
  ebr14?: any
  mk2Carbine: string | undefined;
  kark98k: string | undefined;
  crossBow: string | undefined;
  sks: string | undefined;
  srpr208: string | undefined;
  // assult rifle
  ak47: any
  an94: string | undefined;
  oden: string | undefined;
  fal: string | undefined;
  fr556: string | undefined;
  cr56amax: string | undefined;
  kilo141: string | undefined;
  m13: string | undefined;
  m4a1: string | undefined;
  fnscar17: string | undefined;
  grau556: string | undefined;
  ram7: string | undefined;
  asVal: string | undefined;
  // RKM
  pkm: string | undefined;
  sa87: string | undefined;
  m91: string | undefined;
  mg34: string | undefined;
  holger26: string | undefined;
  burenMk9: string | undefined;
  rkmFinn: string | undefined;
  kmRaal: string | undefined;
  // shoutgun
  model680: string | undefined;
  r90: string | undefined;
  _725: string | undefined;
  origin12: string | undefined;
  vlkRouge: string | undefined;
  jak12: string | undefined;
  // snniper
  ax50: string | undefined;
  rytecAmr: string | undefined;
  hdr: string | undefined;
  dragunow: string | undefined;
  // pm
  mp7: string | undefined;
  aug: string | undefined;
  p90: string | undefined;
  iso: string | undefined;
  mp5: string | undefined;
  striker45: string | undefined;
  pp19Bizon: string | undefined;
  fennec: string | undefined;
  uzi: string | undefined;
  // tactical eq
  gasGranate: string | undefined;
  wykrywajacy: string | undefined;
  decoy: string | undefined;
  smoke: string | undefined;
  ogluszajacy: string | undefined;
  sensorPulse: string | undefined;
  flesh: string | undefined;
  adrealine: string | undefined;
  // offensive granate
  granate: string | undefined;
  thermit: string | undefined;
  claymore: string | undefined;
  c4: string | undefined;
  mine: string | undefined;
  throwingKnife: string | undefined;
  molotov: string | undefined;
  // strike reward
  airStrike: string | undefined;
  cruiseMissile: string | undefined;
  manualTurret: string | undefined;
  whitePhosphorus: string | undefined;
  jetVtol: string | undefined;
  chopperGunner: string | undefined;
  gunShip: string | undefined;
  autoTurret: string | undefined;
  clusterFire: string | undefined;
  colos: string | undefined;
  wheelson: string | undefined;
  chopperSupport: string | undefined;
  airDrop: string | undefined;
  chopperRadar: string | undefined;
  counterUav: string | undefined;
  uav: string | undefined;
  superUav: string | undefined;
  // ulepszenia polowe
  droneIem: string | undefined;
  trophy: string | undefined;
  supplyDrop: string | undefined;
  drop: string | undefined;
  taktycznyDesant: string | undefined;
  armorBox: string | undefined;
  recon: string | undefined;
  deadSilence: string | undefined;
  tacticShield: string | undefined;
  powerAmmo: string | undefined;
  balon: string | undefined;
  //pitols
  _357: string | undefined;
  renetti: string | undefined;
  _1911: string | undefined;
  x16: string | undefined;
  _50gs: string | undefined;
  m19: string | undefined;
  // rocket luncher
  pila: string | undefined;
  rpg7: string | undefined;
  joker: string | undefined;
  sterlap: string | undefined;
  //shield
  shield: string | undefined;

  // bron reczna
  knife: string | undefined;
  akimboBlades: string | undefined;
  akimboBlunt: string | undefined;
  // game info
  gameTitle: string | undefined;
  gamePlatform: string | undefined;
  userName: string | undefined;
  accountLevel: number | undefined;
  remainderExp: number | undefined;
  gainedExp: number | undefined;
  prestige: number | undefined;
  totalExp: number | undefined;

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

  getAssaultRifleData(weaponName: string, properties: string): Observable<any> {
    let weapons: any
    return this.fetchData().pipe(
      map((data: any) => {
        const fullData = data
        const assaultRifle = fullData.lifetime.itemData.weapon_assault_rifle
        const weapons = {
          ak47: this.ak47 = assaultRifle.iw8_ar_akilo47.properties,
          an94: this.an94 = assaultRifle.iw8_ar_anovember94.properties,
          oden: this.oden = assaultRifle.iw8_ar_asierra12.properties,
          fal: this.fal = assaultRifle.iw8_ar_falima.properties,
          fr556: this.fr556 = assaultRifle.iw8_ar_falpha.properties,
          cr56amax: this.cr56amax = assaultRifle.iw8_ar_galima.properties,
          kilo141: this.kilo141 = assaultRifle.iw8_ar_kilo433.properties,
          m13: this.m13 = assaultRifle.iw8_ar_mcharlie.properties,
          m4a1: this.m4a1 = assaultRifle.iw8_ar_mike4.properties,
          fnscar17: this.fnscar17 = assaultRifle.iw8_ar_scharlie.properties,
          grau556: this.grau556 = assaultRifle.iw8_ar_sierra552.properties,
          ram7: this.ram7 = assaultRifle.iw8_ar_tango21.properties,
          asVal: this.asVal = assaultRifle.iw8_ar_valpha.properties
        };
        return weapons[weaponName][properties];
      })
    );
  }
  getShotgunRifleData(weaponName: string, properties: string) {
    this.fetchData().subscribe((data) => {
      const fullData = data.data
      const shotgun = fullData.lifetime.itemData.weapon_shotgun
      const weapons: any = {
       model1680: this.model680 = shotgun.iw8_sh_romeo870.properties,
       r90: this.r90 = shotgun.iw8_sh_dpapa12.properties,
       _725: this._725 = shotgun.iw8_sh_charlie725.properties,
       origin12: this.origin12 = shotgun.iw8_sh_oscar12.properties,
       vlkRouge: this.vlkRouge = shotgun.iw8_sh_mike26.properties,
       jak12: this.jak12 = shotgun.iw8_sh_aalpha12.properties,
      };
      return weapons[weaponName][properties];
    })
  }
  getMarksmanRifleData(weaponName: string, properties: string) {
    this.fetchData().subscribe((data) => {
      const fullData = data.data
      const marksmanRifle = fullData.lifetime.itemData.weapon_marksman
      const weapons: any = {
        ebr14: this.ebr14 = marksmanRifle.iw8_ar_akilo47.properties,
        mk2Carbine: this.mk2Carbine = marksmanRifle.iw8_ar_anovember94.properties,
        kark98k: this.kark98k = marksmanRifle.iw8_ar_asierra12.properties,
        crossBow: this.crossBow = marksmanRifle.iw8_ar_falima.properties,
        sks: this.sks = marksmanRifle.iw8_ar_falpha.properties,
        srpr208: this.srpr208 = marksmanRifle.iw8_ar_falpha.properties,
      };
      return weapons[weaponName][properties];
    })
  }
  getLargeMachineGunqData(weaponName: string, properties: string) {
    this.fetchData().subscribe((data) => {
      const fullData = data.data
      const largeMachineGun = fullData.lifetime.itemData.weapon_lmg
      const weapons: any = {
        pkm: this.pkm = largeMachineGun.iw8_lm_pkilo,
        sa87: this.sa87 = largeMachineGun.iw8_lm_lima86,
        m91: this.m91 = largeMachineGun.iw8_lm_kilo121,
        mg34: this.mg34 = largeMachineGun.iw8_lm_mgolf34,
        holger26: this.holger26 = largeMachineGun.iw8_lm_mgolf36,
        burenMk9: this.burenMk9 = largeMachineGun.iw8_lm_mkilo3,
        rkmFinn: this.rkmFinn = largeMachineGun.iw8_lm_sierrax,
        kmRaal: this.kmRaal = largeMachineGun.iw8_la_mike32,
      };
      return weapons[weaponName][properties];
    })
  }
  getSniperRifleData(weaponName: string, properties: string) {
    this.fetchData().subscribe((data) => {
      const fullData = data.data
      const sniper = fullData.lifetime.itemData.weapon_sniper
      const weapons: any = {
        ax50: this.ax50 = sniper.iw8_sn_alpha50.properties,
        rytecAmr: this.rytecAmr = sniper.iw8_sn_xmike109.properties,
        hdr: this.hdr = sniper.iw8_sn_hdromeo.properties,
        dragunow: this.dragunow = sniper.iw8_sn_delta.properties,
      };
      return weapons[weaponName][properties];
    })
  }
  getMachineGunData(weaponName: string, properties: string) {
    this.fetchData().subscribe((data) => {
      const fullData = data.data
      const smg = fullData.lifetime.itemData.weapon_smg
      const weapons: any = {
        mp7: this.mp7 = smg.iw8_sm_mpapa7,
        aug: this.aug = smg.iw8_sm_augolf,
        p90: this.p90 = smg.iw8_sm_papa90,
        iso: this.iso = smg.iw8_sm_charlie9,
        mp5: this.mp5 = smg.iw8_sm_mpapa5,
        striker45: this.striker45 = smg.iw8_sm_smgolf45,
        pp19Bizon: this.pp19Bizon = smg.iw8_sm_beta,
        fennec: this.fennec = smg.iw8_sm_victor,
        uzi: this.uzi = smg.iw8_sm_uzulu,
      };
      return weapons[weaponName][properties];
    })
  }
  getTacticalEqData(weaponName: string, properties: string) {
    this.fetchData().subscribe((data) => {
      const fullData = data.data
      const tacticalsEquipment = fullData.lifetime.itemData.tacticals
      const weapons: any = {
        gasGranate: this.gasGranate = tacticalsEquipment.equip_gas_grenade,
        wykrywajacy: this.wykrywajacy = tacticalsEquipment.equip_snapshot_grenade,
        decoy: this.decoy = tacticalsEquipment.equip_decoy,
        smoke: this.smoke = tacticalsEquipment.equip_smoke,
        ogluszajacy: this.ogluszajacy = tacticalsEquipment.equip_concussion,
        sensorPulse: this.sensorPulse = tacticalsEquipment.equip_hb_sensor,
        flesh: this.flesh = tacticalsEquipment.equip_flash,
        adrealine: this.adrealine = tacticalsEquipment.equip_adrenaline,
        granate: this.granate = tacticalsEquipment.equip_frag,
        thermit: this.thermit = tacticalsEquipment.equip_thermite,
        claymore: this.claymore = tacticalsEquipment.equip_claymore,
        c4: this.c4 = tacticalsEquipment.equip_c4,
        mine: this.mine = tacticalsEquipment.equip_at_mine,
        throwingKnife: this.throwingKnife = tacticalsEquipment.equip_throwing_knife,
        molotov: this.molotov = tacticalsEquipment.equip_molotov,
      };
      return weapons[weaponName][properties];
    })
  }
  getKillsStreakData(weaponName: string, properties: string) {

    // corestreakData": {
    // "lethalScorestreakData": {
    this.fetchData().subscribe((data) => {
      const killStreak = data.lifetime.scorestreakData.lethalScorestreakData

      const weapons: any = {
        airStrike:  this.airStrike = killStreak.precision_airstrike.properties,
        cruiseMissile:  this.cruiseMissile = killStreak.cruise_predator.properties,
        manualTurret: this.manualTurret = killStreak.manual_turret.properties,
        whitePhosphorus: this.whitePhosphorus = killStreak.white_phosphorus.properties,
        jetVtol: this.jetVtol = killStreak.hover_jet.properties,
        chopperGunner: this.chopperGunner = killStreak.chopper_gunner.properties,
        gunShip: this.gunShip = killStreak.gunship.properties,
        autoTurret: this.autoTurret = killStreak.sentry_gun.properties,
        clusterFire: this.clusterFire = killStreak.toma_strike.properties,
        colos: this.colos = killStreak.juggernaut.properties,
        chopperSupport:  this.chopperSupport = killStreak.chopper_support.properties,
        wheelson: this.wheelson = killStreak.pac_sentry.properties,
        airDrop: this.airDrop = killStreak.properties,
        chopperRadar: this.chopperRadar = killStreak.radar_drone_overwatch.properties,
        counterUav: this.counterUav = killStreak.scrambler_drone_guard.properties,
        uav:  this.uav = killStreak.uav.properties,
        superUav: this.superUav = killStreak.directional_uav.properties,
      };
      console.log(this.airStrike)
      return console.log(weapons[weaponName][properties]);
    })
  }
  getFieldUpgradesData(weaponName: string, properties: string) {
    this.fetchData().subscribe((data) => {
      const fullData = data.data
      const fieldUpgrades = fullData.lifetime.itemData.supers
      const weapons: any = {
        droneIem: this.droneIem = fieldUpgrades.super_emp_drone,
        trophy: this.trophy = fieldUpgrades.super_trophy,
        supplyDrop: this.supplyDrop = fieldUpgrades.super_ammo_drop,
        drop: this.drop = fieldUpgrades.super_weapon_drop,
        // this.taktycznyDesant <<-- do spradzenia,
        armorBox: this.armorBox = fieldUpgrades.super_armor_drop,
        recon: this.recon = fieldUpgrades.super_recon_drone,
        deadSilence: this.deadSilence = fieldUpgrades.super_deadsilence,
        tacticShield: this.tacticShield = fieldUpgrades.super_tac_cover,
        powerAmmo: this.powerAmmo = fieldUpgrades.super_support_box,
        balon: this.balon = fieldUpgrades.super_select,
      };
      return weapons[weaponName][properties];
    })
  }
  getPistolData(weaponName: string, properties: string): any {{
    this.fetchData().subscribe((data) => {
      const fullData = data.data
      const pistol = fullData.lifetime.itemData.weapon_pistol
      const weapons: any = {
        _357: this._357 = pistol.iw8_pi_cpapa,
        renetti: this.renetti = pistol.iw8_pi_mike9,
        _1911: this._1911 = pistol.iw8_pi_mike1911,
        x16: this.x16 = pistol.iw8_pi_golf21,
        _50gs: this._50gs = pistol.iw8_pi_decho,
        m19: this.m19 = pistol.iw8_pi_papa320,
      };
      return weapons[weaponName][properties];
    })
  }
  // getRocketLuncherData(weaponName: string, properties: string) {
  //   this.fetchData().subscribe((data) => {
  //     const fullData = data.data
  //     const rocketLuncher = fullData.lifetime.itemData.weapon_launcher
  //     const weapons: any = {
  //       pila: this.pila = rocketLuncher.iw8_la_gromeo,
  //       rpg7: this.rpg7 = rocketLuncher.iw8_la_rpapa7,
  //       joker: this.joker = rocketLuncher.iw8_la_juliet,
  //       sterlap: this.sterlap = rocketLuncher.iw8_la_kgolf,
  //     };
  //     return weapons[weaponName][properties];
  //   })
  // }
  // getMeleeWeaponData(weaponName: string, properties: string) {
  //   this.fetchData().subscribe((data) => {
  //     const fullData = data.data
  //     const shield = fullData.lifetime.itemData.weapon_other
  //     const meleeWeapon = fullData.lifetime.itemData.weapon_melee
  //     const weapons: any = {
  //       knife: this.knife = meleeWeapon.iw8_knife,
  //       akimboBlades: this.akimboBlades = meleeWeapon.iw8_me_akimboblades,
  //       akimboBlunt: this.akimboBlunt = meleeWeapon.iw8_me_akimboblunt,
  //       shield: this.shield = shield.iw8_me_riotshield,
  //     };
  //     return weapons[weaponName][properties];
  //   })
  // }
  // getGameInfoData(weaponName: string, properties: string) {
  //   this.fetchData().subscribe((data) => {
  //     const fullData = data.data
  //     const shield = fullData.lifetime.itemData.weapon_other
  //     const meleeWeapon = fullData.lifetime.itemData.weapon_melee
  //     const weapons: any = {
  //       gameTitle: this.gameTitle = fullData.title,
  //       gamePlatform: this.gamePlatform = fullData.platform,
  //       userName: this.userName = fullData.username,
  //       accountLevel: this.accountLevel = fullData.level,
  //       remainderExp: this.remainderExp = fullData.levelXpRemainder,
  //       gainedExp: this.gainedExp = fullData.levelXpGained,
  //       prestige: this.prestige = fullData.prestige,
  //       totalExp: this.totalExp = fullData.totalXp,
  //     };
  //     return weapons[weaponName][properties];
  //   })
  }

}
