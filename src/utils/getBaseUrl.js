/**
 *
 * @returns {string} - Retorna a url base da aplicacao ou null caso nao seja possivel determinar
 */

function getBaseUrl() {
  if (typeof window === "undefined") return null;
  const url = new URL(window.location.href);
  return url.origin;
}

export default getBaseUrl;
