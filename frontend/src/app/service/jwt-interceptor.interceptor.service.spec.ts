import { TestBed } from '@angular/core/testing';

import { JwtInterceptor.InterceptorService } from './jwt-interceptor.interceptor.service';

describe('JwtInterceptor.InterceptorService', () => {
  let service: JwtInterceptor.InterceptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JwtInterceptor.InterceptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
