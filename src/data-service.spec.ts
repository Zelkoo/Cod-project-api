import { DataService } from './data.service';
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('DataService', () => {
  let service: DataService;
  let httpMock: HttpTestingController;

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

  it('should fetch data from the JSON file', () => {
    const mockData = [{ id: 1, name: 'Test data' }];

    service.fetchData().subscribe(data => {
      console.log(data)
      expect(data).toEqual(mockData);
    });

    const req = httpMock.expectOne('./assets/cod-data.json');
    expect(req.request.method).toBe('GET');
    req.flush(mockData);
  });
});
