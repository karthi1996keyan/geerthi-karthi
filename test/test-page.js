var expect=require('chai').expect;
var request=require('request');

it('Response from 3000 port CICD',function(done)
{
    request('http://localhost:3000',function(error,response,body)
    {
        expect(body).to.equal('this is from jenkins CI/CD pipeline');
        done();
    });

});