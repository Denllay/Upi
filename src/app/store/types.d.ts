// ? из-за направления зависимостей, нижние слои не могут импортировать app

declare type RootState = ReturnType<typeof import('./index').store.getState>;
