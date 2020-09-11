import { ListenerManager } from "./ListenerManager";

const {ccclass, property} = cc._decorator;

@ccclass
export default class Helloworld extends cc.Component {

    @property(cc.Label)
    label: cc.Label = null;

    @property
    text: string = 'hello';

    s:number = 0;

    start () {
        // init logic
        this.s = 1;
        this.label.string = this.text;
    }

    onClick(){
        this.label.string = String(this.s++);
    }

    onClickAdd(){
        // ListenerManager.getInstance().trigger('123','12345' );
        ListenerManager.getInstance().add('test', this, this.onClick);
    }
    onClickAddOnce(){
        ListenerManager.getInstance().addOnce('test', this, this.onClick);
    }
    onClickTrigger(){
        ListenerManager.getInstance().trigger('test')
    }

}
