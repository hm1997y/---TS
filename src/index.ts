// import { Square } from "./core/Square"
// import { IViewer } from "./core/types"
// class SquareViewer implements IViewer{
//     constructor(private square:Square){

import { Square } from "./core/Square";
import { SquarePageViewer } from "./core/viewer/SquarePageViewer";
import $ from 'jquery'
import { SquareGroup } from "./core/viewer/SquareGrap";
import { createTeris } from "./core/viewer/Teris";
import { TerisRule } from "./core/viewer/TerisRule";
import { MoveDirection } from "./core/types";
import { Game } from "./core/viewer/Game";
import { GamePageViewer } from "./core/viewer/GamePageViewer";
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
// const sq = new Square();
// sq.viewer = new SquarePageViewer(sq, $('#root'));
// sq.color = 'red';
// sq.point = {
//     x:3,
//     y:4
// }
// console.log(sq)
// sq.viewer.show()
// $('.moveDown').click(function(){
//     sq.point = {
//         x:sq.point.x,
//         y:sq.point.y + 1
//     }
// })

// $('.moveOut').click(function(){
//     if(sq.viewer){
//         sq.viewer.remove()
//     }

// })
// $('.moveAdd').click(function(){
//     sq.viewer = new SquarePageViewer(sq, $('#root'))
//     // sq.viewer.show()
// })

// const group = new SquareGroup([
//     {x:0,y:-1},
//     {x:-1,y:0},
//     {x:0,y:0},
//     {x:0,y:1}
// ],{x:3,y:2},'red')
// group.squares.forEach(sq=>{
//     sq.viewer = new SquarePageViewer(sq, $('#root'))
// })
// import {Test} from './core/types'
// const t:Test = 'safdf'
// const group = createTeris({x:3,y:4})
// group.squares.forEach(sq=>{
//     sq.viewer = new SquarePageViewer(sq, $('#root'))
// })
// $('.moveDown').click(function(){
//     const targetPoint = {
//         x:group.centerPoint.x,
//         y:group.centerPoint.y + 1
//     }

//     // if(TerisRule.canIMove(group.shape,targetPoint)){
//     //     group.centerPoint = targetPoint
//     // }
//     TerisRule.moveDirectly(group, MoveDirection.Down)

// })
// $('.moveUp').click(function(){
//     group.centerPoint = {
//         x:group.centerPoint.x,
//         y:group.centerPoint.y - 1
//     }
// })
// $('.moveLeft').click(function(){
//    TerisRule.move(group,{x:group.centerPoint.x - 1,y:group.centerPoint.y})
// })
// $('.moveRight').click(function(){
//    TerisRule.move(group,MoveDirection.Right)
// })
// $('.rotate').click(function(){
//     group.rotate()
// })

var g = new Game(new GamePageViewer())

$('.startBtn').click(function () {
    console.log(1)
    g.start()
})
$('.pauseBtn').click(function () {
    g.pause()
})