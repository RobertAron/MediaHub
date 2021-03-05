const serverError = {
  statusCode: 500,
  body: 'error in lambda config',
  headers: { "Content-Type": "text/plain" },
}

const clientError = {
  statusCode: 400,
  body: 'client error',
  headers: { "Content-Type": "text/plain" },
}

const notFoundError = {
  statusCode: 404,
  body: 'no item found',
  headers: { "Content-Type": "text/plain" },
}

export {
  serverError,
  clientError,
  notFoundError
}