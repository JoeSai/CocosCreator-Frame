// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Label)
    plot: cc.Label = null;

    
    isPlayText:boolean;
    chatSpeed:number = 0.2;  //对话速度
    // @property
    // text: string = 'hello';

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start () {
        var chatWord = '季风吹向大海，天空之外。';
        this.showContent(chatWord,false);
    }

    showContent(content:string,showAll:boolean){
        var that = this;
		if (showAll) {
			this.plot.getComponent(cc.Label).string = content;
		}else{
			this.isPlayText = true;
			var length = 0;
			this.schedule(()=>{
				length++;
				if (length <= content.length) {
					this.plot.getComponent(cc.Label).string = content.substring(0, length);
					if (length == content.length) {
						this.isPlayText = false;
						this.unscheduleAllCallbacks();
					}
				}
			},this.chatSpeed, content.length - 1, 0);
		}
	}

    // update (dt) {}
}
