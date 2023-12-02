import { TestBed } from '@angular/core/testing';

import { PromoitonService } from './promoiton.service';

describe('PromoitonService', () => {
  let service: PromoitonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PromoitonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
