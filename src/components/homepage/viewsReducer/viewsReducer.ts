// type ViewsActionTypes =
//   | { type: "setGrid"; payload: undefined }
//   | { type: "setModal"; payload: string }
//   | { type: "closeModal"; payload: undefined }
//   | { type: "setSelected"; payload: {} };

// const initialState = {
//   grid: false,
//   modalOpen: false,
//   modalAction: "add",
//   data: {},
// };

// const tableReducer = (state: typeof initialState, action: ViewsActionTypes) => {
//   switch (action.type) {
//     case "setGrid":
//       return {
//         ...state,
//         grid: !state.grid,
//       };
//     case "setModal":
//       return {
//         ...state,
//         modalOpen: true,
//         modalAction: action.payload,
//       };

//     case "closeModal":
//       return {
//         ...state,
//         modalOpen: false,
//       };

//     case "setSelected":
//       return {
//         ...state,
//         data: action.payload,
//       };
//     default:
//       throw new Error(`Invalid state.`);
//   }
// };
// export { tableReducer, initialState };

export {};
