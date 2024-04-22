<template>
  <div class="icon-btn">
    <div class="d-flex align-item-center justify-content-between">
      <div class="img-btn">
        <router-link to="HomePage">
          <img
            class="w-50 ms-5 mt-2"
            src="https://www.visionenergy.com/_resources/logos/logo-rev.svg"
          />
        </router-link>
      </div>
      <div class="dropdown mt-0">
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

    <div class="text-div mt-2 d-flex justify-content-center bg-black">
      <h2 title="Welcome To Ener Vision .">Welcome To Ener Vision .</h2>
    </div>

    <div
      class="d-flex justify-content-between mt-1 align-items-center bg-white"
    >
      <div class="d-flex align-item-center">
        <router-link to="AuditPage"
          ><i class="bi bi-arrow-left-circle-fill form-control-lg"></i
        ></router-link>
        <h4>Audit Id :{{ $route.query.id }}</h4>
      </div>
      <div>
        <button
          class="save-btn border-0 rounded-3 text-white p-2 mt-2 me-4"
          @click="SaveData()"
        >
          Save
        </button>
      </div>
    </div>
  </div>
  <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
    <li class="nav-item 1" role="presentation">
      <button
        class="nav-link active"
        id="pills-home-tab"
        data-bs-toggle="pill"
        data-bs-target="#pills-home"
        type="button"
        role="tab"
        aria-controls="pills-home"
        aria-selected="true"
      >
        Installation In Meter Room
      </button>
    </li>
    <li class="nav-item 2" role="presentation">
      <button
        class="nav-link"
        id="pills-profile-tab"
        data-bs-toggle="pill"
        data-bs-target="#pills-profile"
        type="button"
        role="tab"
        aria-controls="pills-profile"
        aria-selected="false"
      >
        Installation In The Electrical Shift at Floor wise
      </button>
    </li>
    <li class="nav-item 3" role="presentation">
      <button
        class="nav-link"
        id="pills-contact-tab"
        data-bs-toggle="pill"
        data-bs-target="#pills-contact"
        type="button"
        role="tab"
        aria-controls="pills-contact"
        aria-selected="false"
      >
        Installation within The Flat
      </button>
    </li>
  </ul>
  <div class="tab-content" id="pills-tabContent">
    <div
      class="tab-pane fade show active"
      id="pills-home"
      role="tabpanel"
      aria-labelledby="pills-home-tab"
    >
      <table class="w-100">
        <thead class="bg-secondary">
          <tr>
            <th>S.no</th>
            <th>Observation</th>
            <th>Observation Type</th>
            <th>Result</th>
            <th>Remark/Recomandations</th>
            <!-- <th>Risk Classification</th> -->
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in data" :key="index">
            <td>{{ index + 1 }}</td>
            <td>{{ item.observation }}</td>
            <td>{{ item.observation_type }}</td>
            <td v-if="item.observation_type !== 'Text Type'">
              <select class="w-100" v-model="item.result_type">
                <option></option>
                <option
                  v-for="(option, index) in item.observation_type.split('/')"
                  :key="index"
                  :value="option"
                >
                  {{ option }}
                </option>
              </select>
            </td>
            <td v-if="item.observation_type == 'Text Type'">
              <input
                class="w-100 h-25"
                placeholder="Type Text"
                type="text"
                v-model="item.result_type"
              />
            </td>
            <td>
              <input
                type="text h-25"
                placeholder="Enter remark"
                v-model="item.remarks"
              />
            </td>
            <td>
              <button type="button" class="file-upload">
                Upload File
                <input type="file" />
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div
      class="tab-pane fade"
      id="pills-profile"
      role="tabpanel"
      aria-labelledby="pills-profile-tab"
    >
      <table class="w-100">
        <thead class="bg-secondary">
          <tr>
            <th>S.no</th>
            <th>Observation</th>
            <th>Observation Type</th>
            <th>Result</th>
            <th>Remark/Recomandations</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(second1, index) in second" :key="index">
            <td>{{ index + 1 }}</td>
            <td>{{ second1.observation }}</td>
            <td>{{ second1.observation_type }}</td>
            <td v-if="second1.observation_type !== 'Text Type'">
              <select class="w-100" v-model="second1.result_type">
                <option></option>
                <option
                  v-for="(option, index) in second1.observation_type.split('/')"
                  :key="index"
                  :value="option"
                >
                  {{ option }}
                </option>
              </select>
            </td>
            <td v-if="second1.observation_type == 'Text Type'">
              <input
                class="w-100 h-25"
                placeholder="Type Text"
                type="text"
                v-model="second1.result_type"
              />
            </td>
            <td>
              <input
                type="text"
                class="h-25"
                placeholder="Enter remark"
                v-model="second1.remarks"
              />
            </td>

            <td>
              <button type="button" class="file-upload">
                Upload File
                <input type="file" />
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div
      class="tab-pane fade"
      id="pills-contact"
      role="tabpanel"
      aria-labelledby="pills-contact-tab"
    >
      <table class="w-100">
        <thead class="bg-secondary">
          <tr>
            <th>S.no</th>
            <th>Observation</th>
            <th>Observation Type</th>
            <th>Result</th>
            <th>Remark/Recomandations</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(third1, index) in third" :key="index">
            <td>{{ index + 1 }}</td>
            <td>{{ third1.observation }}</td>
            <td>{{ third1.observation_type }}</td>
            <td v-if="third1.observation_type !== 'Text Type'">
              <select class="w-100" v-model="third1.result_type">
                <option></option>
                <option
                  v-for="(option, index) in third1.observation_type.split('/')"
                  :key="index"
                  :value="option"
                >
                  {{ option }}
                </option>
              </select>
            </td>
            <td v-if="third1.observation_type == 'Text Type'">
              <input
                class="w-100 h-25"
                placeholder="Type Text"
                type="text"
                v-model="third1.result_type"
              />
            </td>
            <td>
              <input
                type="text"
                class="h-25"
                placeholder="Enter remark"
                v-model="third1.remarks"
              />
            </td>
            <td>
              <button type="button" class="file-upload">
                Upload File
                <input type="file" />
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      data: [],
      second: [],
      third: [],
      formData: {},
    };
  },
  mounted() {
    this.firstData();
    this.secondData();
    this.thirdData();
  },
  methods: {
    async firstData() {
      const response = await fetch(
        "http://192.168.1.190:8002/api/resource/Audit%20Record%20Details?fields=%22*%22&filters={%22audit_record_id%22:%22AR-2023-00064%22,%22section%22:%22Installation%20In%20Meter%20Room%22}&limit_page_length=*"
      );
      let res = await response.json();
      this.data = res.data;
      console.log(this.data);
    },
    async secondData() {
      const response = await fetch(
        "http://192.168.1.190:8002/api/resource/Audit%20Record%20Details?fields=%22*%22&filters={%22audit_record_id%22:%22AR-2023-00064%22,%22section%22:%22Installation%20In%20The%20Electrical%20Shaft%20At%20Floor%20Wise%22}&limit_page_length=*"
      );
      let res = await response.json();
      this.second = res.data;
      console.log(this.second);
    },
    async thirdData() {
      const response = await fetch(
        "http://192.168.1.190:8002/api/resource/Audit%20Record%20Details?fields=%22*%22&filters={%22audit_record_id%22:%22AR-2023-00064%22,%22section%22:%22Installation%20Within%20the%20Flat%22}&limit_page_length=*"
      );
      let res = await response.json();
      this.third = res.data;
      console.log(this.third);
    },
    SaveData() {
      // console.log(this.data, this.second, this.third)
      axios
        .post(this.data)
        .then(() => {
          this.firstData();
          console.log(this.data);
        })
        .catch((error) => {
          console.log("Error while sending data", error);
        });
    },
  },
};
</script>

<style scoped>
.icon-btn {
  width: -webkit-fill-available;
  height: 55px;
  background-color: black;
  position: sticky;
  z-index: 100;
  top: 0px;
}
.nav-pills .nav-link.active,
.nav-pills .show > .nav-link {
  background-color: transparent !important;
  color: grey !important;
  border-bottom: 4px solid rgb(216, 78, 85) !important;
}
.nav-pills .nav-link {
  color: black !important;
}
.nav-pills {
  position: sticky;
  z-index: 100;
  top: 296px;
  background-color: white;
}
table,
tr,
td {
  text-align: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.103);
}
table {
  position: relative;
  top: 231px;
}
thead {
  position: sticky;
  z-index: 100;
  top: 344px;
}
.save-btn {
  background-color: rgb(216, 78, 85);
}
input {
  padding: 3px;
  border-radius: 7px;
  border: 1px solid rgb(82, 76, 76);
  background-color: rgb(239, 239, 239);
}
select {
  padding: 3px;
  border-radius: 8px;
}
.file-upload {
  position: relative;
  padding: 6px 14px;
  border-radius: 3px;
  border: 1px solid rgb(216, 78, 85);
  background: none;
  color: rgb(216, 78, 85);
  overflow: hidden;
}
.file-upload input[type="file"] {
  position: absolute;
  left: 0%;
  top: 0%;
  transform: scale(5);
  opacity: 0;
}
tr:hover {
  background-color: rgb(217, 217, 217);
}
.text-div {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 20vh;
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