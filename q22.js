/* Q22-Write a JavaScript program to create a class called 'Rectangle' with properties for width and height. Include two methods to calculate 
   rectangle area and perimeter. Create an instance of the 'Rectangle' class and calculate its area and perimeter. */

class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    Area() {
        return this.width * this.height;
    }

    Perimeter() {
        return 2 * (this.width + this.height);
    }
}

const rectangle = new Rectangle(7, 5);
console.log("Area:", rectangle.Area()); 
console.log("Perimeter:", rectangle.Perimeter());
