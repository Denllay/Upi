// ? из-за направления зависимостей, нижние слои не могут импортировать app

declare type RootState = ReturnType<typeof import('./index').store.getState>;
declare type AppThunk<ReturnType = void> = import('redux-thunk').ThunkAction<
  ReturnType,
  RootState,
  unknown,
  import('redux').AnyAction
>;

declare type AppDispatch = typeof import('./index').store.dispatch;
