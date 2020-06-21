import { createStore, compose, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { rootReducer } from 'data/reducer';
import { rootEpic } from 'data/epic';
import { createLogger } from 'redux-logger';

const logger = createLogger({
  // ...options
});

const composeEnhancers =
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // add support for Redux dev tools

const epicMiddleware = createEpicMiddleware<any, any, any>();
export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(epicMiddleware), applyMiddleware(logger))
);

epicMiddleware.run(rootEpic);

export interface StoreType extends ReturnType<typeof rootReducer> { } // eslint-disable-line @typescript-eslint/no-empty-interface
