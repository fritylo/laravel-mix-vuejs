class Man {
   static IAmStatic = 666;

   constructor(message) {
      this.message = message;
   }
   scream() {
      alert(this.message);
   }
}
const boy = new Man('My name is, FEDOR!!!');
boy.scream();