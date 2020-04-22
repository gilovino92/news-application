import { TestBed } from '@angular/core/testing';

import { TopHeadlinesService } from './top-headlines.service';

describe('TopHeadlinesService', () => {
  let service: TopHeadlinesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TopHeadlinesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
