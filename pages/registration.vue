<template>
  <section id="loginSection">
    <div class="wrpLogo">
      <svg
        width="158"
        height="40"
        viewBox="0 0 80 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M60.4993 7.37299C59.4631 6.86104 57.366 6.04713 56.0441 5.54518C55.3736 5.2912 55.2822 4.87125 55.3031 4.62727C55.3774 3.84335 56.8879 3.21341 58.5507 3.82735C59.2487 4.07657 59.8724 4.51294 60.3603 5.09322L60.4022 5.03123L62.6593 2.40149C61.8974 1.61157 60.3222 0.281704 58.1184 0.0517273C54.9527 -0.27824 51.7736 1.11362 51.4688 4.3333C51.2384 6.78105 52.6117 8.14292 54.3469 8.84685C56.0174 9.52678 57.2803 10.0467 58.2212 10.4467C58.9831 10.7827 58.9945 11.1106 58.9831 11.2986C58.945 12.0145 58.0307 12.4625 56.9926 12.4025C54.5336 12.2565 53.4765 9.97874 53.4765 9.97874L51.0688 12.6985C51.6943 13.6146 52.4996 14.3793 53.4305 14.9409C54.3614 15.5026 55.3962 15.8481 56.465 15.9541C59.385 16.2581 62.8079 14.8902 63.1317 11.5006C63.3412 9.3168 61.6155 7.92294 60.4993 7.37299Z"
          fill="#BD0D22"
        />
        <path
          d="M24.7623 0.00195312C23.2554 0.00195312 21.7824 0.471097 20.5294 1.35006C19.2765 2.22902 18.2999 3.47833 17.7233 4.93999C17.1466 6.40165 16.9957 8.01002 17.2897 9.56172C17.5837 11.1134 18.3093 12.5387 19.3749 13.6574C20.4404 14.7761 21.798 15.538 23.2759 15.8466C24.7539 16.1553 26.2858 15.9969 27.678 15.3914C29.0702 14.786 30.2601 13.7607 31.0973 12.4453C31.9345 11.1298 32.3814 9.58324 32.3814 8.00115C32.3814 5.87963 31.5787 3.845 30.1498 2.34486C28.721 0.844723 26.783 0.00195312 24.7623 0.00195312ZM24.7623 12.0007C24.0075 12.0075 23.2679 11.7786 22.6371 11.3433C22.0064 10.9079 21.5131 10.2856 21.2198 9.55543C20.9265 8.82522 20.8464 8.01999 20.9897 7.24192C21.1331 6.46384 21.4933 5.748 22.0248 5.18525C22.5562 4.62249 23.2349 4.23817 23.9748 4.08107C24.7146 3.92397 25.4822 4.00117 26.1802 4.30286C26.8782 4.60456 27.4751 5.11715 27.8951 5.7756C28.3152 6.43404 28.5394 7.20866 28.5395 8.00115C28.5435 9.05732 28.1479 10.072 27.4396 10.822C26.7313 11.572 25.7683 11.996 24.7623 12.0007Z"
          fill="#BD0D22"
        />
        <path
          d="M72.381 0.00195312C70.8741 0.00195312 69.401 0.471097 68.1481 1.35006C66.8951 2.22902 65.9186 3.47833 65.3419 4.93999C64.7653 6.40165 64.6144 8.01002 64.9084 9.56172C65.2023 11.1134 65.928 12.5387 66.9935 13.6574C68.0591 14.7761 69.4166 15.538 70.8946 15.8466C72.3725 16.1553 73.9045 15.9969 75.2967 15.3914C76.6889 14.786 77.8788 13.7607 78.716 12.4453C79.5532 11.1298 80 9.58324 80 8.00115C80 5.87963 79.1973 3.845 77.7684 2.34486C76.3396 0.844723 74.4017 0.00195312 72.381 0.00195312ZM72.381 12.0007C71.6262 12.0075 70.8865 11.7786 70.2558 11.3433C69.6251 10.9079 69.1318 10.2856 68.8385 9.55543C68.5452 8.82522 68.4651 8.01999 68.6084 7.24192C68.7517 6.46384 69.1119 5.748 69.6434 5.18525C70.1749 4.62249 70.8536 4.23817 71.5934 4.08107C72.3333 3.92397 73.1009 4.00117 73.7989 4.30286C74.4969 4.60456 75.0937 5.11715 75.5138 5.7756C75.9338 6.43404 76.1581 7.20866 76.1581 8.00115C76.1622 9.05732 75.7666 10.072 75.0583 10.822C74.35 11.572 73.387 11.996 72.381 12.0007Z"
          fill="#BD0D22"
        />
        <path
          d="M41.9047 0.00200176C39.884 0.00200176 37.946 0.844772 36.5172 2.34491C35.0884 3.84505 34.2856 5.87968 34.2856 8.0012V20H38.0952V14.9265C39.1072 15.5401 40.2402 15.901 41.4064 15.9813C42.5726 16.0616 43.7407 15.8591 44.8205 15.3896C45.9002 14.9201 46.8626 14.196 47.6332 13.2735C48.4038 12.351 48.9619 11.2548 49.2644 10.0696C49.5669 8.88437 49.6056 7.642 49.3776 6.43857C49.1496 5.23514 48.661 4.1029 47.9495 3.12947C47.238 2.15603 46.3228 1.36748 45.2746 0.824826C44.2264 0.282168 43.0734 -5.39763e-05 41.9047 7.74316e-09V0.00200176ZM41.9047 12.0008C41.1499 12.0075 40.4102 11.7787 39.7795 11.3433C39.1488 10.908 38.6554 10.2857 38.3621 9.55548C38.0688 8.82527 37.9888 8.02004 38.1321 7.24197C38.2754 6.4639 38.6356 5.74806 39.1671 5.1853C39.6985 4.62254 40.3773 4.23822 41.1171 4.08112C41.8569 3.92402 42.6246 4.00122 43.3225 4.30291C44.0205 4.60461 44.6174 5.1172 45.0375 5.77565C45.4575 6.4341 45.6818 7.20871 45.6818 8.0012C45.6858 9.05737 45.2902 10.072 44.5819 10.822C43.8736 11.572 42.9106 11.996 41.9047 12.0008Z"
          fill="#BD0D22"
        />
        <path
          d="M7.61903 0.00200176C5.59834 0.00200176 3.66041 0.844772 2.23156 2.34491C0.802717 3.84505 0 5.87968 0 8.0012V20H3.80951V14.9265C4.8216 15.5401 5.95457 15.901 7.12076 15.9813C8.28695 16.0616 9.4551 15.8591 10.5349 15.3896C11.6146 14.9201 12.577 14.196 13.3476 13.2735C14.1182 12.351 14.6763 11.2548 14.9788 10.0696C15.2813 8.88437 15.32 7.642 15.092 6.43857C14.864 5.23514 14.3753 4.1029 13.6639 3.12947C12.9524 2.15603 12.0371 1.36748 10.989 0.824826C9.94077 0.282168 8.78772 -5.39763e-05 7.61903 7.74316e-09V0.00200176ZM7.61903 12.0008C6.86423 12.0075 6.12455 11.7787 5.49383 11.3433C4.86311 10.908 4.3698 10.2857 4.07649 9.55548C3.78319 8.82527 3.70311 8.02004 3.84643 7.24197C3.98974 6.4639 4.34999 5.74806 4.88145 5.1853C5.4129 4.62254 6.09162 4.23822 6.83146 4.08112C7.57131 3.92402 8.33893 4.00122 9.03691 4.30291C9.7349 4.60461 10.3318 5.1172 10.7518 5.77565C11.1719 6.4341 11.3961 7.20871 11.3962 8.0012C11.4002 9.05737 11.0046 10.072 10.2963 10.822C9.58801 11.572 8.625 11.996 7.61903 12.0008Z"
          fill="#BD0D22"
        />
      </svg>
    </div>
    <form @submit.prevent="onRegistrate">
      <div class="form-group">
        <input
          placeholder="Имя"
          v-model="name"
          type="text"
          :class="{
            invalid:
              ($v.name.$dirty && !$v.name.required) ||
              ($v.password.$dirty && !$v.password.minLength),
          }"
          class="form-control-special"
        />
        <small
          v-if="$v.password.$dirty && !$v.password.minLength"
          class="helper-text invalid"
          >Имя должно быть не меньше
          {{ $v.name.$params.minLength.min }} символов. Сейчас он
          {{ name.length }}</small
        >
      </div>
      <div class="form-group">
        <input
          required
          placeholder="Фамилия"
          v-model="lastName"
          type="text"
          :class="{ invalid: $v.lastName.$dirty && !$v.lastName.required }"
          class="form-control-special"
        />
        <small
          v-if="$v.lastName.$dirty && !$v.lastName.required"
          class="helper-text invalid"
          >Введите ваше имя</small
        >
      </div>
      <div class="form-group">
        <input
          required
          placeholder="Логин"
          v-model="login"
          :class="{
            invalid:
              ($v.login.$dirty && !$v.login.required) ||
              ($v.login.$dirty && !$v.login.minLength),
          }"
          type="text"
          class="form-control-special"
        />
        <small
          v-if="$v.login.$dirty && !$v.login.required"
          class="helper-text invalid"
          >Поле login не должно быть пустым</small
        >
        <small
          v-if="$v.login.$dirty && !$v.login.minLength"
          class="helper-text invalid"
          >Имя должно быть не меньше
          {{ $v.login.$params.minLength.min }} символов. Сейчас он
          {{ login.length }}</small
        >
      </div>
      <div class="form-group">
        <input
          required
          placeholder="Пароль"
          v-model="password"
          type="text"
          class="form-control-special"
          :class="{
            invalid:
              ($v.password.$dirty && !$v.password.required) ||
              ($v.password.$dirty && !$v.password.minLength),
          }"
        />
        <small
           v-if="$v.password.$dirty && !$v.password.required"
          class="helper-text invalid"
          >Введите пароль</small
        >
        <small
           v-if="$v.password.$dirty && !$v.password.minLength"
          class="helper-text invalid"
          >Пароль должен быть {{ $v.password.$params.minLength.min }} символов.
          Сейчас он {{ password.length }}</small
        >
      </div>
      <button class="btn login-button" type="submit">Зарегистрироваться</button>
    </form>
  </section>
</template>

<script>
import { email, required, minLength } from "vuelidate/lib/validators";
export default {
  layout: "empty",
  data() {
    return {
      name: "",
      lastName: "",
      login: "",
      password: "",
    };
  },
  validations: {
    login: { required, minLength: minLength(2) },
    password: { required, minLength: minLength(5) },
    name: { required, minLength: minLength(2) },
    lastName: { required, minLength: minLength(2) },
  },
  methods: {
    onRegistrate() {
      if (this.$v.$invalid) {
        this.$v.$touch();
      } else {
        var dataUser = {
          name: this.name,
          lastName: this.lastName,
          login: this.login,
          password: this.password,
        };
        window.localStorage.setItem(
          "user",
          JSON.stringify(dataUser) //преобразование в строку
        );
        this.$router.push("/login");
      }
    },
  },
};
</script>

<style lang="css" scoped>
form {
  width: 500px;
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.helper-text {
  color: #d6073d;
  display: block;
}
#loginSection {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.form-control-special {
  border: 1px solid #cbcbcb;
  border-radius: 10px;
  width: 358px;
  height: 44px;
  font-size: 16px;
  padding: 0 20px;
  outline: none;
  color: #9496a6;
}

.login-button {
  background: #d6073d;
  width: 358px;
  height: 44px;
  color: #fff;
  border-radius: 10px;
}
</style>