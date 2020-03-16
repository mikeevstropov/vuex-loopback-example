<template>

  <!-- Date Picker -->
  <b-form-input
    type="date"
    :value="date"
    @input="input"
    class="date-picker"/>

</template>

<script>

  export default {
    name: 'date-picker',
    props: {
      value: {
        type: String,
        default: '',
      },
    },
    computed: {
      date() {

        if (!this.value)
          return '';

        return this.$moment
          .parseZone(this.value)
          .format('YYYY-MM-DD');
      },
    },
    methods: {
      input(value) {

        let iso = null;

        if (value) {

          const date = this.$moment
            .parseZone(this.value || undefined)
            .format('YYYY-MM-DD');

          const time = this.$moment
            .parseZone(value, 'HH:mm')
            .format('HH:mm:ss.SSS');

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
