export const getAllTransactions = state => state.transactions.items;
// export const getIncomeTransactions = state => state.transaction;
// export const getExpensesTransactions = state => state.transaction;
export const getBalance = state => state.transactions.balance;
export const getLoading = state => state.transactions.loading;
