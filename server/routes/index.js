/**
 * Routing file
 * This file holds all the possible routes our app can make. It also has a reference to services to help keep logic out of this layer.
 */
'use strict';
// import {createTask} from '../services/taskService'; import {createUser} from
// '../services/userService';


import {
    deletePerson,
    getPerson,
    putPerson,
    getAllPerson,
    createPerson
} from '../services/personService';

export default(app) => {



    /* GET Status list /api */
    app.get('/', (req, res) => {
        res.render('index');
    });

    app.post('/user', (reg,res) => {
        console.log(req.body);
        createPerson(req.body, (err,data) => {
            if(!err){
                console.log(data);
            }
            res.json(data)
        });
    });

    app.get('/Registration', (req, res) => {
        res.render('Registration');
    });

    app.get('/Update', (req, res) => {
        res.render('Update');
    });

    /* GET Status list /api */
    app.get('/api', function (req, res) {
        res.send('API is located at /api/status and /api/person');
    });

    // ============= /api/status =============

    /* Generate Statuses /api */
    app.get('/api/status/generate/:quantity', function (req, res) {
        console.log('Generating ' + req.params.quantity + 'Statuses');
        genStatus(req.params.quantity)
    });

    /* GET Status list /api/status */
    app.get('/api/status', (req, res) => {
        getAllStatus({}, (err, data) => {
            if (!err) {
                console.log(data);
                res
                    .status(201)
                    .json(data);
            } else {
                res
                    .status(400)
                    .json(err);
            }

        });
    });

    /* GET Status by id /api/status/:id */
    app.get('/api/status/:id', function (req, res) {
        console.log('getting item ' + req.params.id);
        getStatus({
            _id: req.params.id
        }, function (err, item) {
            if (!err) {
                console.log(item);
                res
                    .status(200)
                    .send(item);
            } else {
                res
                    .status(400)
                    .send('error finding item')
            }
        });
    });

    app.post('/api/status', (req, res) => {
        createStatus(req.body, (err, item) => {
            if (!err) {
                console.log(item);
                // res.json(item);
                res
                    .status(201)
                    .send(item);
            } else {
                res
                    .status(400)
                    .json(err);

            }

        });
    });

    /* DELETE Status item /api/status/:id */
    app.delete('/api/status/:id', function (req, res) {
        deleteStatus({
            _id: req.params.id
        }, function (err, data) {
            if (!err) {
                console.log(data);
                res
                    .status(201)
                    .json(data);
            } else {
                res
                    .status(400)
                    .json(err);
            }
        });
    });

    app.put('/api/status/:id', (req, res) => {
        getStatus({
            _id: req.params.id
        }, (err, item) => {
            // Handle any possible database errors
            if (err) {
                res
                    .status(400)
                    .send('error updating status item');
            } else {
                // Save the updated document back to the database
                console.log('updating status with ' + req.body)
                putStatus(req.params.id, {
                    $set: {
                        content: req.body.content
                    }
                }, (err, item) => {
                    if (err) {
                        res
                            .status(400)
                            .send('error updating status item');
                    } else {
                        res
                            .status(200)
                            .send(item);
                    }
                });
            }
        });
    });

    // ============= /api/people =============
    /* Generate People /api */
    app.get('/api/person/generate/:quantity', function (req, res) {
        console.log('Generating ' + req.params.quantity + 'People');
        genPerson(req.params.quantity)
    });

    /* GET Status list /api/person */
    app.get('/api/person', (req, res) => {
        getAllPerson({}, (err, data) => {
            if (!err) {
                console.log(data);
                res
                    .status(201)
                    .json(data);
            } else {
                res
                    .status(400)
                    .json(err);
            }

        });
    });

    /* GET Status by id /api/person/:id */
    app.get('/api/person/:id', function (req, res) {
        console.log('getting Person with ID ' + req.params.id);
        getPerson({
            _id: req.params.id
        }, function (err, item) {
            if (!err) {
                console.log(item);
                res
                    .status(200)
                    .send(item);
            } else {
                res
                    .status(400)
                    .send('error finding person')
            }
        });
    });

    app.post('/api/person', (req, res) => {
        console.log(req.body);
        createPerson(req.body, (err, item) => {
            if (!err) {
                console.log(item);
                res
                    .status(201)
                    .json(item);
            } else {
                console.log(err);
                res
                    .status(400)
                    .json(err);

            }

        });
    });

    /* DELETE Status item /api/status/:id */
    app.delete('/api/person/:id', function (req, res) {
        deletePerson({
            _id: req.params.id
        }, function (err, data) {
            if (!err) {
                console.log(data);
                res
                    .status(201)
                    .json(data);
            } else {
                res
                    .status(400)
                    .json(err);
            }
        });
    });
    // PUT Person SEE https://coursework.vschool.io/mongoose-crud/
    app.put('/api/person/:id', (req, res) => {
        console.log('Updating person with ' + JSON.stringify(req.body));
        putPerson(req.params.id, req.body, (err, item) => {
            if (!err) {
                console.log(item);
                res
                    .status(200)
                    .send(item);
                
            } else {
                res
                    .status(400)
                    .send('error updating person');
            }
        });
    });
}