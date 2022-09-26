<template>
  <v-app>
    <HeaderCom/>
      <v-main>
        <v-container>
          <router-view :books="books" @add-book-list="addBook"/>
        </v-container>
      </v-main>
    <FooterCom/>
  </v-app>
</template>

<script>
import HeaderCom from './global/HeaderCom'
import FooterCom from './global/FooterCom'
const STORAGE_KEY = 'books'

export default {
  name: 'App',
  components: {
    HeaderCom,
    FooterCom
  },
  data(){
    return {
      books: [],
      newBook: null
    }
  },
  mounted() {
    if (localStorage.getItem(STORAGE_KEY)) {
      try {
        this.books = JSON.parse(localStorage.getItem(STORAGE_KEY));
      } catch(e) {
        localStorage.removeItem(STORAGE_KEY);
      }
    }
  },
  methods: {
    addBook(e) {
      this.books.push({
        id: this.books.length,
        title: e.title,
        image: e.image,
        description: e.description,
        readDate: '',
        memo: ''
      });
      // this.newBook = '';
      this.saveBooks();
      // 最後に追加したidの取得コード
      // console.log(this.books.slice(-1)[0].id)
      this.goToEditPage(this.books.slice(-1)[0].id);
    },
    removeBook(x) {
      this.books.splice(x, 1);
      this.saveBooks();
    },
    saveBooks() {
      const parsed = JSON.stringify(this.books);
      localStorage.setItem(STORAGE_KEY, parsed);
    },
    goToEditPage(id){
      this.$router.push(`/edit/${id}`)
    }
  }
};
</script>
