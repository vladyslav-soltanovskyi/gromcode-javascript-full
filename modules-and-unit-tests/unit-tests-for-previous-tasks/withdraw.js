export const withdraw = (clients, balances, client, amount) => {
    const index = clients.findIndex(clientItem => client === clientItem);
    const balance = balances[index];
    if (balance - amount >= 0) {
      balances[index] = balance - amount;
    }
    return balance - amount >= 0 ? balances[index] : -1;
  }