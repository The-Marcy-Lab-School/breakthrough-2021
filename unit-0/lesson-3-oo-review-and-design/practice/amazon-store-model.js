// One of many, many, many possible implementations.

class User {
    constructor(id, firstName, lastName, email, password) {
        // assignment
    }
    
}

class Seller extends User { 
    constructor() {
        this.inventory = {}
    }
}

class Buyer extends User { 
    constructor() {

    }

    addItemToCart() {
    }

    abandonCart() {

    }
    
    leaveReviewForProduct() {

    }

    removeItemFromCart() {
    }

    checkout() {

    }
}

class Product {
    constructor(id, name, price) {
        this.reviews = []
    }

    addReview() {

    }

    removeReview() {

    }

    get averageRating() {
        const total = this.reviews.reduce(
            (currentTotal, review) => currentTotal + review.rating, 0)

        const avg = total / this.reviews.length

        return avg;
    }

    filterReviewsByRating(rating) {
        this.reviews.filter(function (review) {
            // filter all reviews that don't match the rating
        })
    }
}

class Reviews {
    constructor(rating) {

    }
}


class Cart {
    constructor() {
    }

    addItem() {

    }

    removeItem() {

    }
}

