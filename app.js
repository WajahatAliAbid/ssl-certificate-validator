const sslCertificate = require('get-ssl-certificate');
const { validateCertToDomain } = require('ssl-validator');


let site_domain = "example.com"
sslCertificate.get(site_domain).then(async function (certificate) {
    console.log(JSON.stringify(certificate));
    let data = await validateCertToDomain(cert=certificate.pemEncoded, domain=site_domain , options=null)
    console.log(JSON.stringify(data))
});