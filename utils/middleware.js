const unknownRoute = (_request, response, next) => response.status(404).end();

export default { unknownRoute };
