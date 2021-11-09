interface ISearchEntryAdded {
  attach(callBack: CallBack): void;
  notify(countResult: CountResult, dispatch: AppDispatch): void;
  onCacheEntryAdded(totalCount: number, dispatch: AppDispatch): void;
}

type CountResult = number;

type CallBack = (coutResult: number) => AppThunk;

// * this class was created in order not to break the direction of dependencies
class SearchEntryAdded implements ISearchEntryAdded {
  private callBacks: CallBack[] = [];

  public attach(callBack: CallBack): void {
    const isExist = this.callBacks.includes(callBack);

    if (isExist) {
      return;
    }

    this.callBacks.push(callBack);
  }

  public async onCacheEntryAdded(totalCount: number, dispatch: AppDispatch) {
    this.notify(totalCount, dispatch);
  }

  public notify(countResult: CountResult, dispatch: AppDispatch): void {
    for (const callBack of this.callBacks) {
      dispatch(callBack(countResult));
    }
  }
}

export const searchEntryAdded = new SearchEntryAdded();
