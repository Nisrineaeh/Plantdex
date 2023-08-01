import { TestBed } from '@angular/core/testing';

import { PlantSelectionService } from './plant-selection.service';

describe('PlantSelectionService', () => {
  let service: PlantSelectionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlantSelectionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
