import moment from "moment";

export default [
  {
    id: "1",
    description: "rent",
    note: "",
    amount: 10000,
    createdAt: moment(0)
  },
  {
    id: "2",
    description: "gum",
    note: "",
    amount: 20000,
    createdAt: moment(0)
      .subtract(4, "days")
      .valueOf()
  },
  {
    id: "3",
    description: "credit card",
    note: "",
    amount: 30000,
    createdAt: moment(0)
      .add(4, "days")
      .valueOf()
  },
  {
    id: "4",
    description: "gummmmm",
    note: "",
    amount: 80000,
    createdAt: moment(0)
      .subtract(5, "days")
      .valueOf()
  }
];
