const router = express.Router();
const Review = require('./models/Review');

/* --- Adds a new review to db -- */
router.post('/', (req, res) => {
    let review = new Review({
        review: req.body.textValue
    })
    review.save();
    res.send("ok");
});

/* --- Adds a new review to db -- */
router.get('/', (req, res) => {
    let allReviews;
    Review.find({}, function(err, result){
        allReviews = result;
        res.send(JSON.stringify(allReviews));
    });  
});

module.exports = router;