import * as $ from 'jquery';

declare global {
  namespace JQuery {
    interface RippleOptions {
      resolution?: number;
      perturbance?: number;
      dropRadius?: number;
    }
  }

  interface JQuery {
    ripples(options?: JQuery.RippleOptions): JQuery;
    ripples(action: 'destroy'): JQuery;
  }
}

export {};
