import { fetchCurrentDollar } from './fetchCurrentDollar'

test('fetchCurrentDollar retorna valor padrão em caso de erro', async () => {
  const originalFetch = globalThis.fetch
  globalThis.fetch = (): Promise<never> => Promise.reject(new Error('API indisponível'))

  const value = await fetchCurrentDollar()
  expect(value).toBe(5.42)

  globalThis.fetch = originalFetch 
})