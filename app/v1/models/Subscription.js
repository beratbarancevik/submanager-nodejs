/*jslint node: true */
'use strict';

class Subscription {
    constructor(id, typeId, userId, title, description, price, startedAt, createdAt, updatedAt) {
        this.id = id;
        this.typeId = typeId;
        this.userId = userId;
        this.title = title;
        this.description = description;
        this.price = price;
        this.startedAt = startedAt;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }
}

module.exports = Subscription;