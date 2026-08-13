import "@testing-library/jest-dom";

// O jsdom não implementa IntersectionObserver, de que o whileInView do
// framer-motion depende, nem scrollTo, usado ao trocar de rota.
class IntersectionObserverStub {
  observe() {}
  unobserve() {}
  disconnect() {}
  takeRecords() {
    return [];
  }
  root = null;
  rootMargin = "";
  thresholds: readonly number[] = [];
}

Object.defineProperty(window, "IntersectionObserver", {
  writable: true,
  value: IntersectionObserverStub,
});
Object.defineProperty(globalThis, "IntersectionObserver", {
  writable: true,
  value: IntersectionObserverStub,
});
Object.defineProperty(window, "scrollTo", { writable: true, value: () => {} });

Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: (query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: () => {},
    removeListener: () => {},
    addEventListener: () => {},
    removeEventListener: () => {},
    dispatchEvent: () => {},
  }),
});
