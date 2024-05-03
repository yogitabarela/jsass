// Q16-Write a JavaScript function to parse an URL.

function parseURL(url) {
    const parsedURL = new URL(url);
    return {
        protocol: parsedURL.protocol,
        host: parsedURL.host,
        hostname: parsedURL.hostname,
        port: parsedURL.port,
        pathname: parsedURL.pathname,
        search: parsedURL.search,
        hash: parsedURL.hash
    };
}

const url = 'https://www.youtube.com/';
const parsedURL = parseURL(url);
console.log(parsedURL);
