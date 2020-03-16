
export default {
  props: {
    options: {
      type: Array,
      default: () => [],
    },
    label: {
      type: [String, Function],
      default: 'title',
    },
    reduce: {
      type: Function,
    },
    placeholder: {
      type: String,
      default: 'выберите значение',
    },
    multiple: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    filterBy(option, _, search) {

      const label = this.getLabel(option);

      return label.toLowerCase().indexOf(
        search.toLowerCase(),
      ) > -1;
    },
    getLabel(option) {

      const label = typeof this.label === 'function'
        ? this.label(option)
        : option[this.label];

      return label || 'Без названия';
    },
  },
}
