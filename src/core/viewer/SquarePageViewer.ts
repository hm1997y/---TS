import { IViewer } from "../types";
import $ from 'jquery'
import PageConfig from './PageCongif'
import { Square } from "../Square";
import PageCongif from "./PageCongif";
export class SquarePageViewer implements IViewer{
    private dom?:JQuery<HTMLElement>
    private isRemove:boolean = false; //是否已经移除过
    show(): void {
        if(this.isRemove){
            return
        }
        if(!this.dom){
            this.dom = $("<div>").css({
                position:'absolute',
                width:PageConfig.SquareSize.width,
                height:PageConfig.SquareSize.height,
                border:'1px solid #ccc',
                boxSizing:'border-box'
            }).appendTo(this.container)
        }
        this.dom.css({
            left:this.square.point.x * PageCongif.SquareSize.width,
            top:this.square.point.y * PageConfig.SquareSize.height,
            background:this.square.color
        })
    }
    remove(): void {
        if(this.dom && !this.isRemove){
            this.dom.remove()
            this.isRemove = true
        } 
    }
    constructor(
        private square:Square,
        private container:JQuery<HTMLElement>
    ){

    }

}