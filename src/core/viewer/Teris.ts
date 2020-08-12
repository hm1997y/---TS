import {Shape, Point} from '../types'
import {getRandom} from './utils'
import { SquareGroup } from './SquareGrap'
export class TLeftShape extends SquareGroup{
    constructor(
        _centerPoint:Point,
        _color:string
    ){
        super([
            {x:0,y:0},{x:-1,y:0},{x:0,y:-1},{x:0,y:1}
        ],_centerPoint,_color)
    }
}
// export const TLeftShape:Shape = [
//     {x:0,y:0},{x:-1,y:0},{x:0,y:-1},{x:0,y:1}
// ]
class TRightShape extends SquareGroup{
    constructor(
        _centerPoint:Point,
        _color:string
    ){
        super(
            [
                {x:0,y:0},{x:1,y:0},{x:0,y:-1},{x:0,y:1}
            ],
            _centerPoint,
            _color
        )
    }
}
// export const TRightShape:Shape = [
//     {x:0,y:0},{x:1,y:0},{x:0,y:-1},{x:0,y:1}
// ]
class TTopShape extends SquareGroup{
    constructor(
        _centerPoint:Point,
        _color:string
    ){
        super(
            [
                {x:0,y:0},{x:-1,y:0},{x:1,y:0},{x:0,y:-1}
            ],
            _centerPoint,
            _color
        )
    }
}
// export const TTopShape:Shape = [
//     {x:0,y:0},{x:-1,y:0},{x:1,y:0},{x:0,y:-1}
// ]
export class TBottomShape extends SquareGroup{
    constructor(
        _centerPoint:Point,
        _color:string
    ){
        super(
            [
                {x:0,y:0},{x:-1,y:0},{x:1,y:0},{x:0,y:1}
            ],
            _centerPoint,
            _color
        )
    }
}
// export const TBottomShape:Shape = [
//     {x:0,y:0},{x:-1,y:0},{x:1,y:0},{x:0,y:1}
// ]
export class SLeftShape extends SquareGroup{
    constructor(
        _centerPoint:Point,
        _color:string
    ){
        super(
            [
                {x:0,y:0},{x:-1,y:0},{x:0,y:1},{x:1,y:1}
                ],
                _centerPoint,
                _color
        )
    }
}
// export const SLeftShape:Shape = [
// {x:0,y:0},{x:-1,y:0},{x:0,y:1},{x:1,y:1}
// ]
export class SRightShape extends SquareGroup{
    constructor(
        _centerPoint:Point,
        _color:string
    ){
        super([
            {x:0,y:0},{x:1,y:0},{x:0,y:1},{x:-1,y:1}
        ],
        _centerPoint,
        _color)
    }
}
// export const SRightShape:Shape = [
//     {x:0,y:0},{x:1,y:0},{x:0,y:1},{x:-1,y:1}
// ]
export class STopShape extends SquareGroup{
    constructor(
        _centerPoint:Point,
        _color:string
    ){
        super(
            [
                {x:0,y:0},{x:0,y:-1},{x:1,y:0},{x:1,y:1}
            ],
            _centerPoint,
            _color 
        )
    }
}
// export const STopShape:Shape = [
//     {x:0,y:0},{x:0,y:-1},{x:1,y:0},{x:1,y:1}
// ]
export class LLeftShape extends SquareGroup{
    constructor(
        _centerPoint:Point,
        _color:string
    ){
        super(
            [
                {x:0,y:0},{x:-1,y:0},{x:-2,y:0},{x:0,y:-1}
            ],
            _centerPoint,
            _color 
        )
    }
}
// export const LLeftShape:Shape = [
//     {x:0,y:0},{x:-1,y:0},{x:-2,y:0},{x:0,y:-1}
// ]
export class LRightShape extends SquareGroup{
    constructor(
        _centerPoint:Point,
        _color:string
    ){
        super(
            [
                {x:0,y:0},{x:1,y:0},{x:2,y:0},{x:0,y:-1}
            ],
            _centerPoint,
            _color  
        )
    }
}
// export const LRightShape:Shape = [
//     {x:0,y:0},{x:1,y:0},{x:2,y:0},{x:0,y:-1}
// ]
export class LTopShape extends SquareGroup{
    constructor(
        _centerPoint:Point,
        _color:string
    ){
        super(
            [
                {x:0,y:0},{x:0,y:-1},{x:0,y:-2},{x:1,y:0}
            ],
            _centerPoint,
            _color
        )
    }
}
// export const LTopShape : Shape = [
//     {x:0,y:0},{x:0,y:-1},{x:0,y:-2},{x:1,y:0}
// ]
export class LBottomShape extends SquareGroup{
    constructor(
        _centerPoint:Point,
        _color:string
    ){
        super(
            [
                {x:0,y:0},{x:0,y:1},{x:0,y:2},{x:-1,y:0}
            ],
            _centerPoint,
            _color 
        )
    }
}
// export const LBottomShape:Shape = [
//     {x:0,y:0},{x:0,y:1},{x:0,y:2},{x:-1,y:0}
// ]
export class SquareShape extends SquareGroup{
    constructor(
        _centerPoint:Point,
        _color:string
    ){
        super(
            [
                {x:0,y:0},{x:1,y:0},{x:0,y:1},{x:1,y:1}
            ],
            _centerPoint,
            _color
        )
    }
}
// export const SquareShape:Shape = [
//     {x:0,y:0},{x:1,y:0},{x:0,y:1},{x:1,y:1}
// ]
export class LineShape extends SquareGroup{
    constructor(
        _centerPoint:Point,
        _color:string
    ){
        super(
            [
                {x:0,y:0},{x:-1,y:0},{x:1,y:0},{x:2,y:0}
            ],
            _centerPoint,
            _color  
        )
    }
}
// export const LineShape:Shape = [
//     {x:0,y:0},{x:-1,y:0},{x:1,y:0},{x:2,y:0}
// ]
export const shapes = [
    TTopShape,
    TLeftShape,
    TRightShape,
    TBottomShape,
    STopShape,
    SLeftShape,
    SRightShape,
    LLeftShape,
    LRightShape,
    LTopShape,
    LBottomShape,
    SquareShape,
    LineShape
]
export const colors = [
    'red',
    '#fff',
    'blue',
    'green'
]
export function createTeris(centerPoint:Point):SquareGroup{
    let index = getRandom(0,shapes.length)
    const shape = shapes[index]
    index = getRandom(0, colors.length)
    const color = colors[index]
    return new shape(centerPoint,color)
}

