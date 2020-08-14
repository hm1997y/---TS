import { GameStatus, MoveDirection, GameViewer } from "../types";
import { SquareGroup } from "./SquareGrap";
import { createTeris } from "./Teris";
import { TerisRule } from "./TerisRule";
import GameConfig from "./GameConfig";

export class Game{
    // 游戏状态
    private _gameStatus:GameStatus = GameStatus.init
    private _curTeris?:SquareGroup;
    private _nextTeris:SquareGroup;
    private _timer?:number;
    private _duration:number = 1000;
    constructor(
        private _viewer:GameViewer
    ){
        this._nextTeris = createTeris({x:0,y:0});
        this.resetCenterPoint(GameConfig.nextSize.width, this._nextTeris)
        this._viewer.showNext(this._nextTeris);
    }

    // 游戏开始
    start(){
        if(this._gameStatus === GameStatus.playing){
            return;
        }
        this._gameStatus = GameStatus.playing;
        if(!this._curTeris){
            this.switchTeris()
        }
    }
    // 方块自由下落
    private autoDrop(){
        if(this._timer || this._gameStatus !== GameStatus.playing){
            return
        }
        this._timer = setInterval(() => {
            if(this._curTeris){
                TerisRule.move(this._curTeris,MoveDirection.Down);
            }
        }, this._duration)
    }
    // 切换方块
    private switchTeris(){
        this._curTeris = this._nextTeris;
        this.resetCenterPoint(GameConfig.panelSize.width, this._curTeris);
        this._nextTeris = createTeris({x:0,y:0})
        this.resetCenterPoint(GameConfig.nextSize.width, this._nextTeris)
        this._viewer.switch(this._curTeris)
        this._viewer.showNext(this._nextTeris)

    }

    /**
     * 设置中心点的坐标，以达到让该方块出现在区域的中上方
     * @param width 宽度，逻辑单位值
     * @param teris 
     */
    private resetCenterPoint(width:number,teris:SquareGroup){
        const x = Math.ceil(width /2) -1;
        const y = 0;
        teris.centerPoint = {x,y}
        while(teris.squares.some(it => it.point.y < 0)){
            teris.squares.forEach(sq => {
                sq.point = {
                    x:sq.point.x,
                    y:sq.point.y + 1
                }
            })
        }

    }

    // 游戏暂停
    pause(){
        if(this._gameStatus === GameStatus.playing){
            this._gameStatus = GameStatus.pause;
            clearInterval(this._timer);
            this._timer = undefined;
        }
    }

    // 向左移动
    moveLeft(){
        if(this._curTeris && this._gameStatus === GameStatus.playing){
            TerisRule.move(this._curTeris, MoveDirection.Left)
        }
    }
    // 向下移动
    moveDown(){
        if(this._curTeris && this._gameStatus === GameStatus.playing){
            TerisRule.move(this._curTeris, MoveDirection.Down)
        }
    }
    // 向下移动
    moveRight(){
        if(this._curTeris && this._gameStatus === GameStatus.playing){
            TerisRule.move(this._curTeris, MoveDirection.Right)
        }
    }
   
    
}