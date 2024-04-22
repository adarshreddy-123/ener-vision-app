<template>
  <div class="icon-btn align-item-center d-flex justify-content-between ;">
    <div>
      <router-link to="HomePage">
        <img
          class="w-50 ms-5 mt-2"
          src="https://www.visionenergy.com/_resources/logos/logo-rev.svg"
        />
      </router-link>
    </div>

    <div class="dropdown">
      <button
        class="btn btn-danger me-5 mt-2 dropdown-togg"
        type="button"
        id="dropdownMenuButton1"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        A
      </button>
      <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
        <li>
          <router-link to="/"
            ><button type="button " class="btn btn-danger ms-3">
              Log Out
            </button></router-link
          >
        </li>
      </ul>
    </div>
  </div>

  <div>
    <div class="text-div d-flex justify-content-center bg-black">
      <h2 title="Welcome To Ener Vision .">Welcome To Ener Vision .</h2>
    </div>
    <!-- <SideBarPage /> -->
    <div class="width">
      <div class="d-flex text-btn justify-content-between w-100">
        <div class="d-flex align-item-center">
          <router-link to="HomePage">
            <i class="bi bi-arrow-left"></i>
          </router-link>
          <h3 class="ms-2">Customer Page</h3>
        </div>

        <div>
          <button
            type="button"
            class="btn add-btn border-0 text-white mt-1 me-2"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            Add Details
          </button>
        </div>
      </div>

      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <form @submit.prevent="submitForm" class="modal-form">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">
                  Customer Data
                </h5>
                <button
                  type="reset"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">
                <div>
                  <label form="company">Company :</label><br />
                  <input
                    class="form-control"
                    placeholder="Company Name"
                    type="text"
                    id="Company"
                    v-model="formDetails.company"
                    @input="validatecompany"
                    :class="{ 'is-invalid': errors.company }"
                  />
                  <div class="invalid-feedback" v-if="errors.company">
                    {{ errors.company }}
                  </div>
                </div>

                <div class="form">
                  <label for="full_name">Full Name :</label><br />
                  <input
                    class="form-control"
                    placeholder="Full Name"
                    type="text"
                    id="full_name"
                    v-model="formDetails.full_name"
                    @input="validatefull_name"
                    :class="{ 'is-invalid': errors.full_name }"
                  />
                  <div class="invalid-feedback" v-if="errors.full_name">
                    {{ errors.full_name }}
                  </div>
                </div>

                <div class="form">
                  <label for="Mobile">Mobile Number :</label><br />
                  <input
                    class="form-control"
                    placeholder="Mobile Number"
                    type="text"
                    id="Mobile"
                    v-model="formDetails.mobile_no"
                    @input="validatemobile_no"
                    :class="{ 'is-invalid': errors.mobile_no }"
                  />
                  <div class="invalid-feedback" v-if="errors.mobile_no">
                    {{ errors.mobile_no }}
                  </div>
                </div>
                <div class="form">
                  <label for="email_id">Email ID</label><br />
                  <input
                    class="form-control"
                    placeholder="Email ID"
                    type="email_id"
                    id="email_id"
                    v-model="formDetails.email_id"
                    @input="validateemail_id"
                    :class="{ 'is-invalid': errors.email_id }"
                  />
                  <div class="invalid-feedback" v-if="errors.email_id">
                    {{ errors.email_id }}
                  </div>
                </div>
                <div class="form">
                  <label for="floatingInputInvalid">location</label><br />
                  <input
                    class="form-control"
                    placeholder="location"
                    type="text"
                    id="floatingInputInvalid"
                    v-model="formDetails.location"
                    @input="validatelocation"
                    :class="{ 'is-invalid': errors.location }"
                  />
                  <div class="invalid-feedback" v-if="errors.location">
                    {{ errors.location }}
                  </div>
                </div>
              </div>
              <div class="modal-footer">
                <button type="submit" class="btn Submit-btn text-white">
                  Save
                </button>
                <button type="reset" class="btn Submit-btn text-white">
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
      <div>
        <table class="w-100 text-center mt-2">
          <thead>
            <tr class="bg-secondary tr-heading text-black">
              <th>S.no</th>
              <th>Company</th>
              <th>Full Name</th>
              <th>Mobile Number</th>
              <th>Email ID</th>
              <th>Location</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(details, index) in data" :key="index">
              <td>{{ index + 1 }}</td>
              <td>{{ details.company }}</td>
              <td>{{ details.full_name }}</td>
              <td>{{ details.mobile_no }}</td>
              <td>{{ details.email_id }}</td>
              <td>{{ details.location }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      data: [],
      details: [],
      item: [],
      formDetails: {},
      errors: {},
    };
  },

  mounted() {
    this.fetchData();
  },

  methods: {
    async fetchData() {
      const response = await fetch(
        "http://192.168.1.190:8002/api/resource/Customer?fields=[%22*%22]&limit_page_length=*"
      );
      let res = await response.json();
      this.data = res.data;
      console.log(this.data);
    },
    submitForm() {
      console.log("==========");
      axios
        .post(
          "http://192.168.1.190:8002/api/resource/Customer?fields=[%22*%22]",
          this.formDetails
        )
        .then((res) => {
          this.fetchData();
          console.log(res);
        })
        .catch((error) => {
          console.log("Error while sending data", error);
        });
    },
    validatecompany() {
      if (!this.formDetails.company) {
        this.errors.company = "Required";
      } else {
        delete this.errors.company;
      }
    },
    validatefull_name() {
      if (!this.formDetails.full_name) {
        this.errors.full_name = "Required";
      } else {
        delete this.errors.full_name;
      }
    },
    validatemobile_no() {
      if (!this.formDetails.mobile_no) {
        this.errors.mobile_no = "Required";
      } else {
        delete this.errors.mobile_no;
      }
    },
    validateemail_id() {
      if (!this.formDetails.email_id) {
        this.errors.email_id = "Required";
      } else if (!this.formDetails.email_id.includes("@gmail.com")) {
        this.errors.email_id = "Invalid email_id Format";
      } else {
        delete this.errors.email_id;
      }
    },
    validatelocation() {
      if (!this.formDetails.location) {
        this.errors.location = "Required";
      } else {
        delete this.errors.location;
      }
    },
  },
};
</script>
<style scoped>
.text-div {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 20vh;
  width: -webkit-fill-available;
  background-color: #252839;
  position: sticky;
  top: 53px;
  z-index: 10;
}

h2 {
  position: absolute;
  font-size: 5vw;
  color: #252839;
  text-shadow: 0 0 0.3vw #383d52;
  text-transform: uppercase;
  user-select: none;
}

h2::before {
  content: attr(title);
  position: absolute;
  top: 0;
  left: 0;
  width: 0;
  height: 100%;
  color: rgb(220, 53, 69);
  text-shadow: 0 0 0.3vw #383d52;
  border-right: 2px solid rgb(245, 27, 58);
  font-weight: bold;
  overflow: hidden;
  animation: animate 9s linear infinite;
}

@keyframes animate {
  0%,
  10%,
  100% {
    width: 0;
  }

  70%,
  100% {
    width: 100%;
  }
}
.add-btn {
  padding: 6px 19px;
  background-color: rgb(220, 53, 69);
  border-radius: 8px;
  font-weight: bold;
}
.add-btn:hover {
  background-color: rgba(245, 27, 60, 0.836);
}

.Submit-btn {
  /* width: 100vw; */
  background-color: rgb(245, 27, 58);
  font-weight: bold;
}
input {
  width: 25vw;
  padding: 5px;
}
.is-invalid {
  border-color: red;
}
.form {
  margin-top: 15px;
}
.text-btn {
  height: 71px;
  align-items: center;
  background-color: white;
  position: sticky;
  z-index: 10;
  top: 200px;
}
.width {
  width: -webkit-fill-available;
}
table,
tr,
td {
  border-bottom: 1px solid rgba(0, 0, 0, 0.103);
  padding: 7px;
}
thead {
  position: sticky;
  top: 270px;
  z-index: 10;
}
.icon-btn {
  width: -webkit-fill-available;
  background-color: black;
  height: 54px;
  position: fixed;
  z-index: 100;
  top: 0px;
}
tr:hover {
  background-color: rgb(217, 217, 217);
}
.tr-heading {
  position: sticky;
  z-index: 100;
  top: 155px;
}
.bi-arrow-left {
  font-size: 27px;
}
</style>
