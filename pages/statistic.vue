<template>
  <div class="container">
    <h2>Статистика</h2>
    <div class="wrpChart">
      <line-chart :chartData="datacollection" id="chart"></line-chart>
      <div class="wrpButtonStat">
        <button class="activeBtn" @click="fillData()">Случайные данные</button>
        <button class="noActiveBtn" @click="addData()">Добавить данные</button>
        <button class="noActiveBtn" @click="removeData()">
          Удалить данные
        </button>
        <button class="noActiveBtn" @click="plusData()">
          Увеличить кол-во данных
        </button>
        <button class="noActiveBtn" @click="menosData()">
          Уменьшить кол-во данных
        </button>
      </div>
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
      date: "",
      collection: "",
      allAddDate: {
        label: "",
        data: null,
        fill: false,
        borderColor: "#2554FF",
        backgroundColor: "#2554FF",
        borderWidth: 1,
      },
      months: [
        "Январь",
        "Февраль",
        "Март",
        "Апрель",
        "Май",
        "Июнь",
        "Июль",
        "Август",
        "Сентябрь",
        "Октябрь",
        "Ноябрь",
        "Декабрь",
      ],
      datacollection: {
        labels: ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль"],
        datasets: [
          {
            label: "Data",
            backgroundColor: "#f87979",
            data: [3, 7, 20, 50, 45, 10, 26],
          },
          {
            label: "Data",
            backgroundColor: "rgb(32, 210, 223)",
            data: [45, 44, 10, 2, 34, 23, 30],
          },
          {
            label: "Data",
            backgroundColor: "rgb(108, 25, 119)",
            data: [1, 22, 33, 44, 46, 32, 50],
          },
        ],
      },
    };
  },
  methods: {
    fillData() {
      //обновить данные всех графиков
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
      for (const element of this.datacollection.datasets) {
        this.date = element;
      }
      console.log(this.date);
      (this.date.label = "Data"),
        (this.date.backgroundColor = "#6666"),
        (this.date.data = [
          this.getRandomInt(),
          this.getRandomInt(),
          this.getRandomInt(),
          this.getRandomInt(),
          this.getRandomInt(),
          this.getRandomInt(),
          this.getRandomInt(),
        ]);
      this.collection = this.datacollection.datasets;
      this.collection.push(this.date);
      this.datacollection.datasets = this.collection;
      console.log(this.datacollection.datasets); //добавить график
    },
    removeData() {
      this.datacollection.datasets.pop();
      console.log(this.datacollection.datasets); //удалить график
    },
    getRandomInt() {
      return Math.floor(Math.random() * (50 - 5 + 1)) + 5;
    },
    plusData() {
      let numberOfMonths = this.datacollection.labels.length;
      var currentMonth = this.months[numberOfMonths];
      this.datacollection.labels.push(currentMonth); //увеличить данные (увеличить ширину графиков по оси Х)
      console.log(this.datacollection.labels)
    },
    menosData() {
      let numberOfMonths = this.datacollection.labels.length;
      this.datacollection.labels.pop(); //уменьшить данные (уменьшить ширину графиков по оси Х
      console.log(this.datacollection.labels);
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
    border: 1px solid #cbcbcb;
    box-sizing: border-box;
    border-radius: 10px;
    color: #cbcbcb;
    font-size: 11px;
    background: inherit;
    outline: none;
    &:hover {
      border: 1px solid #bd0d22;
      box-sizing: border-box;
      color: #bd0d22;
      font-weight: 600;
      font-size: 11px;
      background: inherit;
      border-radius: 10px;
    }
  }
}
</style>