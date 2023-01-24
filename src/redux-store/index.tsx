import update from "immutability-helper";
interface IAppState {
  data: any[];
  // checkout: any[];
  checkout: any[];
}

const initailState: IAppState = {
  data: [],
  checkout: [],
};
const Reducer = (state: IAppState = initailState, action: any): IAppState => {
  switch (action.type) {
    case "SAVE":
      const data = action.payload;
      console.log(data);
      return {
        ...state,
        data: [...state.data, data],
      };
    case "AddCheckout":
      const data2 = action.payload;
      return {
        ...state,
        checkout: [...state.checkout, data2],
        // checkout: data2,
      };
    case "RemoveService":
      const data3 = action.payload;

      const newData = state.checkout.filter((item) => item.id !== data3);
      // const newData = state.checkout.splice(objWithIdIndex, 1);

      console.log(newData);
      console.log(data3);
      return {
        ...state,
        checkout: newData,
      };
    case "RemoveRow":
      const removedRow = action.payload;

      const newData2 = state.checkout.filter(
        (item) => item.title !== removedRow
      );
      // const newData = state.checkout.splice(objWithIdIndex, 1);

      return {
        ...state,
        checkout: newData2,
      };

    case "IsBtnActive":
      const item: any = action.payload;
      // const PackageCardData: any = "PackageCardData";
      console.log(item);

      // return update(state, (draft) =>
      //   draft.data[0][0]?.PackageCardData[0]?.CarSpa.map((data: any) => {
      //     return state;
      //   })
      // );

      return {
        ...state,
        data: [
          ...state.data,
          {
            ...state.data[0][0]?.PackageCardData,
            PackageCardData: [
              state.data[0][0]?.PackageCardData[0]?.CarSpa?.map(
                (data2: any) => {
                  console.log(data2.content);

                  return {
                    ...data2,
                    content: [{ ...data2.content, isAddedToCart: true }],
                  };
                }
              ),
            ],
          },
        ],
      };

    default:
      return state;
  }
};

export default Reducer;
