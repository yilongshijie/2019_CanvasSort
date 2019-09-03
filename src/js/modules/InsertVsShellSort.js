import ShellSort from './ShellSort.js'
import InsertSort from './InsertSort.js'
export default class InsertVsShellSort {
    constructor(canvas) {
        this.sortName = '希尔排序vs插入排序';
        this.canvas = document.createElement("canvas");
        this.canvas.width = Math.max(window.innerWidth, 320);
        this.canvas.height = Math.max(window.innerHeight, 568) - 50;
        document.body.appendChild(this.canvas);
        this.shellShort = new ShellSort(canvas, 25, 10);
        this.shellShort.yMoveDuration = 0;
        this.insertSort = new InsertSort(this.canvas, 25, 10)

        this.canvasVs = document.createElement("canvas");
        this.canvasVs.width = Math.max(window.innerWidth, 320);
        this.canvasVs.height = Math.max(window.innerHeight, 568) - 50;
        document.body.appendChild(this.canvasVs);
        this.ctx = this.canvasVs.getContext('2d');
    }
    begin() {
        this.shellShort.random();
        this.insertSort.array = JSON.parse(JSON.stringify(this.shellShort.array));
        this.shellShort.draw();
        this.insertSort.draw();
        this.shellShort.sort(Math.floor(this.insertSort.array.length / 2));
        this.insertSort.sort(1);

        this.ctx.font = ` 16px serif`;
        this.ctx.fillText("希尔排序 VS 插入排序", 10, this.shellShort.yCoordFactor * 4.2);
    }
    destory() {
        document.body.removeChild(this.canvas);
        document.body.removeChild(this.canvasVs);
    }

}