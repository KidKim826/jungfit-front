<template>
  <v-container fluid class="down-top-padding">
    <v-row>
      <v-col cols="12" lg="8">
        <v-card>
          <v-card-text class="pa-5">
            <div class="d-sm-flex align-center">
              <div>
                <h3 class="title blue-grey--text text--darken-2 font-weight-regular">이번 주 방문자 수</h3>
              </div>
            </div>
            <div class="mt-9">
              <v-sparkline
                type="bar"
                :fill="fill2"
                height="80px"
                :gradient="gradient2"
                :line-width="width2"
                :padding="padding2"
                :smooth="radius2 || false"
                :value="value2"
                auto-draw
              ></v-sparkline>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" lg="4">
        <v-card>
          <v-card-text class="pa-5">
            <h3 class="title blue-grey--text text--darken-2 font-weight-regular">매출변화</h3>
            <div class="pb-6">
              <v-sparkline
                :fill="fill"
                height="145px"
                :gradient="gradient"
                :line-width="width"
                :padding="padding"
                :smooth="radius || false"
                :value="value"
                auto-draw
              ></v-sparkline>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" lg="4">
        <v-card class="position-relative profile-card mb-7">
          <v-card-text class="pa-5">
            <div class="text-center">
              <img
                src="https://randomuser.me/api/portraits/men/81.jpg"
                alt="user"
                class="rounded-circle"
                width="100"
              />
              <h2 class="font-weight-regular">moopama</h2>
              <h6 class="op-5 font-weight-regular">KING</h6>
            </div>
          </v-card-text>
        </v-card>
        <v-card class="mb-7">
          <v-card-text class="pa-5">
            <h3 class="title blue-grey--text text--darken-2 font-weight-regular mb-4">해야 할 일 추가</h3>
            <v-text-field v-model="task" label="개미는 오늘도 열심히 일을 하네" filled @keydown.enter="create">
              <!-- <v-fade-transition v-slot:append>
                <v-icon v-if="task" @click="create">add_circle</v-icon>
              </v-fade-transition>-->
            </v-text-field>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" lg="8">
        <h2 class="font-weight-medium success--text text-center">
          Tasks:&nbsp;
          <v-fade-transition leave-absolute>
            <span :key="`tasks-${tasks.length}`">{{ tasks.length }}</span>
          </v-fade-transition>
        </h2>

        <v-divider class="mt-4"></v-divider>
        <v-row class="my-1" align="center">
          <span class="mx-4 info--text">남은 할 일: {{ remainingTasks }}</span>
          <v-divider vertical></v-divider>
          <span class="mx-4 success--text">오늘 한 일: {{ completedTasks }}</span>
          <v-spacer></v-spacer>

          <v-progress-circular :value="progress" class="mr-2"></v-progress-circular>
        </v-row>

        <v-divider class="mb-4"></v-divider>
        <v-card v-if="tasks.length > 0">
          <v-slide-y-transition class="py-0" group>
            <template v-for="(task, i) in tasks">
              <v-divider v-if="i !== 0" :key="`${i}-divider`"></v-divider>

              <v-list-item :key="`${i}-${task.text}`">
                <v-list-item-action>
                  <v-checkbox v-model="task.done" :color="task.done && 'grey' || 'primary'">
                    <template v-slot:label>
                      <div
                        :class="task.done && 'grey--text' || 'blue-grey--text text--darken-2'"
                        class="ml-4 text-truncate"
                        v-text="task.text"
                      ></div>
                    </template>
                  </v-checkbox>
                </v-list-item-action>

                <v-spacer></v-spacer>

                <v-scroll-x-transition>
                  <v-icon v-if="task.done" color="success">mdi-check</v-icon>
                </v-scroll-x-transition>
              </v-list-item>
            </template>
          </v-slide-y-transition>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>


<script>
const gradients = [
  ["#6c757d"],
  ["#6c757d"],
  ["#21c1d6", "21c1d6"],
  ["#21c1d6", "#21c1d6", "#21c1d6"],
  ["#21c1d6", "#21c1d6"]
];

const gradients2 = [
  ["#1e88e5"],
  ["#1e88e5"],
  ["#1e88e5", "#1e88e5", "#1e88e5"],
  ["#1e88e5", "#1e88e5"],
  ["#1e88e5", "#1e88e5", "#1e88e5"],
  ["#1e88e5", "#1e88e5", "#1e88e5"]
];

export default {
  name: "ManagerView",
  data() {
    return {
      fill: true,
      gradient: gradients[4],
      gradients,
      padding: 8,
      radius: 50,
      value: [0, 6, 3, 5, 2, 8, 6],
      width: 1,

      fill2: true,
      gradient2: gradients2[4],
      gradients2,
      radius2: 0,
      padding2: 0,
      value2: [1, 2, 5, 9, 7, 8, 6],
      width2: 4,
      tasks: [
        {
          done: false,
          text: "따수미곤 만나기"
        },
        {
          done: false,
          text: "웹엑스 키기"
        }
      ],
      task: null,
      selected: [2]
    };
  },
  computed: {
    completedTasks() {
      return this.tasks.filter(task => task.done).length;
    },
    progress() {
      return (this.completedTasks / this.tasks.length) * 100;
    },
    remainingTasks() {
      return this.tasks.length - this.completedTasks;
    }
  },

  methods: {
    create() {
      this.tasks.push({
        done: false,
        text: this.task
      });

      this.task = null;
    }
  }
};
</script>