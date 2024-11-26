exports.hello = async (event) => {
  const cspHeader =
    "default-src 'self'; script-src 'self' https://trusted.cdn.com; style-src 'self' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; object-src 'none'; img-src 'self' https://trusted.images.com;";

  return {
    statusCode: 200,
    headers: {
      "Content-Type": "text/html",
      "Content-Security-Policy": cspHeader, // Lägg till CSP-header
    },
    body: JSON.stringify({
      message: "Hello, CSP World!",
    }),
  };
};
