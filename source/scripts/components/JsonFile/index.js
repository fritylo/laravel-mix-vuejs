export default {
   name: 'JsonFile',
   props: {
      src: String,
   },
   computed: {
      content() {
         const res = require('~files/' + this.src);
         return JSON.stringify(res, 0, 3);
      }
   }
}
