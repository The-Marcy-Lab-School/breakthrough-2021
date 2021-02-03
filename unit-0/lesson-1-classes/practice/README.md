# Unit 4 Lesson 4 Practice
## ES6 Class Syntax and Object Oriented Design

0. What is polymorphism? Use code to illustrate your definition.

1. Create a class `Rectangle`. The constructor should take 2 arguments which represent width and length respectively. Implement the class to work as follows:

      ```javascript
      let rect = new Rectangle(4, 5);

      rect.getWidth();  // 4
      rect.getLength(); // 5
      rect.getArea();   // 20
      ```
2. Write a class called Square that implements the same methods as Rectangle:

      Example:
      ```javascript
      const square = new Square(10);
      square.getWidth();  // 10
      square.getLength(); // 10
      square.getSide();   // 10
      square.getArea();   // 100
      ```

3. Create two classes `Cat` and `Dog`.

  `Cat` constructor should take 3 arguments, `name`, `age` and `status`. Cats should always have a `legCount` of `4` and a `species` of cat. Instances of `cat` should also have an `introduce` method which returns a greeting, plus "Meow meow."

      ```javascript
      let cat = new Cat("Pepe", 2, "happy");
      cat.introduce(); // "Hello, my name is Pepe and I am 2 years old. Meow meow!"
      ```

  `Dog` constructor should take 4 arguments, `name`, `age`, `status`, and `master`. Dogs should always have leg count of `4` and a species of `dog`. Dogs `introduce` method should state their name and age. They also should have a method called `greetMaster`, which accepts no arguments and returns `Hello (master's name)! Woof, woof!`. 

4. Consider the following code:

      ```javascript
      let butterscotch = new Pet('cat', 'Butterscotch');
      let pudding      = new Pet('cat', 'Pudding');
      let darwin       = new Pet('bearded dragon', 'Darwin');
      let kennedy      = new Pet('dog', 'Kennedy');
      let sweetie      = new Pet('parakeet', 'Sweetie Pie');
      let molly        = new Pet('dog', 'Molly');
      let chester      = new Pet('fish', 'Chester');

      let phanson = new Owner('P Hanson');
      let bholmes = new Owner('B Holmes');

      let shelter = new Shelter();
      shelter.adopt(phanson, butterscotch);
      shelter.adopt(phanson, pudding);
      shelter.adopt(phanson, darwin);
      shelter.adopt(bholmes, kennedy);
      shelter.adopt(bholmes, sweetie);
      shelter.adopt(bholmes, molly);
      shelter.adopt(bholmes, chester);
      shelter.printAdoptions();
      console.log(`${phanson.name} has ${phanson.numberOfPets()} adopted pets.`);
      console.log(`${bholmes.name} has ${bholmes.numberOfPets()} adopted pets.`);
      ```
  Write the classes and methods that will be necessary to make this code run, and log the following output:

      ```
      P Hanson has adopted the following pets:
      a cat named Butterscotch
      a cat named Pudding
      a bearded dragon named Darwin

      B Holmes has adopted the following pets:
      a dog named Molly
      a parakeet named Sweetie Pie
      a dog named Kennedy
      a fish named Chester

      P Hanson has 3 adopted pets.
      B Holmes has 4 adopted pets.
      ```
      
  The order of the output does not matter, so long as all of the information is presented.

5. The following class is incomplete. The purpose of the class is to construct boxed banners.

      ```javascript
      class Banner {
        constructor(message) {
        }

        displayBanner() {
          console.log([this.horizontalRule(), this.emptyLine(), this.messageLine(), this.emptyLine(), this.horizontalRule()].join("\n"));
        }

        horizontalRule() {}

        emptyLine() {}

        messageLine() {
          return `| ${this.message} |`
        }
      }
      ```
  Complete this class so that the test cases shown below work as intended. You are free to add any properties you need. You may assume that the input will always fit in your terminal window.

      Test Cases:
      ```javascript
      let banner1 = new Banner('To boldly go where no one has gone before.');
      banner1.displayBanner();
      +--------------------------------------------+
      |                                            |
      | To boldly go where no one has gone before. |
      |                                            |
      +--------------------------------------------+


      let banner2 = new Banner('');
      banner2.displayBanner();
      +--+
      |  |
      |  |
      |  |
      +--+
      ```

6. A _circular queue_ is a collection of objects stored in a buffer that is treated as though it is connected end-to-end in a circle. When an object is added to this circular queue, it is added to the position that immediately follows the most recently added object, while removing an object always removes the object that has been in the queue the longest.

  This works as long as there are empty spots in the buffer. If the buffer becomes full, adding a new object to the queue requires getting rid of an existing object; with a circular queue, the object that has been in the queue the longest is discarded and replaced by the new object.

  Assuming we have a circular queue with room for 3 objects, the circular queue looks and acts like this:

   | P1 | P2 | P3 | Comments | 
   | -- | -- | -- | -- | 
   | -- | -- | -- | All positions are initially empty | 
   | 1  | -- | -- | Add 1 to the queue | 
   | 1  | 2  | -- | Add 2 to the queue | 
   | 2  | -- | -- | Remove oldest item from the queue (1) | 
   | 2  | 3  | -- | Add 3 to the queue | 
   | 4  | 2  | 3  | Add 4 to the queue, queue is now full | 
   | 4  | 3  |    | Remove oldest item from the queue (2) | 
   | 4  | 5  | 3  | Add 5 to the queue, queue is full again | 
   | 4  | 5  | 6  | Add 6 to the queue, replaces oldest element (3) | 
   | 7  | 5  | 6  | Add 7 to the queue, replaces oldest element (4) | 
   | 7  | 6  | -- | Remove oldest item from the queue (5) | 
   | 7  | -- | -- | Remove oldest item from the queue (6) | 
   | -- | -- | -- | Remove oldest item from the queue (7) | 
   | -- | -- | -- | Remove non-existent item from the queue (nil) | 

  Your task is to write a `CircularQueue` class that implements a circular queue for arbitrary objects. The class should obtain the buffer size with an argument provided to the constructor, and should provide the following methods:

  * `enqueue` to add an object to the queue
  * `dequeue` to remove (and return) the oldest object in the queue. It should return `null` if the queue is empty.

  You may assume that none of the values stored in the queue are null (however, null may be used to designate empty spots in the buffer).

  Example:
  ```javascript
  let queue = new CircularQueue(3);
  console.log(queue.dequeue() === null);

  queue.enqueue(1);
  queue.enqueue(2);
  console.log(queue.dequeue() === 1);

  queue.enqueue(3);
  queue.enqueue(4);
  console.log(queue.dequeue() === 2);

  queue.enqueue(5);
  queue.enqueue(6);
  queue.enqueue(7);
  console.log(queue.dequeue() === 5);
  console.log(queue.dequeue() === 6);
  console.log(queue.dequeue() === 7);
  console.log(queue.dequeue() === null);

  let anotherQueue = new CircularQueue(4);
  console.log(anotherQueue.dequeue() === null);

  anotherQueue.enqueue(1)
  anotherQueue.enqueue(2)
  console.log(anotherQueue.dequeue() === 1);

  anotherQueue.enqueue(3)
  anotherQueue.enqueue(4)
  console.log(anotherQueue.dequeue() === 2);

  anotherQueue.enqueue(5)
  anotherQueue.enqueue(6)
  anotherQueue.enqueue(7)
  console.log(anotherQueue.dequeue() === 4);
  console.log(anotherQueue.dequeue() === 5);
  console.log(anotherQueue.dequeue() === 6);
  console.log(anotherQueue.dequeue() === 7);
  console.log(anotherQueue.dequeue() === null);
  ```
  The above code should log `true` 15 times.

  _See [here](https://en.wikipedia.org/wiki/Circular_buffer) for mor information on Circular Buffers._

7. Implement the following object relationship diagram using ES6 classes:
  ![class diagram](./diagram2.png)

      Example/Test Cases:
      ```javascript
      let doctor = new Doctor('foo', 'bar', 21, 'gender', 'Pediatrics');
      console.log(doctor instanceof Person);     //  true
      console.log(doctor instanceof Doctor);     //  true
      doctor.eat();                              //  'Eating'
      doctor.communicate();                      //  'Communicating'
      doctor.sleep();                            //  'Sleeping'
      console.log(doctor.fullName());            //  'foo bar'
      doctor.diagnose();                         //  'Diagnosing'

      let professor = new Professor('foo', 'bar', 21, 'gender', 'Systems Engineering');
      console.log(professor instanceof Person);     //  true
      console.log(professor instanceof Professor);  //  true
      professor.eat();                              //  'Eating'
      professor.communicate();                      //  'Communicating'
      professor.sleep();                            //  'Sleeping'
      console.log(professor.fullName());            //  'foo bar'
      professor.teach();                            //  'Teaching'

      doctor.invoice();                          //  'foo bar is Billing customer'
      doctor.payTax();                           //  'foo bar Paying taxes'

      ProfessionalMixin.invoice = function() {
        console.log(this.fullName() + ' is Asking customer to pay');
      };

      doctor.invoice();                          //  'foo bar is Asking customer to pay'
      professor.invoice();                       //  'foo bar is Asking customer to pay'
      professor.payTax();                        //  'foo bar Paying taxes'
      ```

8. Design and implement an object-oriented To-Do List.
