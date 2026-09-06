import type { PaymentPayload } from '@/types';

export async function submitPaymentReference(payload: PaymentPayload) {
  const { submitToGoogleSheet } = await import('./googleSheets');
  return submitToGoogleSheet({ ...payload }, 'Payments');
}
