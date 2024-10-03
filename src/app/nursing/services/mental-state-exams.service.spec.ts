import { TestBed } from '@angular/core/testing';

import { MentalStateExamsService } from './mental-state-exams.service';

describe('MentalStateExamsService', () => {
  let service: MentalStateExamsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MentalStateExamsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
