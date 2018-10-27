<template>
  <div class="App o-container o-container--s o-vertical-spacing o-vertical-spacing--xl">
    <h1>Using Location Data with Vue.js and Open Street Map</h1>

    <section class="App__example o-vertical-spacing o-vertical-spacing--l">
      <h2>Address form</h2>

      <location-frame>
        <form
          slot-scope="{
            address,
            error,
            fetchAddress,
            geolocationSupported,
            loading,
          }"
          class="o-vertical-spacing"
        >
          <button
            v-if="geolocationSupported"
            type="button"
            @click="fetchAddress"
          >
            {{ loading ? `Loading ...` : `Autofill my address` }}
          </button>

          <div
            v-if="error"
            class="error"
          >
            There was an error fetching your location, please try again.
          </div>

          <div class="App__form-item">
            <label for="street">Street</label>
            <input
              :value="address.road"
              name="street"
            >
          </div>

          <div class="App__form-item">
            <label for="street_number">Street number</label>
            <input
              :value="address.house_number"
              name="street_number"
            >
          </div>

          <div class="App__form-item">
            <label for="postalcode">Postalcode</label>
            <input
              :value="address.postcode"
              name="postalcode"
            >
          </div>

          <div class="App__form-item">
            <label for="town">Town</label>
            <input
              :value="address.village"
              name="town"
            >
          </div>

          <div class="App__form-item">
            <label for="country">Country</label>
            <input
              :value="address.country"
              name="country"
            >
          </div>

          <button>Submit</button>
        </form>
      </location-frame>
    </section>
  </div>
</template>

<script>
import LocationFrame from './components/LocationFrame';

export default {
  name: `App`,
  components: {
    LocationFrame,
  },
};
</script>

<style lang="scss">
@import './assets/scss/settings/**/*';
@import './assets/scss/generic/**/*';
@import '{
  .o-container,
  .o-container--s,
} from ~@avalanche/object-container';
@import '{
  .o-vertical-spacing,
  .o-vertical-spacing--l,
  .o-vertical-spacing--xl,
} from ~@avalanche/object-vertical-spacing';

.App {
  padding-top: setting-spacing(xl);
  padding-bottom: setting-spacing(xl);

  h1 {
    text-align: center;
  }

  input:not([type="checkbox"]) {
    display: block;
    padding: setting-spacing(s);
    width: 100%;
    border: 1px solid #dedede;
  }

  label {
    display: block;
    color: #444;
    font-weight: 700;
  }
}

.error {
  color: red;
}
</style>
