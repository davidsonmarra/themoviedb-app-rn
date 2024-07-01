import {render} from '@testing-library/react-native';
import {Provider} from 'react-redux';
import store, {IRootState, reducers, sagaMiddleware} from './test-redux-store';
import {configureStore, EnhancedStore} from '@reduxjs/toolkit';
import sagas from '../../src/store/sagas';

interface IAllThemeProviders {
  children: React.ReactElement;
  store?: EnhancedStore;
}

const AllTheProviders = ({children}: IAllThemeProviders) => (
  <Provider store={store}>{children}</Provider>
);

const customRender = (ui: React.ReactElement, options = {}) =>
  render(ui, {wrapper: AllTheProviders, ...options});

export const renderWithCustomProviders = (
  component: React.ReactElement,
  preloadedState: IRootState,
) => {
  const reduxStore = configureStore({
    reducer: reducers,
    middleware: gDM => gDM().concat(sagaMiddleware),
    preloadedState: preloadedState,
  });

  sagaMiddleware.run(sagas);

  return {
    render: render(<Provider store={reduxStore}>{component}</Provider>),
    store: reduxStore,
  };
};

// re-export everything
export * from '@testing-library/react-native';

// override render method
export {customRender as render};
