import DetailsFormModel from "./data";
const { formField } = DetailsFormModel;

const {
  transactioType,
  from,
  to,
  rate,
  charges,
  total,
  paymentSource,
  bankAccount,
  receipientDetails,
} = formField;

const data = {
  [transactioType.name]: "",
  [from.name]: "",
  [to.name]: "",
};

export default data