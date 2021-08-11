const express = require('express');
const createError = require('http-errors');

const currentService = require('./service');

// Create.
module.exports.create = (req, res, next) => {
    const validationErrors = new Model(req.body).validateSync();
    if (validationErrors) {
        return next(
            new createError.BadRequest(validationErrors)
        );
    }

    return currentService.create(req.body)
        .then(cp => {
            res.status(201);
            res.json(cp);
        })
        .catch(err => next(new createError.InternalServerError(err.message)));
};

// Get.
module.exports.findAll = (req, res, next) => {
    return currentService.findAll()
        .then( items => {
            res.json(items);
        });
};

// Get one.
module.exports.findOne = (req, res, next) => {
    return currentService.findOne(req.params.id)
        .then( item => {
            if (!item) {
                return next(new createError.NotFound("Order is not found"));
            }
            return res.json(item);
        });
};

// Update.
module.exports.update = (req, res, next) => {
    const validationErrors = new Model(req.body).validateSync();
    if (validationErrors) {
        return next(
            new createError.BadRequest(validationErrors)
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

// Delete.
module.exports.delete = (req, res, next) => {
    return currentService.delete(req.params.id)
        .then( () => res.json({}) )
        .catch( err => {
            next(new createError.InternalServerError(err.message));
        } );
};
