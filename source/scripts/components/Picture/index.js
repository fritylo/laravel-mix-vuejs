export default {
   name: 'Picture',
   props: {
      src: String,
      alt: {
         type: String,
         default: 'picture',
      },
   },
   computed: {
      _src() {
         return require('~images/' + this.src);
      }
   }
}
