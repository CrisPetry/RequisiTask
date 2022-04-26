
module.exports = (app) => {

    app.get('/livros', (req, res) => {
        //res.send('retornar livros');
        db.collection('livros').find().toArray((err, results) => {
            if (err) throw err;
            res.json(results);
        });
    });

    app.post('/livros', (req, res, next) => {
        db.collection('livros').insertOne(req.body, (err, result) => {
            if (err) throw err;
            res.json({ success: "Incluído com sucesso." });
        })
    });


}