import { TestBed } from '@angular/core/testing';

import { ZendDeskService } from './zend-desk.service';

describe('ZendDeskService', () => {
  let service: ZendDeskService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ZendDeskService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
