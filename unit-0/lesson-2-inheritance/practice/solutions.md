# Unit 4 Lesson 5 Practice Set Solutions

0. The `Object.prototype.constructor` property returns a refernce to the constructor function that created the object instance. For object literals, the `constructor` property returns `Object.`

1. 
```js
class Building {
    constructor(address, numOfFloors, squareFt){
        this.address = address;
        this.numOfFloors = numOfFloors;
        this.squareFt = squareFt;
        this.isLocked = true;
    }

    unlock(){
        this.isLocked = false;
    }

    lock(){
        this.isLocked = true;
    }
}
```

2. 
```js
class School extends Buildling {
    constructor(address, numOfFloors, squareFt, schoolName){
        super(address, numOfFloors, squareFt)
        this.schoolName = schoolName;
    }

    ringBell(){
        return "ding ding!";
    }

    fireDrill(){
        this.unlock();
        return "Fire Drill active";
    }
}
```

3. 
```js
class Polygon {
    constructor(...sides){
        this.sides = sides;
    }

    getPerimiter(){
        return this.sides.reduce((total, side) => total + side, 0);
    }
}
```

4. 
```js
class Triangle extends Polygon {
    constructor(...sides){
        super(...sides);
        this.isEqualateral = (new Set(sides)).size === 1;
    }

    isRight(){
        const sorted = this.sides.sort((a, b) => a > b);
        return (sorted[0]**2 + sorted[1]**2) === sorted[2]**2;
    }
}
```

5.
```js
class Rectangle extends Polygon {
    constructor(length, width){
        super(length, width, length, width);
        this.length = length;
        this.width = width;
    }

    getArea(){
        return this.length * this.width;
    }
}
```

6.
```js
class Square extends Polygon {
    constructor(side){
        super(side, side);
    }

    areaOfInscribedCircle(){
        this.getArea() * (Math.PI / 4);
    }
}
```

7. 
```js
class Triangle extends Polygon {
    static getHypotenuse(a, b){
        const cSquared = a**2 + b**2;
        return Math.sqrt(cSquared);
    }
    constructor(...sides){
        super(...sides);
        this.isEqualateral = (new Set(sides)).size === 1;
    }

    isRight(){
        const sorted = this.sides.sort((a, b) => a > b);
        return (sorted[0]**2 + sorted[1]**2) === sorted[2]**2;
    }
}

```