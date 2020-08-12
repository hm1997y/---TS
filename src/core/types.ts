export interface Point{
    readonly x:number
    readonly y:number
}
export interface IViewer{
    show():void
    remove():void
}
export type Shape = Point[]
export type Test = string
export enum MoveDirection{
    Left ,
    Right,
    Down
}