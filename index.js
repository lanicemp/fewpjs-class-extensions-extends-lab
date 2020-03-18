// Your code here
class Polygon {

    constructor(sides){
        this.sides = sides;
        this.count = sides.length
    }
    get countSides(){
        return this.count;
    }
    get perimeter(){
        let sum = 0; 
        for(let i = 0; i < this.sides.length; i++ ){
            sum += this.sides[i];
        }
        return sum; 
    }
}
class Triangle extends Polygon{
    get isValid() {
        
        let a = this.sides[0]
        let b = this.sides[1]
        let c = this.sides[2]
    
        return (this.countSides === 3 && (a+b > c && a+c > b && b+c > a))
       
    }
}
class Square extends Polygon{
    get area(){

    } 
   get isValid() {
    let a = this.sides[0]
    let b = this.sides[1]
    let c = this.sides[2]
    let d = this.sides[3]

    return (this.countSides === 4 && (a === b && b === c && c === d && d === a))
   }
   get area() {
        if (this.isValid) {
        
        return this.sides[0] ** 2
        }
    }
}