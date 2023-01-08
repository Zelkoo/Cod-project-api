import { DataService } from './data.service';
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {mockAssaaultRifleData, mockFetchData, mockShotgunData} from "./helpers/mock-data";

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

    service.getAssaultRifleData('ak47', 'hits').subscribe(data => {
      console.log(data)
      expect(data).toEqual(500);
    });

    setup(mockAssaaultRifleData)
  })
  it('Shoutgun test properties', () => {

    service.getShotgunRifleData('model1680', 'kills').subscribe(data => {
      console.log(data)
      expect(data).toEqual(160)
    })
    setup(mockShotgunData)
  })
});
