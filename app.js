'use-strict'

const sslCertificate = require('get-ssl-certificate');
const { validateCertToDomain } = require('ssl-validator');

const ArgumentParser = require('argparse').ArgumentParser;

var parser = new ArgumentParser({
    version: '0.0.1',
    addHelp: true,
    description: 'Domain ssl certificate validator'
});
parser.addArgument(
    ['-d', '--domain'],
    {
        help: 'Domain to validate for ssl certificate',
        required: true,
    }
);
let args = parser.parseArgs();
let site_domain = args.domain;
(async () => {
    try {
        console.info(`Getting certificate for ${site_domain}`);
        let certificate = await sslCertificate.get(site_domain);
        console.info("Validating certificate");
        let data = await validateCertToDomain(cert = certificate.pemEncoded, domain = site_domain, options = null);
        console.info(`Certificate valid! Issuer: ${data.certInfo.issuer.organization}`);
    } catch (error) {
        console.error(error);
    }
})();
