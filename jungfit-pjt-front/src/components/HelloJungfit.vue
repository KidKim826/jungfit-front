<template>
  <div>
    <v-container>
      <h2>코치진 소개</h2>
      <v-row>
        <v-col cols="3">
          <v-img src="https://ifh.cc/g/nBMH3m.jpg" id="trainer-card" alt="짐종국카드">
            <figure class="long">
              <a href="#">
                <p></p>
                <figcaption>
                  <div class="line">
                    <span>
                      <p>
                        <span class="material-icons" >touch_app</span>
                      </p>
                    </span>
                  </div>
                </figcaption>
              </a>
            </figure>
          </v-img>
        </v-col>
        <v-col cols="3">
          <v-img src="https://ifh.cc/g/KoQHLl.jpg" id="trainer-card" alt="쾌걸근육맨카드">
          <figure class="long">
              <a href="#">
                <p></p>
                <figcaption>
                  <div class="line">
                    <span>
                      <p>
                        <span class="material-icons" >touch_app</span>
                      </p>
                    </span>
                  </div>
                </figcaption>
              </a>
            </figure></v-img>
        </v-col>
        <v-col cols="3">
          <v-img src="https://ifh.cc/g/N2Y1QH.jpg" id="trainer-card" alt="토르카드"><figure class="long">
              <a href="#">
                <p></p>
                <figcaption>
                  <div class="line">
                    <span>
                      <p>
                        <span class="material-icons" >touch_app</span>
                      </p>
                    </span>
                  </div>
                </figcaption>
              </a>
            </figure></v-img>
        </v-col>
        <v-col cols="3">
          <v-img src="https://ifh.cc/g/DroBb8.jpg" id="trainer-card" alt="비실이카드"><figure class="long">
              <a href="#">
                <p></p>
                <figcaption>
                  <div class="line">
                    <span>
                      <p>
                        <span class="material-icons" >touch_app</span>
                      </p>
                    </span>
                  </div>
                </figcaption>
              </a>
            </figure></v-img>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "HelloJungfit"
};
</script>

<style scoped>
html {
  height: 100%;
  width: 100%;
}

body {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  overflow: hidden;
  background-color: #1b2431;
}

#trainer-card {
  background-color: #1b2431;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  color: white;
  position: relative;
}

.container::before,
.container::after {
  position: absolute;
  content: "";
  top: -5%;
  left: -5%;
  height: 110%;
  width: 110%;
  border-radius: 50%;
  opacity: 0.5;
  filter: blur(60px);
}

.container::after {
  background-color: #00ffff;
  z-index: -1;
  animation: backglow2 15s ease infinite;
}

.container::before {
  background-color: #ff0072;
  z-index: -2;
  animation: backglow1 15s ease infinite;
}

@keyframes backglow1 {
  0% {
    transform: translate(10%, 10%) scale(1);
    opacity: 0.5;
  }

  25% {
    transform: translate(-10%, 10%) scale(0.8);
    opacity: 0.5;
  }

  50% {
    transform: translate(-10%, -10%) scale(1.2);
    opacity: 0.8;
  }

  75% {
    transform: translate(10%, -10%) scale(1.1);
    opacity: 0.2;
  }

  100% {
    transform: translate(10%, 10%) scale(1);
    opacity: 0.5;
  }
}

@keyframes backglow2 {
  0% {
    transform: translate(-10%, -10%) scale(1);
    opacity: 0.5;
  }

  25% {
    transform: translate(10%, -10%) scale(0.8);
    opacity: 0.5;
  }

  50% {
    transform: translate(10%, 10%) scale(1.2);
    opacity: 0.8;
  }

  75% {
    transform: translate(-10%, 10%) scale(1.1);
    opacity: 0.2;
  }

  100% {
    transform: translate(-10%, -10%) scale(1);
    opacity: 0.5;
  }
}

a {
  text-decoration: none;
}

figure {
  width: 100%;
  height: 100%;
}
figure:hover figcaption {
  opacity: 1;
}
figure:hover .line::before {
  width: 80%;
}
figure:hover .line::after {
  width: 80%;
}
figure:hover .line span::before {
  height: 80%;
}
figure:hover .line span::after {
  height: 80.5%;
}

figcaption {
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  opacity: 0;
  transition: all 0.5s;
  top: 0;
  left: 0;
}

a figcaption p {
  color: #fff;
  font-weight: bold;
  font-size: 25px;
  text-align: center;
  line-height: 300px;
  size:30px;
}

.line::before {
  content: "";
  position: absolute;
  background: rgba(255, 255, 255, 0.7);
  display: inline-block;
  transition: all 0.5s;
  left: 10%;
  top: 10%;
  width: 0%;
  height: 2px;
}

.line::after {
  content: "";
  position: absolute;
  background: rgba(230, 230, 230, 0.7);
  display: inline-block;
  transition: all 0.5s;
  left: 10%;
  top: 90%;
  width: 0%;
  height: 2px;
}

.line span::before {
  content: "";
  position: absolute;
  background: rgba(230, 230, 230, 0.7);
  display: inline-block;
  transition: all 0.5s;
  left: 10%;
  top: 10%;
  width: 2px;
  height: 0%;
}

.line span::after {
  content: "";
  position: absolute;
  background: rgba(230, 230, 230, 0.7);
  display: inline-block;
  transition: all 0.5s;
  left: 90%;
  top: 10%;
  width: 2px;
  height: 0%;
}
</style> 