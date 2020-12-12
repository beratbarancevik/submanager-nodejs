const assert = require('assert');

// Models
const CustomError = require('../app/v1/models/CustomError');
const Subscription = require('../app/v1/models/Subscription');
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

describe('Models', function () {
  describe('Subscription constructor', function () {
    it('Successfully creates Subscription object', function () {
      const id = 'bd3c771c-3d66-4d29-bb92-d5b64955c3e4';
      const typeId = 'b4fa7ed0-69e3-4c77-a1d9-bdf0ca335352';
      const userId = 'asfniacncanjcasjkalaamc';
      const title = 'Netflix';
      const description = 'Monthly Netflix Premium HD Membership';
      const price = '17.99';
      let subscription = new Subscription(id, typeId, userId, title, description, price);
      assert.strictEqual(id, subscription.id);
      assert.strictEqual(typeId, subscription.typeId);
      assert.strictEqual(userId, subscription.userId);
      assert.strictEqual(title, subscription.title);
      assert.strictEqual(description, subscription.description);
      assert.strictEqual(price, subscription.price);
    });
  });
});