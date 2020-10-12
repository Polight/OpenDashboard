
async function request(method, uri, body, options = {}) {
  if(!['get', 'head'].includes(method.toLowerCase()))
    options.body = body ? JSON.stringify(body) : ""
  options.method = method
  options.headers = { 'API-KEY': localStorage.token }
  const response = await fetch(`http://localhost:2626${uri}`, options)
  try {
    response.data = await response.json()
  }
  catch {
    response.data = null
  }
  if(!response.ok && response.data) alert(response.data.error)
  return response
}
