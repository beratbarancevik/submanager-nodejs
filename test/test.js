const assert = require('assert');

// Models
const CustomError = require('../app/v1/models/CustomError');
describe('Models', function () {
  describe('CustomError constructor', function () {
    it('Successfully creates CustomError object', function () {
      const errorCode = 'EMPTY_TITLE';
      const statusCode = 400;
      let customError = new CustomError(errorCode, statusCode);
      assert.strictEqual(errorCode, customError.message);
      assert.strictEqual(errorCode, customError.errorCode);
      assert.strictEqual(statusCode, customError.statusCode);
    });
  });
});