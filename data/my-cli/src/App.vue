<template>
  <v-app>
    <header>
      <v-app-bar app color="primary" dark flat>
        <v-container class="py-0 fill-height">
          <v-toolbar-title>RandomPassword</v-toolbar-title>
        </v-container>
      </v-app-bar>
    </header>
    <v-main class="grey lighten-3">
      <v-container>
        <v-row>
          <v-col>
            <v-sheet min-height="70vh" rounded="lg">
              <!--  -->
              <v-card-text flat>
                <v-container>
                  <v-row>
                    <!-- <v-col><label for="">文字</label></v-col> -->
                    <v-col>
                      <v-checkbox
                        v-model="uppercase"
                        label="大文字"
                        color="primary"
                        hide-details
                      ></v-checkbox>
                    </v-col>
                    <v-col>
                      <v-checkbox
                        v-model="lowercase"
                        label="小文字"
                        color="primary"
                        hide-details
                      ></v-checkbox>
                    </v-col>
                    <v-col>
                      <v-checkbox
                        v-model="number"
                        label="数字"
                        color="primary"
                        hide-details
                      ></v-checkbox>
                    </v-col>
                    <v-col>
                      <v-checkbox
                        v-model="symbol"
                        label="記号"
                        color="primary"
                        hide-details
                      ></v-checkbox>
                    </v-col>
                  </v-row>
                  <v-radio-group row>
                    <v-radio label="8文字"> </v-radio>
                    <v-radio label="12桁"></v-radio>
                    <v-radio label="カスタム"></v-radio>
                    <v-flex xs12 sm6 md3>
                      <v-text-field
                        type="number"
                        step="any"
                        min="0"
                        max="20"
                        ref="input"
                        v-model.number="number"
                      ></v-text-field>
                    </v-flex>
                  </v-radio-group>
                  <div v-for="(r, index) in makeRandom" :key="index">
                    {{ r }}
                  </div>

                  <!-- <v-col><label for="">文字数</label></v-col> -->
                  <!-- <v-radio-group row>
                  <v-radio label="8文字" value="radio-1"></v-radio>
                  <v-radio label="12桁" value="radio-2"></v-radio>
                  <v-radio label="カスタム" value="radio-3"></v-radio>
                  <v-flex xs12 sm6 md3>
                    <v-text-field
                      type="number"
                      step="any"
                      min="0"
                      max="20"
                      ref="input"
                      v-model.number="number"
                    ></v-text-field>
                  </v-flex>
                </v-radio-group> -->
                </v-container>
              </v-card-text>
            </v-sheet>
          </v-col>
          <!-- <v-col cols="2">
            <v-sheet rounded="lg">
              <v-list color="transparent">
                <v-list-item v-for="n in 5" :key="n" link>
                  <v-list-item-content>
                    <v-list-item-title> List Item {{ n }} </v-list-item-title>
                  </v-list-item-content>
                </v-list-item>

                <v-divider class="my-2"></v-divider>

                <v-list-item link color="grey lighten-4">
                  <v-list-item-content>
                    <v-list-item-title> Refresh </v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </v-sheet>
          </v-col> -->
        </v-row>
      </v-container>
    </v-main>
    <v-footer padless app color="primary" dark flat>
      <v-col class="text-center" cols="12">
        {{ new Date().getFullYear() }} — Wrapper.Inc
      </v-col>
    </v-footer>
  </v-app>
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
      // lengthFree: false,
      // length8: false,
      // length12: false,
      // characterLength: 0,
    };
  },
  computed: {
    makeRandom() {
      var arr = [];
      for (let i = 0; i < 12; i++) {
        arr.push(randomatic(this.createCharacterPattern));
      }
      return arr;
    },
    createCharacterPattern() {
      const petterns = [];
      if (this.uppercase) petterns.push("A");
      if (this.lowercase) petterns.push("a");
      if (this.number) petterns.push("0");
      if (this.symbol) petterns.push("!");
      console.log(petterns);
      return petterns.join("");
    },
    createCharacterLength() {
      // if (this.lengthFree) return this.characterLength;
      // if (this.length8) return 8;
      // if (this.length12) return 12;
      return 0;
    },
  },
  methods: {
    changeLength(val) {
      if (val === "free") {
        this.lengthFree = true;
        this.length8 = false;
        this.length12 = false;
      }
      if (val === "length8") {
        this.lengthFree = false;
        this.length8 = true;
        this.length12 = false;
      }
      if (val === "length12") {
        this.lengthFree = false;
        this.length8 = false;
        this.length12 = true;
      }
    },
  },
};
</script>