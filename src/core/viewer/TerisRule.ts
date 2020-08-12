import { Shape, Point, MoveDirection } from "../types";
import GameConfig from "./GameConfig";
import { SquareGroup } from "./SquareGrap";
function isPoint(obj: any): obj is Point {
    if (typeof obj.x === 'undefined') {
        return false
    }
    return true
}
export class TerisRule {
    
    static canIMove(shape: Shape, targetPoint: Point): boolean {
        const targetSquarePoint: Point[] = shape.map(it => {
            return {
                x: it.x + targetPoint.x,
                y: it.y + targetPoint.y
            }
        })
        const result = targetSquarePoint.some(p => {
            return p.x < 0 || p.x > GameConfig.panelSize.width - 1 || p.y < 0 || p.y > GameConfig.panelSize.height - 1
        })
        if (result) {
            return false
        }
        return true
    }
    static move(teris:SquareGroup,targetPoint:Point):boolean;
    static move(teris:SquareGroup,direction:MoveDirection):boolean;
    static move(teris: SquareGroup, targetPointDirection: Point | MoveDirection): boolean {
        if (isPoint(targetPointDirection)) {
            if (this.canIMove(teris.shape, targetPointDirection)) {
                teris.centerPoint = targetPointDirection;
                return true;
            }
            return false;
        }
        else{
            const direction = targetPointDirection;
            let targetPoint:Point;
            if(direction === MoveDirection.Down){
                targetPoint = {
                    x:teris.centerPoint.x,
                    y:teris.centerPoint.y + 1
                }
            }
            else if(direction === MoveDirection.Left){
                targetPoint = {
                    x:teris.centerPoint.x -1,
                    y:teris.centerPoint.y
                }
            }else{
                targetPoint = {
                    x: teris.centerPoint.x + 1,
                    y:teris.centerPoint.y
                }
            }
            return this.move(teris,targetPoint)
        }

      
    }

    // 移动到终点
    static moveDirectly(teris:SquareGroup,direction:MoveDirection){
        while(this.move(teris,MoveDirection.Down)){

        }
    }

}