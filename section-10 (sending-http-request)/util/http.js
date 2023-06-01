import axios from "axios";

// Firebase Realtime Database
const firebaseRootUrl = YOUR_URL_HERE;

export async function storeExpense(expenseData) {
  const response = await axios.post(
    firebaseRootUrl + "/expenses.json",
    expenseData
  );
  const id = response.data.name;
  return id;
}

export async function fetchExpenses() {
  const response = await axios.get(firebaseRootUrl + "/expenses.json");

  const expenses = [];

  for (const key in response.data) {
    const expenseObj = {
      id: key,
      amount: response.data[key].amount,
      date: new Date(response.data[key].date),
      description: response.data[key].description,
    };
    expenses.push(expenseObj);
  }

  return expenses;
}

export function updateExpense(id, expenseData) {
  return axios.put(firebaseRootUrl + `/expenses/${id}.json`, expenseData);
}

export function deleteExpense(id) {
  return axios.delete(firebaseRootUrl + `/expenses/${id}.json`);
}
