<template>
  <div>
    <header id="header">
      <h1>Random Password Generator</h1>
    </header>
    <p>パスワードを自動生成するツールです。</p>
    <form>
    </form>
    <dl>
      <dt>
        文字
      </dt>
      <dd>
        <input type="checkbox" id="uppercase" v-model="uppercase">
        <label for="uppercase">英字 (大文字)</label>
      </dd>
      <dd>
        <input type="checkbox" id="lowercase" v-model="lowercase">
        <label for="lowercase">英字 (小文字)</label>
      </dd>
      <dd>
        <input type="checkbox"  id="number" v-model="number">
        <label for="number">数字</label>
      </dd>
      <dd>
        <input type="checkbox" id="symbol" v-model="symbol">
        <label for="symbol">記号</label>
      </dd>
    </dl>
      <dt>
        文字数
      </dt>
      <dd>
        <input type="radio" name="test" @change="changeLength('length8')"> 8文字
        <input type="radio" name="test" @change="changeLength('length12')"> 12文字
        <input type="radio" name="test" @change="changeLength('free')">
        <input type="number" v-model="characterLength"> 文字
      </dd>
    <div v-for="(r,index) in makeRandom" :key="index">
      {{r}}
    </div>
    <footer id="footer">
      <small id="copyright">Copyright(C)2021 XXX All right reserved.</small>
    </footer>
  </div>
</template>

<script>
import randomatic from "randomatic";
export default {
  data() {
    return {
      uppercase: true,
      lowercase: true,
      number: true,
      symbol: true,
      lengthFree: false,
      length8: false,
      length12: false,
      characterLength: 0,
    };
  },
  computed: {
    makeRandom() {
      var arr = [];
      for (let i = 0; i < 12; i++) {
        arr.push(randomatic(this.createCharacterPattern, this.createCharacterLength));
      }
      return arr;
    },
    createCharacterPattern() {
      const petterns = [];
      if (this.uppercase) petterns.push("A");
      if (this.lowercase) petterns.push("a");
      if (this.number) petterns.push("0");
      if (this.symbol) petterns.push("!");
      return petterns.join('');
    },
    createCharacterLength() {
      if (this.lengthFree) return this.characterLength;
      if (this.length8) return 8;
      if (this.length12) return 12;
      return 0;
    },
  },
  methods: {
    changeLength(val) {
      if (val === 'free') {
        this.lengthFree = true;
        this.length8 = false;
        this.length12 = false;
      }
      if (val === 'length8') {
        this.lengthFree = false;
        this.length8 = true;
        this.length12 = false;
      }
      if (val === 'length12') {
        this.lengthFree = false;
        this.length8 = false;
        this.length12 = true;
      }
    },
  },
};
</script>
