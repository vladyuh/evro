<template>
  <div class="appoint-page">
    <div class="top-bar">
      <div class="container">
        <div class="top-bar__back" v-show="activeStep!==0" v-on:click="activeStep=moveBack(activeStep)">
          <svg width="28" height="28">
            <use xlink:href="/img/sprites/sprite.svg#icon_chevron_left_small_border"></use>
          </svg>
        </div>
        <div class="top-bar__title">{{ showTitle(activeStep) }}</div>
        <div class="top-bar__close" v-on:click="activeStep=0">
          <svg width="28" height="28">
            <use xlink:href="/img/sprites/sprite.svg#icon_x_small_border"></use>
          </svg>
        </div>
      </div>
    </div>
    <div class="appointment-block__steps">
      <div class="appointment-block" v-show="activeStep===0">
        <div class="container">
          <div class="appointment-block__items">
            <div class="appointment-block__item appointment-block__item--service" v-on:click="activeStep=1">
              <div class="icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 6H21" stroke="#0088CC" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M8 12H21" stroke="#0088CC" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M8 18H21" stroke="#0088CC" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M3 6H3.01" stroke="#0088CC" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M3 12H3.01" stroke="#0088CC" stroke-width="2" stroke-linecap="round"
                        stroke-linejoin="round"/>
                  <path d="M3 18H3.01" stroke="#0088CC" stroke-width="2" stroke-linecap="round"
                        stroke-linejoin="round"/>
                </svg>
              </div>
              <div class="caption" v-show="!serviceSelected.length">Выбрать услугу</div>
              <div class="caption" v-show="serviceSelected.length">
                <div class="caption-title">{{ serviceSelected }}</div>
                <div class="caption-desc" v-if="serviceChosen.length===0">Выберите услугу</div>
                <div class="caption-desc" v-if="serviceChosen.length!==0">{{ serviceChosen }}</div>
              </div>
            </div>
            <div class="appointment-block__item appointment-block__item--doctor" v-on:click="activeStep=3">
              <div class="icon"
                   v-bind:style="doctorChosen.length ? { 'background-image': 'url(' + getDoctor(doctorChosen,'image') + ')' } : { 'background-image': 'none' }">
                <svg v-show="!doctorChosen.length" width="24" height="24" viewBox="0 0 24 24" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                  <path
                      d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21"
                      stroke="#0088CC" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path
                      d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z"
                      stroke="#0088CC" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path
                      d="M23 20.9999V18.9999C22.9993 18.1136 22.7044 17.2527 22.1614 16.5522C21.6184 15.8517 20.8581 15.3515 20 15.1299"
                      stroke="#0088CC" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path
                      d="M16 3.12988C16.8604 3.35018 17.623 3.85058 18.1676 4.55219C18.7122 5.2538 19.0078 6.11671 19.0078 7.00488C19.0078 7.89305 18.7122 8.75596 18.1676 9.45757C17.623 10.1592 16.8604 10.6596 16 10.8799"
                      stroke="#0088CC" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
              <div class="caption" v-show="!doctorChosen.length">Выбрать врача</div>
              <div class="caption" v-show="doctorChosen.length">
                <div class="caption-title">{{ getDoctor(doctorChosen, 'name') }}</div>
                <div class="caption-desc">{{ getDoctor(doctorChosen, 'job') }}</div>
              </div>
            </div>
            <div class="appointment-block__item appointment-block__item--date" v-on:click="activeStep=4">
              <div class="icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                      d="M19 4H5C3.89543 4 3 4.89543 3 6V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V6C21 4.89543 20.1046 4 19 4Z"
                      stroke="#0088CC" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M16 2V6" stroke="#0088CC" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M8 2V6" stroke="#0088CC" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M3 10H21" stroke="#0088CC" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
              <div class="caption">Выбрать дату и время</div>
            </div>
          </div>
        </div>
      </div>
      <div class="appointment-block" v-show="activeStep===1">
        <div class="container">
          <div class="appointment-block__directions" v-if="!doctorChosen.length">
            <div class="appointment-block__direction" v-for="(item, i) in services" :key="i">
              <label>{{ item.name }}
                <input type="radio" v-bind:value="item.name" v-model="serviceSelected" v-on:click="activeStep=2"
                       name="direction"/>
              </label>
            </div>
          </div>
          <div class="appointment-block__directions" v-if="doctorChosen.length">
            <div class="appointment-block__direction" v-for="(item, i) in filteredServices" :key="i">
              <label>{{ item.name }}
                <input type="radio" v-bind:value="item.name" v-model="serviceSelected" v-on:click="activeStep=2"
                       name="direction"/>
              </label>
            </div>
          </div>
        </div>
      </div>
      <div class="appointment-block" v-show="activeStep===2">
        <div class="container">
          <div class="appointment-block__services">
            <div class="appointment-block__service" v-for="(item, i) in getServiceItems(serviceSelected)" :key="i">
              <label>{{ item }}
                <input type="radio" v-bind:value="item" v-model="serviceChosen" v-on:click="activeStep=0"
                       name="service"/>
              </label>
            </div>
          </div>
        </div>
      </div>
      <div class="appointment-block" v-show="activeStep===3">
        <div class="container">
          <div class="appointment-block__doctors doctors-block__items" v-if="serviceSelected.length">
            <div class="doctors-block__item" v-for="(item, i) in filteredItems" :key="i">
              <label class="text">
                <div class="text-name">{{ item.name }}</div>
                <div class="text-caption">{{ item.job }}</div>
                <input type="radio" name="doctor" v-bind:value="item.name" v-model="doctorChosen"
                       v-on:click="activeStep=0"/>
              </label>
              <div class="image"><img class="lazyload" loading="lazy" v-bind:src="item.image" width="80" height="104"/>
              </div>
            </div>
          </div>
          <div class="appointment-block__doctors doctors-block__items" v-if="!serviceSelected.length">
            <div class="doctors-block__item" v-for="(item, i) in doctors" :key="i">
              <label class="text">
                <div class="text-name">{{ item.name }}</div>
                <div class="text-caption">{{ item.job }}</div>
                <input type="radio" name="doctor" v-bind:value="item.name" v-model="doctorChosen"
                       v-on:click="activeStep=0"/>
              </label>
              <div class="image"><img class="lazyload" loading="lazy" v-bind:src="item.image" width="80" height="104"/>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="appointment-block" v-show="activeStep===4">
        <div class="container">
          <div class="appointment-block__date">
            <div class="appointment-block__datepicker">
              <FunctionalCalendar v-model="calendarData" :configs="calendarConfigs" v-on:dayClicked="dayClicked($event)"></FunctionalCalendar>
            </div>
            <div class="appointment-block__time">
              <label class="item">07:45
                <input type="radio" name="time" value="07:45"/>
              </label>
              <label class="item">18:50
                <input type="radio" name="time" value="18:50"/>
              </label>
              <label class="item">19:10
                <input type="radio" name="time" value="19:10"/>
              </label>
            </div>
            <div class="appointment-block__choose">
              <div class="btn btn-cyan">Выбрать время приема</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {FunctionalCalendar} from 'vue-functional-calendar';

export default {
  name: 'AppointmentBlock',
  components: {
    FunctionalCalendar
  },
  data: function () {
    return {
      activeStep: 0,
      steps: [
        {
          id: 0,
          title: "Запись на прием",
          backIndex: 0,
        },
        {
          id: 1,
          title: "Направление",
          backIndex: 0,
        },
        {
          id: 2,
          title: "Услуга",
          backIndex: 1,
        },
        {
          id: 3,
          title: "Врач",
          backIndex: 0,
        },
        {
          id: 4,
          title: "Дата и время приема",
          backIndex: 0,
        }
      ],
      services: [
        {
          id: 0,
          name: "Гастроэнтерология",
          items: ["Гастроэнтерология 1 1", "Гастроэнтерология 1 2"],
        },
        {
          id: 1,
          name: "Гинекология",
          items: [
            "Кардиотокограмма плода",
            "Первичный прием врача-акушера-гинеколога (детский)",
            "Первичный прием врача-акушера-гинеколога с осмотром на гинекологическом кресле",
            "Первичный прием врача-акушера-гинеколога без осмотра на гинекологическом кресле",
            "Повторный прием врача-акушера-гинеколога с осмотром на гинекологическом кресле",
            "Повторный прием врача-акушера-гинеколога без осмотра на гинекологическом кресле"
          ],
        }
      ],
      doctors: [
        {
          id: 0,
          serviceId: 0,
          name: "Подольская Елена Олеговна",
          job: "Врач-гастроэнтеролог",
          image: "/img/common/dc-2.jpg",
          dates: [
            {
              date: '29/6/2022',
              time: ['08:15', '09:15']
            },
            {
              date: '30/6/2022',
              time: ['10:15', '12:15']
            }
          ]
        },
        {
          id: 1,
          serviceId: 1,
          name: "Басенко Татьяна Валерьевна",
          job: "Врач акушер-гинеколог",
          image: "/img/common/dc-8.jpg",
          dates: [
            {
              date: '29/6/2022',
              time: ['08:15', '09:15']
            },
            {
              date: '30/6/2022',
              time: ['10:15', '12:15']
            }
          ]
        },
        {
          id: 2,
          serviceId: 1,
          name: "Ломаченко Мария Викторовна",
          job: "Врач акушер-гинеколог",
          image: "/img/common/doc-9.jpg",
          dates: [
            {
              date: '29/6/2022',
              time: ['08:15', '09:15']
            },
            {
              date: '30/6/2022',
              time: ['10:15', '12:15']
            }
          ]
        },
        {
          id: 3,
          serviceId: 1,
          name: "Ивашкевич Надежда Владимировна",
          job: "Врач акушер-гинеколог",
          image: "/img/common/doc-10.jpg",
          dates: [
            {
              date: '29/6/2022',
              time: ['08:15', '09:15']
            },
            {
              date: '30/6/2022',
              time: ['10:15', '12:15']
            }
          ]
        }
      ],
      serviceSelected: [],
      serviceChosen: [],
      doctorChosen: [],
      calendarData: {},
      calendarConfigs: {
        sundayStart: false,
        dateFormat: 'dd/mm/yyyy',
        isDatePicker: false,
        isDateRange: false,
        enabledDates: [],
      },
    }
  },
  methods: {
    showTitle: function (index) {
      return this.steps[index].title
    },
    moveBack: function (index) {
      return this.steps[index].backIndex
    },
    getServiceById: function (name) {
      if (this.serviceSelected.length) {
        let result = this.services.find(function (item) {
          return item.name === name
        })
        return result.id
      }
    },
    getServiceItems: function (id) {
      if (this.serviceSelected.length) {
        let result = this.services.find(function (item) {
          return item.name === id
        })
        return result.items
      }
    },
    getDoctor: function (id, key) {
      if (this.doctorChosen.length) {
        let result = this.doctors.find(function (item) {
          return item.name === id
        })
        return result[key]
      }
    },
    dayClicked: function (event){
      console.log(event)
    }
  },
  watch: {
    serviceSelected: function () {
      this.serviceChosen = []
    },
    doctorChosen: function (){
      let doc = this.getDoctor(this.doctorChosen,'dates');
      doc.forEach( (el) => {
        this.calendarConfigs.enabledDates.push(el.date)
      })
    }
  },
  computed: {
    filteredItems() {
      return this.doctors.filter((item) => {
        return item.serviceId === this.getServiceById(this.serviceSelected)
      });
    },
    filteredServices() {
      return this.services.filter((item) => {
        return item.id === this.getDoctor(this.doctorChosen, 'serviceId')
      });
    },
  },
  mounted() {
  }
}
</script>

<style lang="scss">
</style>