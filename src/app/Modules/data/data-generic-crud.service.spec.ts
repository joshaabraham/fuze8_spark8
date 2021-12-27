import { TestBed } from '@angular/core/testing';

import { DataService } from './data-generic-crud.service';

describe('DataGenericCrudService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DataService = TestBed.get(DataService);
    expect(service).toBeTruthy();
  });
});
