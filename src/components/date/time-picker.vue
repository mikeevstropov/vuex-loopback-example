<template>

  <!-- Time Picker -->
  <b-form-input
    type="time"
    :value="time"
    @input="input"
    class="time-picker"/>

</template>

<script>

  export default {
    name: 'time-picker',
    props: {
      value: {
        type: String,
        default: '',
      },
    },
    computed: {
      time() {

        if (!this.value)
          return undefined;

        return this.$moment
          .parseZone(this.value)
          .format('HH:mm');
      },
    },
    methods: {
      input(value) {

        let iso = null;

        if (value) {

          const time = this.$moment
            .parseZone(value, 'HH:mm')
            .format('HH:mm:ss.SSS');

          const date = this
            .$moment
            .parseZone(this.value || undefined)
            .format('YYYY-MM-DD');

          iso = `${date}T${time}Z`;
        }

        this.$emit('input', iso);
      },
    },
  };

</script>

<style lang="scss">

  .time-picker {
    flex: 1;

    input {
      min-height: 100%;
    }
  }

</style>
