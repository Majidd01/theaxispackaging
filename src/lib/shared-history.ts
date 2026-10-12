import { createBrowserHistory, type History } from "@remix-run/router";

/**
 * Browser history accepts one listener. The header and the page each have a
 * router, so this wrapper is that single listener and forwards updates to both.
 */
export function createSharedHistory(): History {
  const history = createBrowserHistory({ v5Compat: true });
  const listeners = new Set<(update: Parameters<History["listen"]>[0] extends (value: infer U) => void ? U : never) => void>();
  let unsubscribe: (() => void) | null = null;

  const shared = {
    get action() {
      return history.action;
    },
    get location() {
      return history.location;
    },
    createHref: history.createHref.bind(history),
    createURL: history.createURL.bind(history),
    encodeLocation: history.encodeLocation.bind(history),
    push: history.push.bind(history),
    replace: history.replace.bind(history),
    go: history.go.bind(history),
    listen(fn: (update: Parameters<History["listen"]>[0] extends (value: infer U) => void ? U : never) => void) {
      listeners.add(fn);
      if (!unsubscribe) {
        unsubscribe = history.listen((update) => {
          listeners.forEach((listener) => listener(update));
        });
      }
      return () => {
        listeners.delete(fn);
        if (listeners.size === 0 && unsubscribe) {
          unsubscribe();
          unsubscribe = null;
        }
      };
    },
  };

  return shared as History;
}
