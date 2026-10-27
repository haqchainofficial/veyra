// Address of the VEYRA invite system (Google Apps Script web app).
window.VEYRA_API = 'https://script.google.com/macros/s/AKfycby4vRAG4dpNbu1VPcrBm8LUoBbpQzIbQknRk45u57QF1Ix56WrMJX4j8Y2wCZrsCpSM/exec';

window.veyraGet = function (params) {
  var q = Object.keys(params).map(function (k) { return encodeURIComponent(k) + '=' + encodeURIComponent(params[k]); }).join('&');
  return fetch(window.VEYRA_API + '?' + q, { method: 'GET', credentials: 'omit', cache: 'no-store' })
    .then(function (r) { if (!r.ok) throw new Error('HTTP ' + r.status); return r.json(); });
};

window.veyraPost = function (body) {
  return fetch(window.VEYRA_API, {
    method: 'POST', credentials: 'omit', cache: 'no-store',
    headers: { 'Content-Type': 'text/plain;charset=utf-8' },
    body: JSON.stringify(body)
  }).then(function (r) { if (!r.ok) throw new Error('HTTP ' + r.status); return r.json(); });
};
