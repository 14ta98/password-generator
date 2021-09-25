<template>
  <v-app>
    <header>
      <v-app-bar app color="primary" dark flat>
        <v-container class="py-0 fill-height">
          <v-toolbar-title>Random Password</v-toolbar-title>
        </v-container>
      </v-app-bar>
    </header>
    <v-main class="grey lighten-4">
      <v-container>
        <v-row>
          <v-col>
            <v-card flat>
              <v-card-text>
                <v-container>
                  <!-- <v-row>
                    <v-col cols="12" sm="4" md="4">
                      <v-checkbox
                        v-model="ex4"
                        label="英字（大文字）"
                        color="primary"
                        value="uppercase"
                        hide-details
                      ></v-checkbox>
                    </v-col>
                  </v-row> -->
                  <v-row>
                    <label for="character-type">文字の種類</label>
                    <v-col cols="12" sm="2" md="2">
                      <v-checkbox
                        v-model="ex4"
                        label="英字 (大文字)"
                        color="primary"
                        value="uppercase"
                        hide-details
                      ></v-checkbox>
                    </v-col>
                    <v-col cols="12" sm="2" md="2">
                      <v-checkbox
                        v-model="ex4"
                        label="英字 (小文字)"
                        color="primary"
                        value="lowercase"
                        hide-details
                      ></v-checkbox>
                    </v-col>
                    <v-col cols="12" sm="2" md="2">
                      <v-checkbox
                        v-model="ex4"
                        label="数字"
                        color="primary"
                        value="number"
                        hide-details
                      ></v-checkbox>
                    </v-col>
                    <v-col cols="12" sm="2" md="2">
                      <v-checkbox
                        v-model="ex4"
                        label="記号"
                        color="primary"
                        value="symbol"
                        hide-details
                      ></v-checkbox>
                    </v-col>
                  </v-row>
                  <v-radio-group v-model="row" row>
                    <label for="character-type">文字数</label>
                    <v-radio label="8文字" value="radio-1"></v-radio>
                    <v-radio label="12文字" value="radio-2"></v-radio>
                    <v-radio label="カスタム" value="radio-3"></v-radio>
                  </v-radio-group>
                </v-container>
              </v-card-text>
            </v-card>

            <!-- <v-sheet min-height="70vh" rounded="lg"> -->
            <!--  -->
            <!-- </v-sheet> -->
          </v-col>
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
</script>