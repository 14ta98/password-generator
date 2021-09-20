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
        <div>{{ uppercase }}</div>
      </dd>
      <dd>
        <input type="checkbox" id="lowercase" v-model="lowercase">
        <label for="lowercase">英字 (小文字)</label>
        <div>{{ lowercase }}</div>
      </dd>
      <dd>
        <input type="checkbox"  id="number" v-model="number">
        <label for="number">数字</label>
        <div>{{ number }}</div>
      </dd>
      <dd>
        <input type="checkbox" id="symbol" v-model="symbol">
        <label for="symbol">記号</label>
        <div>{{ number }}</div>
      </dd>
    </dl>
      <dt>
        文字数
      </dt>
      <dd>
      <label>
        <input type="radio" v-model="character">
        <input type="number" name="test"> 文字
      </label>
      <label>
        <input type="radio" name="test"> 8文字
      </label>
      <label>
        <input type="radio" name="test"> 12文字
      </label>
      </dd>
    <p>{{ makeRandom() }}</p>
    <footer id="footer">
      <small id="copyright">Copyright(C)2021 XXX All right reserved.</small>
    </footer>
  </div>
</template>

<script>
import randomatic from "randomatic";
export default {
  props: {
    pattern: {
      type: String,
      default: "*",
    },
    length: {
      type: Number,
      default: 8,
    },
  },
  data: function () {
    return {
      uppercase: false,
      lowercase: false,
      number: false,
      symbol: false,
    }
  },
  methods: {
    makeRandom() {
      var arr = [];
      for (let i = 0; i < 12; i++) {
        arr.push(randomatic(this.pattern, this.length));
      }
      return arr;
    },
  },
};
</script>
