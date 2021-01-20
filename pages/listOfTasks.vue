<template>
  <section>
    <div class="container">
      <h2>Список задач</h2>
      <div class="wrapperTasks">
        <div class="wrpListOfTasks">
          <table style="width: 100%">
            <tr>
              <th>Задача</th>
              <th>Статус</th>
            </tr>
            <tr v-for="user in users.slice(0, 14)" :key="user.index">
              <td>{{ user.title }}</td>
              <td>
                <input type="checkbox" class="checkBoxDone" :id="user.title" />
                <label :for="user.title"
                  >Выполнено</label
                >
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  computed: {
    users() {
      return this.$store.state.users;
    },
  },
  mounted() {
    this.$store.dispatch("getUser");
  },
};
</script>

<style scoped>
.wrapperTasks {
  margin-top: 1rem;
  padding: 2rem;
  background: #fff;
}

tr th {
  color: #bababa;
  font-size: 14px;
  font-weight: 500;
  line-height: 16px;
  padding: 1rem;
  border-bottom: 1px solid #eff1f9;
}

tr td {
  font-size: 14px;
  font-weight: 500;
  line-height: 16px;
  padding: 1rem;
  border-bottom: 1px solid #eff1f9;
}

.checkBoxDone {
  position: absolute;
  z-index: -1;
  opacity: 0;
}

.checkBoxDone+label {
  display: inline-flex;
  align-items: center;
  user-select: none;
    color: #C2C2C2;
}
.checkBoxDone+label::before {
  content: '';
  display: inline-block;
  width: 1.2em;
  height: 1.2em;
  flex-shrink: 0;
  flex-grow: 0;
  border: 1px solid #C2C2C2;
  margin-right: 0.5em;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 50% 50%;
}

.checkBoxDone:checked+label::before {
  background-color: #51CB3D;
  color: #0b76ef !important;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23fff' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z'/%3e%3c/svg%3e");
}

.checkBoxDone:checked+label {
   color: #51CB3D !important;
}
</style>