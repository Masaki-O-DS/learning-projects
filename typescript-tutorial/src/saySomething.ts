export default class SaySomething {
  message: string;

  //コンストラクタ　初期化
  constructor(message: string) {
    this.message = message;
  }

  public sayText(elem: HTMLElement | null) {
    if (elem) {
      elem.innerText = this.message;
    }
  }
}
