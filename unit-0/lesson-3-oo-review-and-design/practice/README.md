## Design Challenge 

Design an Amazon Store using Object Oriented JavaScript. 

Your solution should encompass

Users
    Properties
    - id
    - first name 
    - last name
    - email
    - password
    - credit card
    - cart
    Abilities
    - Add item to cart
    - abandon cart
    - leave a review
    - checkout

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
    - carts
    - users
    Abilities
    - createANewCart
    - retriveACart
