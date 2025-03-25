import { fetchWithAuth } from "./auth"

// Accounts API
export async function getAccounts() {
  const response = await fetchWithAuth("/accounts")
  if (!response.ok) {
    throw new Error("Failed to fetch accounts")
  }
  return response.json();
}

export async function createAccount(data) {
  const response = await fetchWithAuth("/accounts", {
    method: "POST",
    body: JSON.stringify(data),
  })

  if (!response.ok) {
    throw new Error("Failed to create account")
  }

  return response.json();
}

// Incomes API
export async function getIncomes() {
  const response = await fetchWithAuth("/incomes")
  if (!response.ok) {
    throw new Error("Failed to fetch incomes")
  }
  return response.json();
}

export async function createIncome(data) {
  const response = await fetchWithAuth("/incomes", {
    method: "POST",
    body: JSON.stringify(data),
  })

  if (!response.ok) {
    throw new Error("Failed to create income")
  }

  return response.json();
}

// Expenses API
export async function getExpenses() {
  const response = await fetchWithAuth("/expenses")
  if (!response.ok) {
    throw new Error("Failed to fetch expenses")
  }
  return response.json();
}

export async function createExpense(data) {
  const response = await fetchWithAuth("/expenses", {
    method: "POST",
    body: JSON.stringify(data),
  })

  if (!response.ok) {
    throw new Error("Failed to create expense")
  }

  return response.json();
}

// Savings API
export async function getSavings() {
  const response = await fetchWithAuth("/savings")
  if (!response.ok) {
    throw new Error("Failed to fetch savings")
  }
  return response.json();
}

export async function createSaving(data) {
  const response = await fetchWithAuth("/savings", {
    method: "POST",
    body: JSON.stringify(data),
  })

  if (!response.ok) {
    throw new Error("Failed to create saving")
  }

  return response.json();
}

