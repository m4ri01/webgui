module.exports = {
    index: async (req,res) => {
        try {
            res.render('dashboard/index', { title: 'Express' });
        } catch (error) {
            
        }
    }
}