export const getAllTransactions = state => state.transactions.items;
export const getIncomeTransactions = state => state.transactions.incomes;
export const getExpensesTransactions = state => state.transactions.expenses;
// export const getBalance = state => state.auth.user.balance;
export const getLoading = state => state.transactions.loading;
