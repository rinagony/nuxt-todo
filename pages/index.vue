<template>
  <section>
    <div class="container">
      <h2>Мой профиль</h2>
      <div class="wrpMyProfile">
        <form @submit.prevent="changeData">
          <div class="wrpForm">
            <div class="wrpFormItems">
              <label for="name">Имя</label>
              <input
                required
                ref="inputName"
                type="text"
                id="name"
                :value="name"
                class="form-control-myProfile"
              />
              <label for="lastName">Фамилия</label>
              <input
                ref="inputLastName"
                required
                type="text"
                id="lastName"
                :value="lastName"
                class="form-control-myProfile"
              />
            </div>
            <div class="wrpFormItems">
              <label for="login">Сменить логин</label>
              <input
                ref="inputLogin"
                required
                :value="login"
                type="text"
                id="login"
                class="form-control-myProfile"
              />
              <label for="password">Сменить пароль</label>
              <input
                ref="inputPassword"
                required
                :value="password"
                type="text"
                id="password"
                class="form-control-myProfile"
              />
            </div>
          </div>
          <div class="wrpButtonChange">
            <button class="btn login-button" type="submit">Сохранить</button>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      lastName: "",
      login: "",
      password: "",
    };
  },
  mounted() {
    let data = window.localStorage.getItem("user");
    let dataDiffer = JSON.parse(data);
    this.name = dataDiffer.name;
    this.lastName = dataDiffer.lastName;
    this.login = dataDiffer.login;
    this.password = dataDiffer.password;
  },
  methods: {
    changeData() {
      this.name = this.$refs.inputName.value; //отображение информации о контакте в инпут
      this.lastName = this.$refs.inputLastName.value;
      this.phone = this.$refs.inputLogin.value;
      this.email = this.$refs.inputPassword.value;
      var dataUser = {
        name: this.name,
        lastName: this.lastName,
        login: this.login,
        password: this.password,
      };
      window.localStorage.setItem("user", JSON.stringify(dataUser));
    },
  },
};
</script>

<style scoped lang="scss">
@import "./../assets/scss/style.scss";
.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
.wrpMyProfile {
  background: #fff;
  width: 100%;
  padding: 2rem;
}
.wrpForm {
  @include for-medium-up {
    display: flex;
  }
}

label {
  @include for-medium-up {
    margin-top: 0;
  }
  margin-top: 15px;
}
.wrpFormItems {
  @include for-tablet-portrait-up {
    align-items: center;
    margin-top: 0;
  }
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
}
label {
  text-align: left;
  color: #6f849c;
}
input {
  border-top: none;
  border-right: none;
  border-left: none;
  border-bottom: 1px solid #6f849c;
  @include for-medium-up {
    width: 85%;
  }

  outline: none;
}

.wrpButtonChange {
  @include for-medium-up {
    justify-content: flex-end;
  }
  display: flex;
  justify-content: center;
}
.wrpButtonChange button {
  @include for-medium-up {
    width: 202px;
    height: 44px;
  }
  width: 85%;
  background: #d6073d;
  border-radius: 10px;
  font-size: 16px;
  color: #ffff;
  margin-top: 2rem;
}
</style>