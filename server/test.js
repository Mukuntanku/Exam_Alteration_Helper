// import { use } from 'chai';
// import { expect, assert } from 'chai';
// import jp from 'jsonpath';
// import chaihttp from 'chai-http';
// use(chaihttp);

// describe('1) MAIN PAGE Response', function() {
//   it('TESTCASE1 PASSED (HOME PAGE)', function() {
//     let res = chai.request('http://localhost:3000')
//     .post('/login')
//     .send({ username: 'admin', password: 'admin' })
//     expect(res).to.have.status(200);
//   });
// });

import chai from 'chai';
import chaihttp from 'chai-http';

chai.use(chaihttp);
const { expect } = chai;

describe('1) MAIN PAGE Response', function() {
  it('TESTCASE1 PASSED (HOME PAGE)', async function() {
    const res = chai.request('http://localhost:3000/start')
      expect(res).to.have.statusCode(200);
  });
});
