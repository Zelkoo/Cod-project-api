import {Injectable} from "@angular/core";
import {map, Observable, of, tap} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {
  allWeaponData,
  FieldUpgradePropertiesData, GameInfoData, KillStreakData,
  MeleeWeaponData,
  TacticalEquipmentData
} from "./helpers/data-interface";
import {
  FieldUpgrade, GameInfo, KillStreak, MeleeWeapon, TacticalEquipment
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
  private weaponData: allWeaponData;

  public fetchData(): Observable<any> {
    if (this.weaponData) {
      return of(this.weaponData);
    } else {
      return this.http.get('./assets/cod-data.json').pipe(tap(data => this.weaponData = data));
    }
  }
  getWeaponData(weaponType: string, weaponName: string, properties: string): Observable<allWeaponData> {
    return this.fetchData().pipe(
      map((data: allWeaponData) => {
        const weapon = data.lifetime.itemData[weaponType]
        return weapon[weaponName]?.properties[properties];
      })
    );
  }
  getOverviewData(properties: string): Observable<any> {
    return this.fetchData().pipe(map((data: any) => {
      const propertiesData = data.lifetime.all.properties
      return propertiesData[properties]
    }))
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
