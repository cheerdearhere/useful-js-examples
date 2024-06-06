
interface CharacterInterface{
    name:string;
    moveSpeed:number;
    // private extra:string; 인터페이스에서는 무조건 public
    move():void;
}
class Character implements CharacterInterface{
    constructor(
        public name:string,
        public moveSpeed:number,
        protected phoneNumber:string,//public 외 다른 접근제어자는 class에서
        private extra:string
    ) {
        this.name = name;
        this.moveSpeed = moveSpeed;
    }
    move(): void {
        console.log()
    }

}