import {Injectable} from "@angular/core";
import {map, Observable} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {
  AssaultRifleData, FieldUpgradePropertiesData, GameInfoData, KillStreakData, KillStreakPropertiesData,
  LargeMachinegunData, MachinegunData,
  MarksmanRifleData, MeleeWeaponData, PistolData, RocketLuncherData,
  ShotguneData, SniperRifleData, TacticalEquipmentData, WeaponPropertiesData
} from "./helpers/data-interface";
import {
  AssaultRifle, FieldUpgrade, GameInfo, KillStreak,
  LargeMAchineGun, MachineGun,
  MarksmanRifle, MeleeWeapon,
  Pistols,
  RocketLuncher,
  ShotgunRifle, SniperRifle, TacticalEquipment
} from "./helpers/overview-enum";
@Injectable({
  providedIn: 'any'
})
export class DataService {

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
  getOverviewData(properties: string): Observable<any> {
    return this.fetchData().pipe(map((data: any) => {
      const propertiesData = data.lifetime.all.properties
      return propertiesData[properties]
    }))
}
  getAssaultRifleData(weaponName: AssaultRifle, properties: string): Observable<any> {
    return this.fetchData().pipe(
      map((data: AssaultRifleData) => {
        const assaultRifle = data.lifetime.itemData.weapon_assault_rifle
        return assaultRifle[weaponName]?.properties[properties];
      })
    );
  }
  getShotgunRifleData(weaponName: ShotgunRifle, properties: string): Observable<any> {
    return this.fetchData().pipe(
      map((data: ShotguneData) => {
        const shotgun = data.lifetime.itemData.weapon_shotgun
        return shotgun[weaponName]?.properties[properties];
      })
    );
  }
  getMarksmanRifleData(weaponName: MarksmanRifle, properties: string): Observable<any> {
    return this.fetchData().pipe(
      map((data: MarksmanRifleData) => {
        const marksmanRifle = data.lifetime.itemData.weapon_marksman
        return marksmanRifle[weaponName]?.properties[properties];
      })
    );
  }
  getLargeMachineGunqData(weaponName: LargeMAchineGun, properties: string): Observable<any> {
    return this.fetchData().pipe(
      map((data: LargeMachinegunData) => {
        const largeMachineGun = data.lifetime.itemData.weapon_lmg
        return largeMachineGun[weaponName]?.properties[properties];
      })
    );
  }
  getSniperRifleData(weaponName: SniperRifle, properties: string): Observable<any> {
    return this.fetchData().pipe(
      map((data: SniperRifleData) => {
        const sniper = data.lifetime.itemData.weapon_sniper
        return sniper[weaponName]?.properties[properties];
      })
    );
  }
  getRocketLuncherData(weaponName: RocketLuncher, properties: string): Observable<any> {
    return this.fetchData().pipe(
      map((data: RocketLuncherData) => {
        const rocketLuncher = data.lifetime.itemData.weapon_launcher
        return rocketLuncher[weaponName]?.properties[properties];
      })
    );
  }
  getPistolData(weaponName: Pistols, prop: string): Observable<any> {
    return this.fetchData().pipe(
      map((data: PistolData) => {
        const pistols = data.lifetime.itemData.weapon_pistol
        return pistols[weaponName]?.properties[prop];
      })
    );
  }
  getMachineGunData(weaponName: MachineGun, properties: string): Observable<any> {
    return this.fetchData().pipe(
      map((data: MachinegunData) => {
        const machineGun = data.lifetime.itemData.weapon_smg
        return machineGun[weaponName]?.properties[properties];
      })
    );
  }
  getTacticalEqData(weaponName: TacticalEquipment, properties: string): Observable<any> {
    return this.fetchData().pipe(
      map((data: TacticalEquipmentData) => {
        const tacticalsEquipment = data.lifetime.itemData.tacticals
        return tacticalsEquipment[weaponName]?.properties[properties];
      })
    );
  }
  getKillsStreakData(weaponName: KillStreak, properties: string): Observable<any> {
    return this.fetchData().pipe(
      map((data: KillStreakData) => {
        const killStreak = data.lifetime.scorestreakData.lethalScorestreakData
        return killStreak[weaponName]?.properties[properties];
      })
    );
  }
  getFieldUpgradesData(weaponName: FieldUpgrade, properties: string): Observable<any> {
    return this.fetchData().pipe(
      map((data: FieldUpgradePropertiesData) => {
        const fieldUpgrades = data.lifetime.itemData.supers
        return fieldUpgrades[weaponName]?.properties[properties];
      })
    );
  }
  getMeleeWeaponData(weaponName: MeleeWeapon, properties: string): Observable<any> {
     return this.fetchData().pipe(
       map((data: MeleeWeaponData) => {
         const shield = data.lifetime.itemData.weapon_other
         const meleeWeapon = data.lifetime.itemData.weapon_melee
         return meleeWeapon[weaponName]?.properties[properties];
       })
     );
   }
  getGameInfoData(properties: GameInfo): Observable<any> {
    return this.fetchData().pipe(
      map((data: GameInfoData) => {
        const gameInfo: any = data
        return gameInfo[properties];
      })
    );
  }
}
