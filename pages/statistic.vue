<template>
  <div class="container">
    <h2>Статистика</h2>
    <div class="wrpChart">
      <line-chart :chartData="datacollection" id="chart"></line-chart>
      <div class="wrpButtonStat">
        <button class="activeBtn" @click="fillData()">Случайные данные</button>
        <button class="noActiveBtn" @click="addData()">Добавить данные</button>
        <button class="noActiveBtn" @click="addData()">Удалить данные</button>
        <button class="noActiveBtn" @click="addData()">
          Увеличить кол-во данных
        </button>
        <button class="noActiveBtn" @click="addData()">
          Уменьшить кол-во данных
        </button>
      </div>

      <!-- <form @submit.prevent="addDateToChart()">
      <div class="newData">
        <label id="nameData" for="title">Имя</label>
        <input v-model="name" type="text" id="title" />
      </div>
      <div class="profit">
        <h5>Прибыль (рубли)</h5>
        <div class="profitItems">
          <div class="newData">
            <label for="jan">Январь</label>
            <input v-model="january" type="number" id="jan" />
          </div>
          <div class="newData">
            <label for="fab">Февраль</label>
            <input v-model="february" type="number" id="fab" />
          </div>
          <div class="newData">
            <label for="mar">Март</label>
            <input v-model="march" type="number" id="mar" />
          </div>
          <div class="newData">
            <label for="apr">Апрель</label>
            <input v-model="april" type="number" id="apr" />
          </div>
          <div class="newData">
            <label for="may">Май</label>
            <input v-model="may" type="number" id="may" />
          </div>
          <div class="newData">
            <label for="jun">Июнь</label>
            <input v-model="june" type="number" id="jun" />
          </div>
          <div class="newData">
            <label for="jul">Июль</label>
            <input v-model="july" type="number" id="jul" />
          </div>
          <button type="submit">Добавить</button>
        </div>
      </div>
    </form> -->
    </div>
    <div class="wrpMobileStatistic">
      <p>К сожалению статистика не доступна с мобильного устройства</p>
    </div>
  </div>
</template>

<script>
import LineChart from "../plugins/LineChart.js";

export default {
  components: {
    LineChart,
  },
  data() {
    return {
      name: "",
      january: "",
      february: "",
      march: "",
      april: "",
      may: "",
      june: "",
      july: "",
      allAddDate: {
        label: "",
        data: null,
        fill: false,
        borderColor: "#2554FF",
        backgroundColor: "#2554FF",
        borderWidth: 1,
      },
      datacollection: null,
    };
  },
  mounted() {
    this.fillData();
  },
  methods: {
    fillData() {
      this.datacollection = {
        labels: ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль"],
        datasets: [
          {
            label: "Data One",
            backgroundColor: "#f87979",
            data: [
              this.getRandomInt(),
              this.getRandomInt(),
              this.getRandomInt(),
              this.getRandomInt(),
              this.getRandomInt(),
              this.getRandomInt(),
              this.getRandomInt(),
            ],
          },
          {
            label: "Data One",
            backgroundColor: "rgb(32, 210, 223)",
            data: [
              this.getRandomInt(),
              this.getRandomInt(),
              this.getRandomInt(),
              this.getRandomInt(),
              this.getRandomInt(),
              this.getRandomInt(),
              this.getRandomInt(),
            ],
          },
          {
            label: "Data One",
            backgroundColor: "rgb(108, 25, 119)",
            data: [
              this.getRandomInt(),
              this.getRandomInt(),
              this.getRandomInt(),
              this.getRandomInt(),
              this.getRandomInt(),
              this.getRandomInt(),
              this.getRandomInt(),
            ],
          },
        ],
      };
    },
    addData() {
      var datas = {
        label: "Data",
        backgroundColor: "#6666",
        data: [
          this.getRandomInt(),
          this.getRandomInt(),
          this.getRandomInt(),
          this.getRandomInt(),
          this.getRandomInt(),
          this.getRandomInt(),
          this.getRandomInt(),
        ],
      };
      console.log(this.datacollection.datasets);

      this.datacollection.datasets.push(datas);
    },
    getRandomInt() {
      return Math.floor(Math.random() * (50 - 5 + 1)) + 5;
    },
  },
  watch: {
    updateFunction: function () {
      this.datacollection.update();
    },
  },
};
</script>

<style scoped lang="scss">
@import "./../assets/scss/style.scss";
.wrpChart {
  padding: 2rem;
  background: #fff;
  display: none;
  @include for-medium-up {
    display: block;
  }
}

.small {
  margin-left: 150px;
  max-height: 500px;
}
.wrpMobileStatistic {
  background: #fff;
  padding: 2rem;
  @include for-medium-up {
    display: none;
  }
}
.newData {
  display: flex;
  flex-direction: column;
}

.profit {
  margin-top: 1.5rem;
}

.profitItems {
  display: grid;
  grid-gap: 5px;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  grid-template-rows: repeat(2, 60px);
}

input {
  border-radius: 4px;
  padding: 4px;
  border: 1px solid rgb(100, 100, 100);
}

#nameData {
  font-size: 20px;
  margin-top: 2rem;
}

.wrpButtonStat {
  margin-top: 2rem;
  display: grid;
  grid-gap: 5px;
  grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
  grid-template-rows: repeat(2, 50px);
  button {
    width: 154px;
    height: 32px;
    outline: none;
  }
  .activeBtn {
    border: 1px solid #bd0d22;
    box-sizing: border-box;
    color: #bd0d22;
    font-weight: 600;
    font-size: 11px;
    background: inherit;
    border-radius: 10px;
  }
  .noActiveBtn {
    border: 1px solid #cbcbcb;
    box-sizing: border-box;
    border-radius: 10px;
    color: #cbcbcb;
    font-size: 11px;
    background: inherit;
  }
}
</style>