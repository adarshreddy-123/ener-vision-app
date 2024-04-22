<template>
  <div class="icon-btn d-flex justify-content-between">
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
            ><button type="button " class="btn btn-danger ms-4">
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
    <div class="width">
      <div class="d-flex text-btn justify-content-between w-100">
        <div class="d-flex align-item-center">
          <router-link to="HomePage">
            <i class="bi bi-arrow-left"></i>
          </router-link>
          <h3 class="ms-2">Audit Page</h3>
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
        <form @submit.prevent="submitForm">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Audit Data</h5>
                <button
                  type="reset"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">
                <div>
                  <label form="name">Id :</label><br />
                  <input
                    class="form-control"
                    placeholder="Id"
                    type="text"
                    id="name"
                    v-model="formDetails.name"
                    @input="validatename"
                    :class="{ 'is-invalid': errors.name }"
                  />
                  <div class="invalid-feedback" v-if="errors.name">
                    {{ errors.name }}
                  </div>
                </div>

                <div class="form">
                  <label for="customer">customer :</label><br />
                  <input
                    class="form-control"
                    placeholder="customer Name"
                    type="text"
                    id="customer"
                    v-model="formDetails.customer"
                    @input="validatecustomer"
                    :class="{ 'is-invalid': errors.customer }"
                  />
                  <div class="invalid-feedback" v-if="errors.customer">
                    {{ errors.customer }}
                  </div>
                </div>

                <div class="form">
                  <label for="started_date">started date :</label><br />
                  <input
                    class="form-control"
                    placeholder="started date"
                    type="date"
                    id="customer"
                    v-model="formDetails.started_date"
                    @input="validatestarted_date"
                    :class="{ 'is-invalid': errors.started_date }"
                  />
                  <div class="invalid-feedback" v-if="errors.started_date">
                    {{ errors.started_date }}
                  </div>
                </div>

                <div class="form">
                  <label for="end_date">end date :</label><br />
                  <input
                    class="form-control"
                    placeholder="end date"
                    type="date"
                    id="end_date"
                    v-model="formDetails.end_date"
                    @input="validateend_date"
                    :class="{ 'is-invalid': errors.end_date }"
                  />
                  <div class="invalid-feedback" v-if="errors.end_date">
                    {{ errors.end_date }}
                  </div>
                </div>
                <div class="form">
                  <label for="done_by">done by :</label><br />
                  <input
                    class="form-control"
                    placeholder="done by"
                    type="text"
                    id="done_by"
                    v-model="formDetails.done_by"
                    @input="validatedone_by"
                    :class="{ 'is-invalid': errors.done_by }"
                  />
                  <div class="invalid-feedback" v-if="errors.done_by">
                    {{ errors.done_by }}
                  </div>
                </div>

                <div class="form">
                  <label for="type_of_reports">Type of Reports :</label><br />
                  <select
                    class="form-control w-100 p-2"
                    id="type_of_reports"
                    v-model="formDetails.type_of_reports"
                  >
                    <option></option>
                    <option value="Form-A">Form-A</option>
                    <option value="Form-B">Form-B</option>
                  </select>
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
            <tr class="bg-secondary text-black">
              <th>S.no</th>
              <th>Id</th>
              <th>Customer</th>
              <th>Start Date</th>
              <th>End Date</th>
              <th>Done By</th>
              <th>Type of Reports</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(details, index) in data" :key="index">
              <td>{{ index + 1 }}</td>
              <td>{{ details.name }}</td>
              <td>{{ details.customer }}</td>
              <td>{{ details.started_date }}</td>
              <td>{{ details.end_date }}</td>
              <td>{{ details.done_by }}</td>
              <td>{{ details.type_of_reports }}</td>
              <td>
                <i class="bi bi-cloud-arrow-down me-2"></i>
                <i
                  v-if="details.type_of_reports == 'Form-A'"
                  @click="viewtoForma(details.name)"
                  class="bi bi-eye-fill"
                ></i>
                <i
                  v-if="details.type_of_reports == 'Form-B'"
                  @click="viewtoFormb(details.name)"
                  class="bi bi-eye-fill"
                ></i>
              </td>
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
        "http://192.168.1.190:8002/api/resource/Audit%20Record?fields=[%22*%22]&limit_page_length=*"
      );
      let res = await response.json();
      this.data = res.data;
      console.log(this.data);
    },
    submitForm() {
      console.log("===============");
      axios
        .post(
          "http://192.168.1.190:8002/api/resource/Audit%20Record?fields=[%22*%22]",
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
    validatename() {
      if (!this.formDetails.name) {
        this.errors.name = "Required";
      } else {
        delete this.errors.name;
      }
    },
    validateSitename() {
      if (!this.formDetails.Sitename) {
        this.errors.Sitename = "Required";
      } else {
        delete this.errors.Sitename;
      }
    },
    validatecustomer() {
      if (!this.formDetails.customer) {
        this.errors.customer = "Required";
      } else {
        delete this.errors.customer;
      }
    },
    validatestarted_date() {
      if (!this.formDetails.started_date) {
        this.errors.started_date = "Required";
      } else {
        delete this.errors.started_date;
      }
    },
    validateend_date() {
      if (!this.formDetails.end_date) {
        this.errors.end_date = "Required";
      } else {
        delete this.errors.end_date;
      }
    },
    validatedone_by() {
      if (!this.formDetails.done_by) {
        this.errors.done_by = "Required";
      } else {
        delete this.errors.done_by;
      }
    },
    viewtoForma(id) {
      this.$router.push({
        path: "AuditRecordFormA",
        query: {
          id: id,
          name: "Form-A",
        },
      });
    },
    viewtoFormb(id) {
      this.$router.push({
        path: "AuditRecordFormB",
        query: {
          id: id,
          name: "Form-B",
        },
      });
    },
  },
};
</script>
<style scoped>
.add-btn {
  padding: 6px 19px;
  background-color: rgb(245, 27, 58);
  border-radius: 8px;
  font-weight: bold;
}
.Submit-btn {
  background-color: rgb(245, 27, 58);
  font-weight: bold;
}
input {
  width: 25vw;
  padding: 5px;
}
.form {
  margin-top: 15px;
}
.text-btn {
  /* background-color: black; */
  height: 50px;
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
  top: 251px;
  z-index: 10;
}
.icon-btn {
  width: -webkit-fill-available !important;
  height: 54px;
  background-color: black;
  position: fixed;
  z-index: 100;
  top: 0px;
}
tr:hover {
  background-color: rgb(217, 217, 217);
}
.bi-arrow-left {
  font-size: 27px;
}
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
</style>
