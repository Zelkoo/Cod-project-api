import {DataService} from './data.service';
import {TestBed} from '@angular/core/testing';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {
  mockAssaaultRifleData,
  mockFetchData,
  mockFieldUpgradeData,
  mockKillStreakData,
  mockLargeMachineGunData,
  mockMachineGunData,
  mockMarksmanRifleData,
  mockPistolData,
  mockRocketLuncherData,
  mockShotgunData,
  mockSniperRifleData,
  mockTacticalEqData
} from "./helpers/mock-data";
import {
  AssaultRifle,
  FieldUpgrade,
  KillStreak,
  LargeMAchineGun,
  MachineGun,
  MarksmanRifle,
  Pistols,
  RocketLuncher,
  ShotgunRifle,
  SniperRifle,
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
  it('AssaultRifle test properties', () => {

    service.getAssaultRifleData(AssaultRifle.Ak47, 'kills').subscribe(data => {
      console.log('ak47', data)
      expect(data).toEqual(123);
    });

    setup(mockAssaaultRifleData)
  })
  it('Shoutgun test properties', () => {

    service.getShotgunRifleData(ShotgunRifle.Model1680, 'kills').subscribe(data => {
      console.log('model1680', data)
      expect(data).toEqual(741)
    })
    setup(mockShotgunData)
  })
  it('MarksmanRifle test properties', () => {
    service.getMarksmanRifleData(MarksmanRifle.Ebr14, 'kills').subscribe(data => {
      console.log('ebr14', data)
      expect(data).toEqual(932)
    })
    setup(mockMarksmanRifleData)
  })
  it('LargeMachineGun test properties', () => {
    service.getLargeMachineGunqData(LargeMAchineGun.BurenMk9, 'kills').subscribe(data => {
      console.log('burenMk9', data)
      expect(data).toEqual(845)
    })
    setup(mockLargeMachineGunData)
  })
  it('SniperRifle test properties', () => {
    service.getSniperRifleData(SniperRifle.Hdr, 'kills').subscribe(data => {
      console.log('hdr', data)
      expect(data).toEqual(155)
    })
    setup(mockSniperRifleData)
  })
  it('MachineGun test properties', () => {
    service.getMachineGunData(MachineGun.P90, 'kills').subscribe(data => {
      console.log('p90', data)
      expect(data).toEqual(90)
    })
    setup(mockMachineGunData)
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
  it('Pistol test properties', () => {
    service.getPistolData(Pistols.Renetti, 'kills').subscribe(data => {
      console.log('Pistol', data)
      expect(data).toEqual(777)
    })
    setup(mockPistolData)
  })
  it('RocketLuncher test properties', () => {
    service.getRocketLuncherData(RocketLuncher.Pila, 'kills').subscribe(data => {
      console.log('RocketLuncher', data)
      expect(data).toEqual(5)
    })
    setup(mockRocketLuncherData)
  })
});
