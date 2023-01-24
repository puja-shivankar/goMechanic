export const SaveData = (data: any) => ({
  type: "SAVE",
  payload: data,
});
export const AddCheckoutData = (data: any) => ({
  type: "AddCheckout",
  payload: data,
});
export const RemoveServiceData = (data: any) => ({
  type: "RemoveService",
  payload: data,
});

export const SetIsBtnActive = (data: any) => ({
  type: "IsBtnActive",
  payload: data,
});
export const RemoveCheckoutRow = (data: any) => ({
  type: "RemoveRow",
  payload: data,
});
