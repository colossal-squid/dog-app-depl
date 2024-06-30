import { TestBed } from '@angular/core/testing';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { HttpClient, provideHttpClient } from '@angular/common/http';
import { DataService } from './data.service';
import { ConfigService } from './config.service';

describe('DataService', () => {
  let service: DataService;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let cfg: ConfigService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient(), provideHttpClientTesting()]
    })
    service = TestBed.inject(DataService);
    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
    cfg = TestBed.inject(ConfigService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('can request list of breeds', () => {
    service.getAllBreeds().subscribe(data => { });
    const req = httpTestingController.expectOne(`${cfg.getApiUrl()}/breeds/list/all`);
    expect(req.request.method).toEqual('GET');
    req.flush({});
    httpTestingController.verify();
  });

  it('can request random image', () => {
    service.getRandomBreedImage().subscribe(data => { });
    const req = httpTestingController.expectOne(`${cfg.getApiUrl()}/breeds/image/random`);
    expect(req.request.method).toEqual('GET');
    req.flush({});
    httpTestingController.verify();
  });

  it('can request breed image', () => {
    service.getImagesByBreed('breed-name').subscribe(data => { });
    const req = httpTestingController.expectOne(`${cfg.getApiUrl()}/breed/breed-name/images`);
    expect(req.request.method).toEqual('GET');
    req.flush({});
    httpTestingController.verify();
  });

  it('can list sub-breeds', () => {
    service.listAllSubBreeds('breed-name').subscribe(data => { });
    const req = httpTestingController.expectOne(`${cfg.getApiUrl()}/breed/breed-name/list`);
    expect(req.request.method).toEqual('GET');
    req.flush({});
    httpTestingController.verify();
  });
});
