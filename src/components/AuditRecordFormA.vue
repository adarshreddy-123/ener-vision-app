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
    <div class="text-div mt-2 d-flex justify-content-center bg-black">
      <h2 title="Welcome To Ener Vision .">Welcome To Ener Vision .</h2>
    </div>

    <div
      class="d-flex audit-save-btn justify-content-between align-items-center bg-white"
    >
      <div class="d-flex">
        <router-link to="AuditPage"
          ><i class="bi bi-arrow-left-circle-fill form-control-lg"></i
        ></router-link>
        <h4>Audit Id : {{ $route.query.id }}</h4>
      </div>
      <div>
        <button
          class="save-btn border-0 rounded-3 text-white p-2 mt-2 me-4"
          @click="SaveDetails()"
        >
          Save
        </button>
      </div>
    </div>
  </div>
  <ul class="nav nav-pills" id="pills-tab" role="tablist">
    <li class="nav-item 1" role="presentation">
      <button
        class="nav-link active"
        id="pills-home-tab1"
        data-bs-toggle="pill"
        data-bs-target="#pills-home"
        type="button"
        role="tab"
        aria-controls="pills-home"
        aria-selected="true"
      >
        Main Lt Panel
      </button>
    </li>
    <li class="nav-item 2" role="presentation">
      <button
        class="nav-link"
        id="pills-home-tab2"
        data-bs-toggle="pill"
        data-bs-target="#pills-profile"
        type="button"
        role="tab"
        aria-controls="pills-profile"
        aria-selected="false"
      >
        Electrical DB's
      </button>
    </li>
    <li class="nav-item 3" role="presentation">
      <button
        class="nav-link"
        id="pills-home-tab3"
        data-bs-toggle="pill"
        data-bs-target="#pills-contact"
        type="button"
        role="tab"
        aria-controls="pills-contact"
        aria-selected="false"
      >
        UPS,Inverters and Batteries
      </button>
    </li>
    <li class="nav-item 4" role="presentation">
      <button
        class="nav-link"
        id="pills-home-tab4"
        data-bs-toggle="pill"
        data-bs-target="#pills-profile4"
        type="button"
        role="tab"
        aria-controls="pills-profile4"
        aria-selected="false"
      >
        Electrical Room
      </button>
    </li>
    <li class="nav-item 5" role="presentation">
      <button
        class="nav-link"
        id="pills-home-tab5"
        data-bs-toggle="pill"
        data-bs-target="#pills-profile5"
        type="button"
        role="tab"
        aria-controls="pills-profile"
        aria-selected="false"
      >
        Bill Cursor Pointer
      </button>
    </li>
    <li class="nav-item 6" role="presentation">
      <button
        class="nav-link"
        id="Stock-Room"
        data-bs-toggle="pill"
        data-bs-target="#Stock-Room1"
        type="button"
        role="tab"
        aria-controls="Stock-Room1"
        aria-selected="false"
      >
        Stock Room
      </button>
    </li>
    <li class="nav-item 7" role="presentation">
      <button
        class="nav-link"
        id="pills-home-tab7"
        data-bs-toggle="pill"
        data-bs-target="#pills-profile7"
        type="button"
        role="tab"
        aria-controls="pills-profile7"
        aria-selected="false"
      >
        Staff Room
      </button>
    </li>
    <li class="nav-item 8" role="presentation">
      <button
        class="nav-link"
        id="pills-home-tab8"
        data-bs-toggle="pill"
        data-bs-target="#pills-profile8"
        type="button"
        role="tab"
        aria-controls="pills-profile8"
        aria-selected="false"
      >
        Cash Office
      </button>
    </li>
    <li class="nav-item 10" role="presentation">
      <button
        class="nav-link"
        id="pills-home-tab10"
        data-bs-toggle="pill"
        data-bs-target="#pills-profile10"
        type="button"
        role="tab"
        aria-controls="pills-profile10"
        aria-selected="false"
      >
        Shop Area
      </button>
    </li>
    <li class="nav-item 11" role="presentation">
      <button
        class="nav-link"
        id="pills-home-tab11"
        data-bs-toggle="pill"
        data-bs-target="#pills-profile11"
        type="button"
        role="tab"
        aria-controls="pills-profile11"
        aria-selected="false"
      >
        Fire Alarm System
      </button>
    </li>
    <li class="nav-item 12" role="presentation">
      <button
        class="nav-link"
        id="pills-home-tab12"
        data-bs-toggle="pill"
        data-bs-target="#pills-profile12"
        type="button"
        role="tab"
        aria-controls="pills-profile12"
        aria-selected="false"
      >
        Smock Detector
      </button>
    </li>
    <li class="nav-item 13" role="presentation">
      <button
        class="nav-link"
        id="pills-home-tab13"
        data-bs-toggle="pill"
        data-bs-target="#pills-profile13"
        type="button"
        role="tab"
        aria-controls="pills-profile13"
        aria-selected="false"
      >
        Fire Exitinguishers
      </button>
    </li>
    <li class="nav-item 14" role="presentation">
      <button
        class="nav-link"
        id="pills-home-tab14"
        data-bs-toggle="pill"
        data-bs-target="#pills-profile14"
        type="button"
        role="tab"
        aria-controls="pills-profile14"
        aria-selected="false"
      >
        AC Units
      </button>
    </li>
  </ul>
  <div class="tab-content" id="pills-tabContent">
    <div
      class="tab-pane fade show active"
      id="pills-home-tab1"
      role="tabpanel"
      aria-labelledby="pills-home-tab1"
    >
      <table class="w-100">
        <thead>
          <tr>
            <th>S.no</th>
            <th>Observation</th>
            <th>Observation Type</th>
            <th>Result</th>
            <th>Remark/Recomandations</th>
            <th>Risk Classification</th>
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
                class="w-100"
                placeholder="Text Type"
                type="text"
                v-model="item.result_type"
              />
            </td>
            <td>
              <input
                class="h-25"
                type="text"
                placeholder="Enter remark"
                v-model="item.remarks"
              />
            </td>
            <td>
              <select class="w-100" v-model="item.risk_classification">
                <option></option>
                <option>Red</option>
                <option>Green</option>
                <option>Yellow</option>
                <option>Orange</option>
              </select>
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
      aria-labelledby="pills-home-tab2"
    >
      <table class="w-100">
        <thead>
          <tr>
            <th>S.no</th>
            <th>Observation</th>
            <th>Observation Type</th>
            <th>Result</th>
            <th>Remark/Recomandations</th>
            <th>Risk Classification</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(second, index) in data1" :key="index">
            <td>{{ index + 1 }}</td>
            <td>{{ second.observation }}</td>
            <td>{{ second.observation_type }}</td>
            <td v-if="second.observation_type !== 'Text Type'">
              <select class="w-100" v-model="second.result_type">
                <option></option>
                <option
                  v-for="(option, index) in second.observation_type.split('/')"
                  :key="index"
                  :value="option"
                >
                  {{ option }}
                </option>
              </select>
            </td>
            <td v-if="second.observation_type == 'Text Type'">
              <input
                class="w-100 h-25"
                placeholder="Text Type"
                type="text"
                v-model="second.result_type"
              />
            </td>
            <td>
              <input
                type="text"
                placeholder="Enter remark"
                class="h-25"
                v-model="second.remarks"
              />
            </td>
            <td>
              <select class="w-100" v-model="second.risk_classification">
                <option></option>
                <option>Red</option>
                <option>Green</option>
                <option>Yellow</option>
                <option>Orange</option>
              </select>
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
      aria-labelledby="pills-home-tab3"
    >
      <table class="w-100">
        <thead>
          <tr>
            <th>S.no</th>
            <th>Observation</th>
            <th>Observation Type</th>
            <th>Result</th>
            <th>Remark/Recomandations</th>
            <th>Risk Classification</th>
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
                placeholder="Enter remark"
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
              <select class="w-100" v-model="third1.risk_classification">
                <option></option>
                <option>Red</option>
                <option>Green</option>
                <option>Yellow</option>
                <option>Orange</option>
              </select>
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
      id="pills-profile4"
      role="tabpanel"
      aria-labelledby="pills-home-tab4"
    >
      <table class="w-100">
        <thead>
          <tr>
            <th>S.no</th>
            <th>Observation</th>
            <th>Observation Type</th>
            <th>Result</th>
            <th>Remark/Recomandations</th>
            <th>Risk Classification</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(fourth1, index) in fourth" :key="index">
            <td>{{ index + 1 }}</td>
            <td>{{ fourth1.observation }}</td>
            <td>{{ fourth1.observation_type }}</td>
            <td v-if="fourth1.observation_type !== 'Text Type'">
              <select class="w-100" v-model="fourth1.result_type">
                <option></option>
                <option
                  v-for="(option, index) in fourth1.observation_type.split('/')"
                  :key="index"
                  :value="option"
                >
                  {{ option }}
                </option>
              </select>
            </td>
            <td v-if="fourth1.observation_type == 'Text Type'">
              <input
                class="w-100 h-25"
                placeholder="Enter remark"
                type="text"
                v-model="fourth1.result_type"
              />
            </td>
            <td>
              <input
                type="text"
                class="h-25"
                placeholder="Enter remark"
                v-model="fourth1.remarks"
              />
            </td>
            <td>
              <select class="w-100" v-model="fourth1.risk_classification">
                <option></option>
                <option>Red</option>
                <option>Green</option>
                <option>Yellow</option>
                <option>Orange</option>
              </select>
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
      id="pills-profile5"
      role="tabpanel"
      aria-labelledby="pills-profile5"
    >
      <table class="w-100">
        <thead>
          <tr>
            <th>S.no</th>
            <th>Observation</th>
            <th>Observation Type</th>
            <th>Result</th>
            <th>Remarks/Recomandations</th>
            <th>Risk Classification</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(fifth1, index) in fifth" :key="index">
            <td>{{ index + 1 }}</td>
            <td>{{ fifth1.observation }}</td>
            <td>{{ fifth1.observation_type }}</td>
            <td v-if="fifth1.observation_type !== 'Text Type'">
              <select class="w-100" v-model="fifth1.result_type">
                <option></option>
                <option
                  v-for="(option, index) in fifth1.observation_type.split('/')"
                  :key="index"
                  :value="option"
                >
                  {{ option }}
                </option>
              </select>
            </td>
            <td v-if="fifth1.observation_type == 'Text Type'">
              <input
                class="h-25"
                placeholder="Enter remark"
                type="text"
                v-model="fifth1.result_type"
              />
            </td>
            <td>
              <input
                type="text"
                class="h-25"
                placeholder="Enter remarks"
                v-model="fifth1.remarks"
              />
            </td>
            <td>
              <select
                class="w-100"
                name="risk_classification"
                v-model="fifth1.risk_classification"
              >
                <option></option>
                <option value="Red">Red</option>
                <option value="Green">Green</option>
                <option value="Yellow">Yellow</option>
                <option value="Orange">Orange</option>
              </select>
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
      id="Stock-Room1"
      role="tabpanel"
      aria-labelledby="Stock-Room"
    >
      <table class="w-100">
        <thead>
          <tr>
            <th>S.no</th>
            <th>Observation</th>
            <th>Observation Type</th>
            <th>Result</th>
            <th>Remark/Recomandations</th>
            <th>Risk Classification</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(sixth1, index) in sixth" :key="index">
            <td>{{ index + 1 }}</td>
            <td>{{ sixth1.observation }}</td>
            <td>{{ sixth1.observation_type }}</td>
            <td v-if="sixth1.observation_type !== 'Text Type'">
              <select class="w-100" v-model="sixth1.result_type">
                <option></option>
                <option
                  v-for="(option, index) in sixth1.observation_type.split('/')"
                  :key="index"
                  :value="option"
                >
                  {{ option }}
                </option>
              </select>
            </td>
            <td v-if="sixth1.observation_type == 'Text Type'">
              <input
                class="w-100 h-25"
                placeholder="Enter remark"
                type="text"
                v-model="sixth1.result_type"
              />
            </td>
            <td>
              <input
                type="text"
                class="h-25"
                placeholder="Enter remark"
                v-model="sixth1.remarks"
              />
            </td>
            <td>
              <select class="w-100" v-model="sixth1.risk_classification">
                <option></option>
                <option>Red</option>
                <option>Green</option>
                <option>Yellow</option>
                <option>Orange</option>
              </select>
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
      id="pills-profile7"
      role="tabpanel"
      aria-labelledby="pills-profile7"
    >
      <table class="w-100">
        <thead>
          <tr>
            <th>S.no</th>
            <th>Observation</th>
            <th>Observation Type</th>
            <th>Result</th>
            <th>Remarks/Recomandations</th>
            <th>Risk Classification</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(seventh1, index) in seventh" :key="index">
            <td>{{ index + 1 }}</td>
            <td>{{ seventh1.observation }}</td>
            <td>{{ seventh1.observation_type }}</td>
            <td v-if="seventh1.observation_type !== 'Text Type'">
              <select class="w-100" v-model="seventh1.result_type">
                <option></option>
                <option
                  v-for="(option, index) in seventh1.observation_type.split(
                    '/'
                  )"
                  :key="index"
                  :value="option"
                >
                  {{ option }}
                </option>
              </select>
            </td>
            <td v-if="seventh1.observation_type == 'Text Type'">
              <input
                class="w-100 h-25"
                placeholder="Enter remark"
                type="text"
                v-model="seventh1.result_type"
              />
            </td>
            <td>
              <input
                type="text"
                class="h-25"
                placeholder="Enter remarks"
                v-model="seventh1.remarks"
              />
            </td>
            <td>
              <select class="w-100" v-model="seventh1.risk_classification">
                <option></option>
                <option>Red</option>
                <option>Green</option>
                <option>Yellow</option>
                <option>Orange</option>
              </select>
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
      id="pills-home-tab8"
      role="tabpanel"
      aria-labelledby="pills-home-tab5"
    >
      <table class="w-100">
        <thead class="bg-secondary">
          <tr>
            <th>S.no</th>
            <th>Observation</th>
            <th>Observation Type</th>
            <th>Result</th>
            <th>Remark/Recomandations</th>
            <th>Risk Classification</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(seventh1, index) in seventh" :key="index">
            <td>{{ index + 1 }}</td>
            <td>{{ seventh1.observation }}</td>
            <td>{{ seventh1.observation_type }}</td>
            <td v-if="seventh1.observation_type !== 'Text Type'">
              <select class="w-100" v-model="seventh1.result_type">
                <option></option>
                <option
                  v-for="(option, index) in seventh1.observation_type.split(
                    '/'
                  )"
                  :key="index"
                  :value="option"
                >
                  {{ option }}
                </option>
              </select>
            </td>
            <td v-if="seventh1.observation_type == 'Text Type'">
              <input
                class="w-100"
                placeholder="Enter remark"
                type="text"
                v-model="seventh1.result_type"
              />
            </td>
            <td>
              <input
                type="text"
                class="h-25"
                placeholder="Enter remark"
                v-model="seventh1.remarks"
              />
            </td>
            <td>
              <select class="w-100" v-model="seventh1.risk_classification">
                <option></option>
                <option>Red</option>
                <option>Green</option>
                <option>Yellow</option>
                <option>Orange</option>
              </select>
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
      id="pills-profile8"
      role="tabpanel"
      aria-labelledby="pills-home-tab5"
    >
      <table class="w-100">
        <thead>
          <tr>
            <th>S.no</th>
            <th>Observation</th>
            <th>Observation Type</th>
            <th>Result</th>
            <th>Remark/Recomandations</th>
            <th>Risk Classification</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(eight1, index) in eight" :key="index">
            <td>{{ index + 1 }}</td>
            <td>{{ eight1.observation }}</td>
            <td>{{ eight1.observation_type }}</td>
            <td>
              <select class="w-100" v-model="eight1.result_type">
                <option></option>
                <option
                  v-for="(option, index) in eight1.observation_type.split('/')"
                  :key="index"
                  :value="option"
                >
                  {{ option }}
                </option>
              </select>
            </td>
            <td>
              <input
                type="text"
                placeholder="Enter remark"
                v-model="eight1.remarks"
              />
            </td>
            <td>
              <select class="w-100" v-model="eight1.risk_classification">
                <option></option>
                <option>Red</option>
                <option>Green</option>
                <option>Yellow</option>
                <option>Orange</option>
              </select>
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
      id="pills-profile10"
      role="tabpanel"
      aria-labelledby="pills-home-tab5"
    >
      <table class="w-100">
        <thead>
          <tr>
            <th>S.no</th>
            <th>Observation</th>
            <th>Observation Type</th>
            <th>Result</th>
            <th>Remark/Recomandations</th>
            <th>Risk Classification</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(nine1, index) in nine" :key="index">
            <td>{{ index + 1 }}</td>
            <td>{{ nine1.observation }}</td>
            <td>{{ nine1.observation_type }}</td>
            <td>
              <select class="w-100" v-model="nine1.result_type">
                <option></option>
                <option
                  v-for="(option, index) in nine1.observation_type.split('/')"
                  :key="index"
                  :value="option"
                >
                  {{ option }}
                </option>
              </select>
            </td>
            <td>
              <input
                type="text"
                placeholder="Enter remark"
                v-model="nine1.remarks"
              />
            </td>
            <td>
              <select class="w-100" v-model="nine1.risk_classification">
                <option></option>
                <option>Red</option>
                <option>Green</option>
                <option>Yellow</option>
                <option>Orange</option>
              </select>
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
      id="pills-profile11"
      role="tabpanel"
      aria-labelledby="pills-home-tab5"
    >
      <table class="w-100">
        <thead>
          <tr>
            <th>S.no</th>
            <th>Observation</th>
            <th>Observation Type</th>
            <th>Result</th>
            <th>Remark/Recomandations</th>
            <th>Risk Classification</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(tenth, index) in ten" :key="index">
            <td>{{ index + 1 }}</td>
            <td>{{ tenth.observation }}</td>
            <td>{{ tenth.observation_type }}</td>
            <td>
              <select class="w-100" v-model="tenth.result_type">
                <option></option>
                <option
                  v-for="(option, index) in tenth.observation_type.split('/')"
                  :key="index"
                  :value="option"
                >
                  {{ option }}
                </option>
              </select>
            </td>
            <td>
              <input
                type="text"
                placeholder="Enter remark"
                v-model="tenth.remarks"
              />
            </td>
            <td>
              <select class="w-100" v-model="tenth.risk_classification">
                <option></option>
                <option>Red</option>
                <option>Green</option>
                <option>Yellow</option>
                <option>Orange</option>
              </select>
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
      id="pills-profile12"
      role="tabpanel"
      aria-labelledby="pills-home-tab5"
    >
      <table class="w-100">
        <thead>
          <tr>
            <th>S.no</th>
            <th>Observation</th>
            <th>Observation Type</th>
            <th>Result</th>
            <th>Remark/Recomandations</th>
            <th>Risk Classification</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(eleventh, index) in eleven" :key="index">
            <td>{{ index + 1 }}</td>
            <td>{{ eleventh.observation }}</td>
            <td>{{ eleventh.observation_type }}</td>
            <td>
              <select class="w-100" v-model="eleventh.result_type">
                <option></option>
                <option
                  v-for="(option, index) in eleventh.observation_type.split(
                    '/'
                  )"
                  :key="index"
                  :value="option"
                >
                  {{ option }}
                </option>
              </select>
            </td>
            <td>
              <input
                type="text"
                placeholder="Enter remark"
                v-model="eleventh.remarks"
              />
            </td>
            <td>
              <select class="w-100" v-model="eleventh.risk_classification">
                <option></option>
                <option>Red</option>
                <option>Green</option>
                <option>Yellow</option>
                <option>Orange</option>
              </select>
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
      id="pills-profile13"
      role="tabpanel"
      aria-labelledby="pills-home-tab5"
    >
      <table class="w-100">
        <thead>
          <tr>
            <th>S.no</th>
            <th>Observation</th>
            <th>Observation Type</th>
            <th>Result</th>
            <th>Remark/Recomandations</th>
            <th>Risk Classification</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(twevle1, index) in twevle" :key="index">
            <td>{{ index + 1 }}</td>
            <td>{{ twevle1.observation }}</td>
            <td>{{ twevle1.observation_type }}</td>
            <td>
              <select class="w-100" v-model="twevle1.result_type">
                <option></option>
                <option
                  v-for="(option, index) in twevle1.observation_type.split('/')"
                  :key="index"
                  :value="option"
                >
                  {{ option }}
                </option>
              </select>
            </td>
            <td>
              <input
                type="text"
                placeholder="Enter remark"
                v-model="twevle1.remarks"
              />
            </td>
            <td>
              <select class="w-100" v-model="twevle1.risk_classification">
                <option></option>
                <option>Red</option>
                <option>Green</option>
                <option>Yellow</option>
                <option>Orange</option>
              </select>
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
      id="pills-profile14"
      role="tabpanel"
      aria-labelledby="pills-home-tab5"
    >
      <table class="w-100">
        <thead>
          <tr>
            <th>S.no</th>
            <th>Observation</th>
            <th>Observation Type</th>
            <th>Result</th>
            <th>Remark/Recomandations</th>
            <th>Risk Classification</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody class="mt-4">
          <tr v-for="(thirteenth, index) in thirteen" :key="index">
            <td>{{ index + 1 }}</td>
            <td>{{ thirteenth.observation }}</td>
            <td>{{ thirteenth.observation_type }}</td>
            <td v-if="thirteenth.observation_type !== 'Text Type'">
              <select class="w-100" v-model="thirteenth.result_type">
                <option></option>
                <option
                  v-for="(option, index) in thirteenth.observation_type.split(
                    '/'
                  )"
                  :key="index"
                  :value="option"
                >
                  {{ option }}
                </option>
              </select>
            </td>
            <td v-if="thirteenth.observation_type == 'Text Type'">
              <input
                class="w-100"
                type="text"
                v-model="thirteenth.result_type"
              />
            </td>
            <td>
              <input
                type="text"
                placeholder="Enter remark"
                v-model="thirteenth.remarks"
              />
            </td>
            <td>
              <select class="w-100" v-model="thirteenth.risk_classification">
                <option></option>
                <option>Red</option>
                <option>Green</option>
                <option>Yellow</option>
                <option>Orange</option>
              </select>
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
export default {
  data() {
    return {
      data: [],
      item: [],
      data1: [],
      third: [],
      fourth: [],
      fifth: [],
      sixth: [],
      seventh: [],
      eight: [],
      nine: [],
      ten: [],
      eleventh: [],
      twevle: [],
      thirteen: [],
      formDetails: {},
    };
  },
  mounted() {
    this.fetchData();
    this.secondData();
    this.thirdData();
    this.fourthData();
    this.fifthData();
    this.sixthData();
    this.seventhData();
    this.eightData();
    this.ninthData();
    this.tenthData();
    this.eleventhData();
    this.twevle1Data();
    this.thirteenthData();
  },

  methods: {
    async fetchData() {
      const response = await fetch(
        "http://192.168.1.190:8002/api/resource/Audit%20Record%20Details?fields=%22*%22&filters=%7B%22audit_record_id%22:%22AR-2023-00001%22,%22section%22:%22Main%20LT%20Panel%22%7D&limit_page_length=*"
      );
      let res = await response.json();
      this.data = res.data;
      // console.log(this.data);
    },
    async secondData() {
      const response = await fetch(
        "http://192.168.1.190:8002/api/resource/Audit%20Record%20Details?fields=%22*%22&filters=%7B%22audit_record_id%22:%22AR-2023-00001%22,%22section%22:%22Electrical%20DB%E2%80%99s%22%7D&limit_page_length=*"
      );
      let res = await response.json();
      this.data1 = res.data;
      console.log(this.data1);
    },
    async thirdData() {
      const response = await fetch(
        "http://192.168.1.190:8002/api/resource/Audit%20Record%20Details?fields=%22*%22&filters=%7B%22audit_record_id%22:%22AR-2023-00001%22,%22section%22:%22UPS,%20Inverter%26%20Batteries%22%7D&limit_page_length=*"
      );
      let res = await response.json();
      this.third = res.data;
      console.log(this.third);
    },
    async fourthData() {
      const response = await fetch(
        "http://192.168.1.190:8002/api/resource/Audit%20Record%20Details?fields=%22*%22&filters={%22audit_record_id%22:%22AR-2023-00001%22,%22section%22:%22Electrical%20Room%22}&limit_page_length=*"
      );
      let res = await response.json();
      this.fourth = res.data;
      console.log(this.fourth);
    },
    async fifthData() {
      const response = await fetch(
        "http://192.168.1.190:8002/api/resource/Audit%20Record%20Details?fields=%22*%22&filters={%22audit_record_id%22:%22AR-2023-00001%22,%22section%22:%22Billing%20Counter%22}&limit_page_length=*"
      );
      let res = await response.json();
      this.fifth = res.data;
      console.log(this.data);
    },
    async sixthData() {
      const response = await fetch(
        "http://192.168.1.190:8002/api/resource/Audit%20Record%20Details?fields=%22*%22&filters={%22audit_record_id%22:%22AR-2023-00001%22,%22section%22:%22Stock%20Room%22}&limit_page_length=*"
      );
      let res = await response.json();
      this.sixth = res.data;
      console.log(this.sixth);
    },
    async seventhData() {
      const response = await fetch(
        "http://192.168.1.190:8002/api/resource/Audit%20Record%20Details?fields=%22*%22&filters={%22audit_record_id%22:%22AR-2023-00001%22,%22section%22:%22Staff%20Room%22}&limit_page_length=*"
      );
      let res = await response.json();
      this.seventh = res.data;
      console.log(this.seventh);
    },
    async eightData() {
      const response = await fetch(
        "http://192.168.1.190:8002/api/resource/Audit%20Record%20Details?fields=%22*%22&filters={%22audit_record_id%22:%22AR-2023-00001%22,%22section%22:%22Cash%20Office%22}&limit_page_length=*"
      );
      let res = await response.json();
      this.eight = res.data;
      console.log(this.eight);
    },
    async ninthData() {
      const response = await fetch(
        "http://192.168.1.190:8002/api/resource/Audit%20Record%20Details?fields=%22*%22&filters={%22audit_record_id%22:%22AR-2023-00001%22,%22section%22:%22Shop%20Area%22}&limit_page_length=*"
      );
      let res = await response.json();
      this.nine = res.data;
      console.log(this.nine);
    },
    async tenthData() {
      const response = await fetch(
        "http://192.168.1.190:8002/api/resource/Audit%20Record%20Details?fields=%22*%22&filters={%22audit_record_id%22:%22AR-2023-00001%22,%22section%22:%22Fire%20alarm%20System%22}&limit_page_length=*"
      );
      let res = await response.json();
      this.ten = res.data;
      console.log(this.ten);
    },
    async eleventhData() {
      const response = await fetch(
        "http://192.168.1.190:8002/api/resource/Audit%20Record%20Details?fields=%22*%22&filters={%22audit_record_id%22:%22AR-2023-00001%22,%22section%22:%22Smoke%20Detectors%22}&limit_page_length=*"
      );
      let res = await response.json();
      this.eleven = res.data;
      console.log(this.eleven);
    },
    async twevle1Data() {
      const response = await fetch(
        "http://192.168.1.190:8002/api/resource/Audit%20Record%20Details?fields=%22*%22&filters={%22audit_record_id%22:%22AR-2023-00001%22,%22section%22:%22Fire%20Extinguishers%22}&limit_page_length=*"
      );
      let res = await response.json();
      this.twevle = res.data;
      console.log(this.twevle);
    },
    async thirteenthData() {
      const response = await fetch(
        "http://192.168.1.190:8002/api/resource/Audit%20Record%20Details?fields=%22*%22&filters={%22audit_record_id%22:%22AR-2023-00001%22,%22section%22:%22AC%20Units%22}&limit_page_length=*"
      );
      let res = await response.json();
      this.thirteen = res.data;
      console.log(this.thirteen);
    },
    SaveDetails() {
      // alert("Form data Save successfully");
      console.log(
        this.data,
        this.data1,
        this.third,
        this.fourth,
        this.fifth,
        this.sixth,
        this.seventh,
        this.eight,
        this.nine,
        this.ten,
        this.eleventh,
        this.twevle,
        this.thirteen
      );
    },
  },
};
</script>

<style scoped>
.icon-btn {
  width: -webkit-fill-available;
  height: 110px;
  background-color: black;
  position: sticky;
  z-index: 100;
  top: 0px;
}
.text-btn {
  position: sticky;
  z-index: 100;
  top: 40px;
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
  top: 238px;
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
  top: 128px;
}
thead {
  position: sticky;
  z-index: 100;
  top: 287px;
  background-color: rgb(217, 217, 217);
}
tr:hover {
  background-color: rgb(217, 217, 217);
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

.audit-save-btn {
  position: sticky;
  z-index: 100;
  top: 245px;
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

.text-div {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 14vh;
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