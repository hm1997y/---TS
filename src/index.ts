// import { Square } from "./core/Square"
// import { IViewer } from "./core/types"
// class SquareViewer implements IViewer{
//     constructor(private square:Square){

import { Square } from "./core/Square";
import { SquarePageViewer } from "./core/viewer/SquarePageViewer";
import $ from 'jquery'
//     }
//     show(): void {
//        console.log(this.square.point, this.square.color)
//     }
//     remove(): void {
//         throw new Error("Method not implemented.")
//     }

// }
// const sq = new Square({x:0,y: 0}, 'red')
// sq.viewer = new SquareViewer(sq)
// sq.viewer.show()
// sq.point = {
//     x:3,
//     y:4
// }
const sq = new Square();
sq.viewer = new SquarePageViewer(sq, $('#root'));
sq.color = 'red';
sq.point = {
    x:3,
    y:4
}
console.log(sq)
sq.viewer.show()
$('.moveDown').click(function(){
    sq.point = {
        x:sq.point.x,
        y:sq.point.y + 1
    }
})

$('.moveOut').click(function(){
    if(sq.viewer){
        sq.viewer.remove()
    }
   
})
$('.moveAdd').click(function(){
    sq.viewer = new SquarePageViewer(sq, $('#root'))
    // sq.viewer.show()
})

