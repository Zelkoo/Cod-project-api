import {DataService} from './data.service';
import {TestBed} from '@angular/core/testing';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {
  mockAssaaultRifleData,
  mockFetchData,
  mockFieldUpgradeData,
  mockKillStreakData,
  mockTacticalEqData
} from "./helpers/mock-data";
import {
  AssaultRifle, WeaponType,
  FieldUpgrade,
  KillStreak,
  TacticalEquipment
} from "./helpers/overview-enum";

describe('Tests for DataService', () => {
  let service: DataService;
  let httpMock: HttpTestingController;
  afterAll(() => {
    TestBed.resetTestingModule();
  });
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [DataService]
    });

    service = TestBed.inject(DataService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  function setup(mockData) {
    const req = httpMock.expectOne('./assets/cod-data.json');
    expect(req.request.method).toBe('GET');
    req.flush(mockData);
  }

  it('Should fetch data from the JSON file', () => {

    service.fetchData().subscribe(data => {
      console.log(data)
      expect(data).toEqual(mockFetchData);
    });
    setup(mockFetchData)
  });

  it('Get Weapon Data', () => {
    service.getWeaponData(WeaponType.assault ,AssaultRifle.Ak47, 'kills' ).subscribe(data => {
      expect(Number(data)).toEqual(123);
    })
    setup(mockAssaaultRifleData)
  })
  it('Tactical Equipment test properties', () => {
    service.getTacticalEqData(TacticalEquipment.Flesh, 'uses').subscribe(data => {
      console.log('Flesh', data)
      expect(data).toEqual(840)
    })
    setup(mockTacticalEqData)
  })
  it('KillStreak test properties', () => {
    service.getKillsStreakData(KillStreak.Uav, 'uses').subscribe(data => {
      console.log('Uav', data)
      expect(data).toEqual(798)
    })
    setup(mockKillStreakData)
  })
  it('FieldUpgrade test properties', () => {
    service.getFieldUpgradesData(FieldUpgrade.DeadSilence, 'uses').subscribe(data => {
      console.log('DeadSilence', data)
      expect(data).toEqual(1840)
    })
    setup(mockFieldUpgradeData)
  })
});
