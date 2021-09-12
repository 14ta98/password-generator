<template>
  <div>
    <header id="header">
      <h1>Random Password Generator</h1>
    </header>
    <p>パスワードを自動生成するツールです。</p>
    <dl>
      <dt> 
        文字
      </dt>
      <dd>
        <input type="checkbox" checked>
        <label for="uppercase">英字 (大文字)</label>
      </dd>
      <dd>
        <input type="checkbox" checked>
        <label for="lowercase">英字 (小文字)</label>
      </dd>
      <dd>
        <input type="checkbox" checked>
        <label for="number">数字</label>
      </dd>
      <dd>
        <input type="checkbox" checked>
        <label for="symbol">記号</label>
      </dd>
    </dl>
      <dt>
        文字数
      </dt>
      <dd>
      <label>
        <input type="radio" name="test">
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
      <small id="copyright">Copyright(C)2021 Wrapper All right reserved.</small>
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
