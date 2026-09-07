export async function submitToGoogleSheet(payload: Record<string, unknown>, sheet: string) {
  const endpoint = import.meta.env.PUBLIC_GOOGLE_SHEETS_ENDPOINT;
  if (!endpoint) throw new Error('Google Sheets endpoint is not configured.');
  const response = await fetch(endpoint, { method: 'POST', headers: { 'Content-Type': 'text/plain;charset=utf-8' }, body: JSON.stringify({ sheet, ...payload }) });
  if (!response.ok) throw new Error(`Sheet submission failed: ${response.status}`);
  return response.json().catch(() => ({ ok: true }));
}
