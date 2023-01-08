import { DataService } from './data.service';
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {mockAssaaultRifleData, mockFetchData} from "./helpers/mock-data";

describe('DataService', () => {
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

  it('should fetch data from the JSON file', () => {

    service.fetchData().subscribe(data => {
      console.log(data)
      expect(data).toEqual(mockFetchData);
    });
    setup(mockFetchData)
  });
  it('Test properties', () => {

    service.getAssaultRifleData('ak47', 'damage').subscribe(data => {
      expect(data).toEqual('50');
    });

    setup(mockAssaaultRifleData)
  })
});
