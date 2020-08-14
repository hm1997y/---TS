import { SquareGroup } from "./viewer/SquareGrap"

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

export enum GameStatus{
    init,
    playing,
    pause,
    over
}
export interface GameViewer{
    /**
     * 
     * @param teris 下一个方块对象
     */
    showNext(teris:SquareGroup):void;
    /**
     * 
     * @param teris 切换的方块
     */
    switch(teris:SquareGroup):void;
}