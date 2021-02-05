## Design Challenge 

Design an Amazon Store using Object Oriented JavaScript. 

Your solution should encompass

Users
    Properties
    1. id
    2. first name 
    3. last name
    4. email
    5. password
    6. credit card
    7. cart
    Abilities
    1. Add item to cart
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
