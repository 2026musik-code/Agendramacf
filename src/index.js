export default function handleIndex(request) {
  return new Response(
    JSON.stringify({ message: 'API response from Agendramacf' }),
    { headers: { 'Content-Type': 'application/json' } }
  )
}
