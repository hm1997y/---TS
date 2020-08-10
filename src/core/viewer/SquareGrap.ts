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
    public set centerPoint(v: Point) {
        this._centerPoint = v
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
            sq.point = {
                x: this._centerPoint.x + ele.x,
                y: this._centerPoint.y + ele.y
            }
            arr.push(sq)
        })
        this._Squares = arr
    }
}