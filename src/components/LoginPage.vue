<template>
  <div class="bg-img">
    <div class="first"></div>
    <!-- <div class="second"></div>
    <div class="third"></div> -->
    <div class="container">
      <div class="row">
        <div class="col-6">
          <div class="ms-5">
            <img
              class="img-fluid w-25 mb-3"
              src="https://www.visionenergy.com/_resources/logos/logo-rev.svg"
            />
            <h2>
              <b>Developing Strategic Energy Assets </b>
            </h2>
            <h5>Your Ezy path to Resolution</h5>
          </div>
        </div>
        <div class="col-6">
          <div>
            <h4>Welcome Ener Vision</h4>
            <p>Sign in Using your valid credentials</p>
            <div class="user-name">
              <input
                type="text"
                class="form-control"
                id="name"
                placeholder="Email"
                v-model="formDetails.name"
                @input="validatename"
                :class="{ 'is-invalid': errors.name }"
              />
              <div class="invalid-feedback" v-if="errors.name">
                {{ errors.name }}
              </div>
            </div>

            <div class="user-password">
              <input
                class="form-control"
                type="password"
                id="password"
                placeholder="Password"
                v-model="formDetails.password"
                @input="validatepassword"
                :class="{ 'is-invalid': errors.password }"
              />
              <div class="invalid-feedback" v-if="errors.password">
                {{ errors.password }}
              </div>
            </div>
            <router-link to="HomePage"
              ><button
                type="submit"
                class="border-0 button text-white rounded-1"
                :disabled="!formDetails.name || !formDetails.password"
              >
                Log In
              </button>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [],
      item: [],
      formDetails: {
        name: "",
        password: "",
      },
      errors: {},
    };
  },
  methods: {
    validatename() {
      if (!this.formDetails.name) {
        this.errors.name = "required";
      } else if (!this.formDetails.name.includes("@gmail.com")) {
        this.errors.name = "invalid Email format";
      } else {
        delete this.errors.name;
      }
    },
    validatepassword() {
      if (!this.formDetails.password) {
        this.errors.password = "required";
      } else {
        delete this.errors.password;
      }
    },
  },
};
</script>

<style scoped>
.bg-img {
  /* background-image: url(https://undsgn.com/wp-content/uploads/2018/04/ltotbngnzzu-uai-1350x759.jpg); */
  background-image: url(https://wallpapercrafter.com/th8001/652940-Wave-Red-Lines-Light-black-background-abstract.jpg);
  /* background-color: black; */
  background-size: 100vw 100vh;
  width: 100vw;
  height: 100vh;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
}
input {
  width: 58%;
  padding: 7px;
  margin-top: 16px;
  border-radius: 6px;
}
button {
  padding: 9px;
  width: 58%;
  margin-top: 25px;
  background-color: rgb(245, 27, 58);
  font-weight: bold;
}
.row {
  height: 550px;
  width: 97%;
  background: transparent;
  -webkit-backdrop-filter: blur(15px);
  backdrop-filter: blur(29px);
  align-items: center;
  border-radius: 30px;
  box-shadow: 0 4px 8px 0 rgba(219, 216, 216, 0.2),
    0 -7px 20px 0 rgba(226, 190, 190, 0.19) inset;
}

.first {
  width: 140px;
  height: 140px;
  background-color: red;
  position: absolute;
  animation-name: example;
  animation-duration: 5s;
  border-radius: 60px;
}

@keyframes example {
  0% {
    background-color: red;
    left: 60%;
    top: 75%;
  }
  25% {
    background-color: red;
    left: 17%;
    top: 25%;
  }
  50% {
    background-color: red;
    left: 50%;
    top: 20%;
  }
  /* 75% {
    background-color: red;
    left: 0px;
    top: 200px;
  }
  100% {
    background-color: red;
    left: 0px;
    top: 0px;
  } */
}
.second {
  width: 100px;
  height: 100px;
  background-color: red;
  position: relative;
  animation-name: example2;
  animation-duration: 4s;
  border-radius: 50px;
}

@keyframes example2 {
  0% {
    background-color: red;
    left: 00px;
    top: 0px;
  }
  25% {
    background-color: yellow;
    left: 0px;
    top: 200px;
  }
  50% {
    background-color: blue;
    left: 200px;
    top: 200px;
  }
  75% {
    background-color: green;
    left: 200px;
    top: 0px;
  }
  100% {
    background-color: red;
    left: 0px;
    top: 200px;
  }
}
.third {
  width: 100px;
  height: 100px;
  background-color: red;
  position: relative;
  animation-name: example3;
  animation-duration: 4s;
  border-radius: 50px;
}

@keyframes example3 {
  0% {
    background-color: red;
    left: 0px;
    top: 0px;
  }
  25% {
    background-color: yellow;
    left: 200px;
    top: 0px;
  }
  50% {
    background-color: blue;
    left: 200px;
    top: 200px;
  }
  75% {
    background-color: green;
    left: 0px;
    top: 200px;
  }
  100% {
    background-color: red;
    left: 0px;
    top: 0px;
  }
}
</style>
