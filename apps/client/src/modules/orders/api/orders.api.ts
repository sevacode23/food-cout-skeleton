// Axios requests for orders

export const getSessionOrders = async () => api.get("/session/orders");

export const getSessionOrder = async (orderId: string) =>
  api.get(`/session/orders/${orderId}`);
