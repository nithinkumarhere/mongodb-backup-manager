const express = require('express');
const response = require('modules/helper/response');
const controller = require('modules/controller/controller');
const databases = express.Router();


databases.get('/availableDBs', (req, res, next) => {
    const mongoParams = req.query;
    console.log(mongoParams.server);
    controller.getAvailableDBsCollections(mongoParams, next)
});


databases.get('/copyDBs', (req, res, next) => {
    const backupID = req.query.id;

    controller.getBackupCopyDBs(backupID, next);
});

databases.get('/allCopyDBs', (req, res, next) => {
    controller.getAllBackupCopyDBs(next);
});

databases.delete('/', (req, res, next) => {
    const { id, db } = req.query;

    controller.deleteDB(id, db, next)
});

module.exports = databases;
