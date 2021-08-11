const express = require('express');
const createError = require('http-errors');

const currentService = require('./service');

// Create a new person.
module.exports.create = (req, res, next) => {
    const { customer, products, note } = req.body;
    if (!customer || !products) {
        return next(
            new createError.BadRequest("Missing properties!")
        );
    }

    const newOrder = {
        customer: customer,
        products: products,
        note: note || ''
    };

    return currentService.create(newOrder)
        .then(cp => {
            res.status(201);
            res.json(cp);
        })
        .catch(err => next(new createError.InternalServerError(err.message)));
};

module.exports.findAll = (req, res, next) => {
    return currentService.findAll()
        .then( items => {
            res.json(items);
        });
};

module.exports.findOne = (req, res, next) => {
    return currentService.findOne(req.params.id)
        .then( item => {
            if (!item) {
                return next(new createError.NotFound("Order is not found"));
            }
            return res.json(item);
        });
};

module.exports.update = (req, res, next) => {
    const id = req.params.id;
    const { first_name, last_name, email } = req.body;
    if (!customer || !products) {
        return next(
            new createError.BadRequest("Missing properties!")
        );
    }

    return currentService.update(req.params.id, req.body)
        .then(item => {
            res.json(item);
        })
        .catch( err => {
            next(new createError.InternalServerError(err.message));
        });
};

module.exports.delete = (req, res, next) => {
    return currentService.delete(req.params.id)
        .then( () => res.json({}) )
        .catch( err => {
            next(new createError.InternalServerError(err.message));
        } );
};
