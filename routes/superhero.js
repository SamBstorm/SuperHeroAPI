const superHeroRoutes = (app, fs) => {
    //variables
    const dataPath = './data/superhero.json';

    //READ
    app.get('/api/:id', (req, res) => {
        console.log(`GET with id : ${req.params.id}`)
        fs.readFile(dataPath, 'utf8', (err, data) => {
            if (err) {
                throw err;
            }
            let result = JSON.parse(data);
            result = result.filter((r) => r['id'] == req.params.id);
            if (result.length === 0) {
                result = {
                    response: 'error',
                    error: 'invalid id'
                }
            }
            else {
                result = result[0];
                result = {
                    response: "success",
                    id: result.id,
                    name: result.name,
                    powerstats: result.powerstats,
                    biography: result.biography,
                    appearance: result.appearance,
                    work: result.work,
                    connections: result.connections,
                    image: result.image
                };
            }
            res.send(result);
        });
    });

    app.get('/api/:id/powerstats', (req, res) => {
        console.log(`GET with id : ${req.params.id}`)
        fs.readFile(dataPath, 'utf8', (err, data) => {
            if (err) {
                throw err;
            }
            let result = JSON.parse(data);
            result = result.filter((r) => r['id'] == req.params.id);
            if (result.length === 0) {
                result = {
                    response: 'error',
                    error: 'invalid id'
                }
            }
            else {
                result = result[0];
                result = {
                    response: "success",
                    id: result.id,
                    name: result.name,
                    intelligence: result.powerstats.intelligence,
                    strength: result.powerstats.strength,
                    speed: result.powerstats.speed,
                    durability: result.powerstats.durability,
                    power: result.powerstats.power,
                    combat: result.powerstats.combat,
                };
            }
            res.send(result);
        });
    });
    app.get('/api/:id/biography', (req, res) => {
        console.log(`GET with id : ${req.params.id}`)
        fs.readFile(dataPath, 'utf8', (err, data) => {
            if (err) {
                throw err;
            }
            let result = JSON.parse(data);
            result = result.filter((r) => r['id'] == req.params.id);
            if (result.length === 0) {
                result = {
                    response: 'error',
                    error: 'invalid id'
                }
            }
            else {
                result = result[0];
                result = {
                    response: "success",
                    id: result.id,
                    name: result.name,
                    'full-name': result.biography['full-name'],
                    'alter-egos': result.biography['alter-egos'],
                    aliases: result.biography.aliases,
                    'place-of-birth': result.biography['place-of-birth'],
                    publisher: result.biography.publisher,
                    alignment: result.biography.alignment,
                };
            }
            res.send(result);
        });
    });
    app.get('/api/:id/appearance', (req, res) => {
        console.log(`GET with id : ${req.params.id}`)
        fs.readFile(dataPath, 'utf8', (err, data) => {
            if (err) {
                throw err;
            }
            let result = JSON.parse(data);
            result = result.filter((r) => r['id'] == req.params.id);
            if (result.length === 0) {
                result = {
                    response: 'error',
                    error: 'invalid id'
                }
            }
            else {
                result = result[0];
                result = {
                    response: "success",
                    id: result.id,
                    name: result.name,
                    gender: result.appearance.gender,
                    race: result.appearance.race,
                    height: result.appearance.height,
                    weight: result.appearance.weight,
                    'eye-color': result.appearance['eye-color'],
                    'hair-color': result.appearance['hair-color'],
                };
            }
            res.send(result);
        });
    });
    app.get('/api/:id/work', (req, res) => {
        console.log(`GET with id : ${req.params.id}`)
        fs.readFile(dataPath, 'utf8', (err, data) => {
            if (err) {
                throw err;
            }
            let result = JSON.parse(data);
            result = result.filter((r) => r['id'] == req.params.id);
            if (result.length === 0) {
                result = {
                    response: 'error',
                    error: 'invalid id'
                }
            }
            else {
                result = result[0];
                result = {
                    response: "success",
                    id: result.id,
                    name: result.name,
                    occupation: result.work.occupation,
                    base: result.work.base
                };
            }
            res.send(result);
        });
    });
    app.get('/api/:id/connections', (req, res) => {
        console.log(`GET with id : ${req.params.id}`)
        fs.readFile(dataPath, 'utf8', (err, data) => {
            if (err) {
                throw err;
            }
            let result = JSON.parse(data);
            result = result.filter((r) => r['id'] == req.params.id);
            if (result.length === 0) {
                result = {
                    response: 'error',
                    error: 'invalid id'
                }
            }
            else {
                result = result[0];
                result = {
                    response: "success",
                    id: result.id,
                    name: result.name,
                    'group-affiliation': result.connections['group-affiliation'],
                    relatives: result.connections.relatives
                };
            }
            res.send(result);
        });
    });

    app.get('/api/:id/image', (req, res) => {
        console.log(`GET with id : ${req.params.id}`)
        fs.readFile(dataPath, 'utf8', (err, data) => {
            if (err) {
                throw err;
            }
            let result = JSON.parse(data);
            result = result.filter((r) => r['id'] == req.params.id);
            if (result.length === 0) {
                result = {
                    response: 'error',
                    error: 'invalid id'
                }
            }
            else {
                result = result[0];
                result = {
                    response: "success",
                    id: result.id,
                    name: result.name,
                    url: result.image.url
                };
            }
            res.send(result);
        });
    });
    app.get('/api/search/:name', (req, res) => {
        console.log(`GET with name : ${req.params.name}`)
        fs.readFile(dataPath, 'utf8', (err, data) => {
            if (err) {
                throw err;
            }
            let result = JSON.parse(data);
            result = result.filter((r) => r['name'].toLowerCase().includes(req.params.name.toLowerCase()));
            if (result.length > 0) result = {
                response: "success",
                'result-for': req.params.name,
                results: result
            };
            else result = {
                response: "error",
                error: "character with given name not found"
            }

            res.send(result);
        });
    });
};

module.exports = superHeroRoutes;