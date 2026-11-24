import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';
import { ligueGuard } from './ligue-guard';

describe('ligueGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) =>
    TestBed.runInInjectionContext(() => ligueGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
