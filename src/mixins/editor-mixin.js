
export default {
  props: ['value'],
  methods: {
    input(value) {

      this.$emit('input', value);
    },
  },
};
