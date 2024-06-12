// eventBus.js
import { reactive } from 'vue';

const EventBus = reactive({
  events: {},
  emit(event, data) {
    if (this.events[event]) {
      this.events[event].forEach(callback => callback(data));
    }
  },
  on(event, callback) {
    if (!this.events[event]) {
      this.events[event] = [];
    }
    this.events[event].push(callback);
  }
});

export default EventBus;