<template>
  <div class="main-div">
    <div class="icon-btn align-item-center d-flex justify-content-between ;">
      <div>
        <img
          class="w-50 ms-5 mt-2"
          src="https://www.visionenergy.com/_resources/logos/logo-rev.svg"
        />
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
              ><button class="btn btn-danger ms-4">Log Out</button></router-link
            >
          </li>
        </ul>
      </div>
    </div>
    <div class="text-div">
      <h2 title="Welcome_To_Ener_Vision_.">Welcome_To_Ener_Vision</h2>
    </div>
    <div class="d-flex w-100 mt-4 justify-content-evenly">
      <router-link to="CustomPage">
        <button
          class="btn btn-div w-100 border-0 p-3 ms-5 text-white align-item-center"
        >
          Customer Page
        </button>
      </router-link>

      <router-link to="AuditPage">
        <button
          class="btn btn-div w-100 border-0 p-3 me-5 text-white align-item-center"
        >
          Audit Page
        </button>
      </router-link>
    </div>
  </div>
</template>
<style scoped>
.text-div {
  display: flex;
  justify-content: center;
  align-items: end;
  height: 40vh;
  background-color: #252839;
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
  animation: animate 5s linear infinite;
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
.btn-div {
  background-color: rgb(220, 53, 69);
  width: 15%;
  height: 110px;
  border-radius: 12px;
  font-weight: bold;
  position: relative;
  z-index: 1;
  animation: btn-div ease-in-out 0.9s infinite;
}
.btn-div:hover {
  /* scale: 0.9; */
  transition: (0.9s);
  animation-iteration-count: infinite;
  cursor: pointer;
}
.btn-div::before {
  transition: 0.5s ease-in;
  position: absolute;
  top: 0px;
  left: 50%;
  right: 50%;
  bottom: 0px;
  border-radius: 12px;
  content: "";
  background-color: rgb(48, 48, 84);
}
.btn-div:hover::before {
  transition: 0.5s;
  left: 0;
  right: 0;
  opacity: 1;
  z-index: -1;
}
.main-div {
  background-color: #252839;
  height: 100vh;
}
</style>