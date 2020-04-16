# SSL Certificate Validator
This script uses [get-ssl-certificate]() and [ssl-validator]() to validate if a domain has valid ssl ceritificate. 
To setup use the following command
```bash
npm install
```
and to validate the domain use the following command
```bash
node app.js -d example.com
```

This gives the following response
```
Getting certificate for example.com
Validating certificate
Certificate valid! Issuer: DigiCert Inc
```