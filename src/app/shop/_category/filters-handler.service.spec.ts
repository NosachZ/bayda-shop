import { TestBed } from '@angular/core/testing';

import { FiltersHandlerService } from './filters-handler.service';

describe('FiltersHandlerService', () => {
  let service: FiltersHandlerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FiltersHandlerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
