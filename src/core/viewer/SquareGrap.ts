import { Square } from "../Square";
import { Shape, Point } from "../types";

export class SquareGroup {
    private _Squares: readonly Square[];
    public get squares() {
        return this._Squares
    }
    public get centerPoint(): Point {
        return this._centerPoint
    }
    public get shape(){
        return this._shape
    }
    public set centerPoint(v: Point) {
        this._centerPoint = v
        this.setSquarePoint()
    }
    // 根据中心点坐标，以及形状，设置每个小方块的坐标
    private setSquarePoint(){
        this._shape.forEach((p, i) => {
            this._Squares[i].point = {
                x: this._centerPoint.x + p.x,
                y: this._centerPoint.y + p.y
            }
        })
    }
    constructor(
        private _shape: Shape,
        private _centerPoint: Point,
        private _color: string) {
        const arr: Square[] = []
        this._shape.forEach(ele => {
            const sq = new Square()
            sq.color = this._color;
            // sq.point = {
            //     x: this._centerPoint.x + ele.x,
            //     y: this._centerPoint.y + ele.y
            // }
            arr.push(sq)
        })
        this._Squares = arr
        this.setSquarePoint()
    }
    // 旋转方向是否为顺时针
    private isClock = true
    afterRotateShape():Shape{
        if(this.isClock){
            return this._shape.map(p => {
                const newP:Point = {
                    x:-p.y,
                    y:p.x
                }
                return newP;
            })
        }
        else{
            return this._shape.map(p => {
                const newP:Point = {
                    x:p.y,
                    y:-p.x
                }
                return newP;
            })
        }
    }
    rotate(){
        const newShape = this.afterRotateShape()
        this._shape = newShape
        this.setSquarePoint()
    }
}