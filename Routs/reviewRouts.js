const express = require('express');
const router = express.Router();

const reviewController = require('../Controllers/ReviewController');


router.route('/')
    .get(reviewController.getAllReviews)
    .post(reviewController.addNewReview)

router.route('/:reviewId')
    .get(reviewController.getSingleReview)
    .patch(reviewController.updateReview)
    .delete(reviewController.deleteReview)


module.exports = router;