## Design Challenge 

Design an Amazon Store using Object Oriented JavaScript. 

Your solution should encompass

Users
    Types of Users
    Sellers,
    Buyers

    Properties
    1. id
    2. first name 
    3. last name
    4. email
    5. password
    7. cart
    Abilities
    1. Add item to cart
    2. remove item(s) from cart
    3. checkProductQuantity
    4. contactSeller
    - abandon cart
    - leave a review
    - checkout

PaymentInfo
    Properties
    - cc number
    - csv
    - id
    - userId

Coupon
    Properties
    - code
    - expiration date
    Abilities
    - checkValidaty


Cart
    Properties
    - id
    - userId
    - items
    Abilities
    - add items
    - remove items
    - edit item quantity
    - getTotal
    - checkCoupon
    - calculateTax

Product
    Properties
    - id
    - name
    - price
    - reviews

Reviews
    Properties
    - id
    - rating
    - comment
    - idOfReviewer

Store
    Properties
    - products
    - name
    Abilities
    - createANewCart
    - retrieveACart
