const Task = require('../Model/modular');

module.exports = {
    get: async (req, res) => {
        try {
            const tasks = await Task.find();
            res.send(tasks);
        } catch (err) {
            console.error('Error fetching data:', err);
            res.status(500).send('Internal Server Error');
        }
    }
};
