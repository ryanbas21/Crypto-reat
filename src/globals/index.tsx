export interface Dispatch {
  <R>(asyncAction: (dispatch: Dispatch, getState: () => RootState) => R): R;
  <R>(asyncAction: (dispatch: Dispatch) => R): R;
  // (neverAction: (dispatch: Dispatch, getState: () => GetState) => never): never;
  (action: Action): void;
}
export interface RootState {}
export interface Action {
  type: string;
  payload: any;
}
