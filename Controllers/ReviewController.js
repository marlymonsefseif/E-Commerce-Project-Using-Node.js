const Review = require('../Models/reviewModel');

//get all reviews
const getAllReviews = async (req, res) => {
    let reviews = await Review.find();
    res.json(reviews);
}

//get single review
const getSingleReview = async (req, res) => {
    try {
        const id = req.params.reviewId;
        const review = await Review.findById(id);
        if (!review) {
            return res.status(404).json({ message: "review not found" });
        }
        res.json(review);
    } catch (error) {
        console.log(error)
        return res.status(400).json({ message: "Invalid Id" });

    }

}

//add new review
const addNewReview = async (req, res) => {
    try {
        let review = new Review(req.body);
        await review.save()
        res.json(review);

    } catch (error) {
        return res.status(400).json(error);
    }

}

//update review
const updateReview = async (req, res) => {
    const id = req.params.reviewId;

    if (!req.body.rating) {
        return res.status(400).json({ message: "rating cannot be empty" });
    }
    if (req.body.rating < 0) {
        return res.status(400).json({ message: "rating cannot be negative" });
    }

    let review = await Review.findByIdAndUpdate(id, req.body, { new: true })
    res.json(review);
}

//delete product
const deleteReview = async (req, res) => {
    const id = req.params.reviewId;
    let review = await Review.findByIdAndDelete(id);
    if (!review) {
        return res.status(400).json({ message: "review not found!" });
    }
    res.json({"message":"review deleted successfully"});
    //res.json(review)
}

module.exports = {
    getAllReviews,
    getSingleReview,
    addNewReview,
    updateReview,
    deleteReview
}