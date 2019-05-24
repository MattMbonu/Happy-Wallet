import database from "../firebase/firebase";

const addExpense = ({
  id,
  description = "",
  amount = 0,
  createdAt = 0,
  note = ""
}) => ({
  type: "ADD_EARNING",
  earning: { id, description, amount, createdAt, note }
});

export const startAddEarning = ({
  description = "",
  amount = 0,
  createdAt = 0,
  note = ""
}) => {
  return (dispatch, getState) => {
    const earning = { description, amount, createdAt, note };
    const uid = getState().auth.uid;
    return database
      .ref(`users/${uid}/earnings`)
      .push(earning)
      .then(ref => dispatch(addExpense({ id: ref.key, ...earning })));
  };
};

const setEarnings = earnings => ({ type: "SET_EARNING", earnings });

export const startSetEarnings = () => {
  return (dispatch, getState) => {
    const earnings = [];
    const uid = getState().auth.uid;
    database
      .ref(`users/${uid}/earnings`)
      .once("value")
      .then(snapshot => {
        snapshot.forEach(snapshotChild => {
          console.log(snapshotChild);
          earnings.push({
            id: snapshotChild.key,
            ...snapshotChild.val()
          });
        });
      })
      .then(() => dispatch(setEarnings(earnings)));
  };
};
