import PuxCloak from "../../PuxCloak/PuxCloak.vue";

import HttpMixin from "../../../mixins/HttpMixin";
import UIReadOnlyMixin from "../UIReadOnlyMixin";

import {
  get,
  isNil,
  keyBy,
  map,
} from "lodash-es";

export default {
  components: {
    PuxCloak,
  },
  mixins: [
    HttpMixin,
    UIReadOnlyMixin,
  ],
  watch: {
    model: function(newVal) {
      if (!isNil(newVal) && !this.getElement) {
        this.loadData();
      }
    }
  },
  data() {
    return {
      statusListLoading: undefined,
      localCollection: undefined,
    };
  },
  computed: {
    getCollection() {
      return this.getDataCollectionFromOptions || this.getDataCollection || this.localCollection || this.collection;
    },

    getDataCollectionFromOptions() {
      if (!this.options.data) {
        return undefined;
      }
      return keyBy(this.options.data, this.options.keyId);
    },

    getDataCollection() {
      if (!this.data || !this.data.length) {
        return undefined;
      }
      return keyBy(this.data, this.options.keyId);
    },

    isLoading() {
      return this.statusListLoading || this.options.loading;
    },

    optionsLocal() {
      return this.options;
    },

    notLoadListLocal() {
      return get(this.extraStatic, "notLoadList") || this.options.notLoadList;
    },
  },
  created() {
    this.loadData();
  },
  methods: {
    loadData() {
      if (!this.options.url || this.notLoadListLocal) {
        return;
      }
      this.statusListLoading = true;
      if (this.options.searchGlobal) {
        this.loadWithSearchGlobal();
      } else {
        this.loadWithoutSearchGlobal();
      }
    },

    loadWithSearchGlobal() {
      const PROMISES = [];
      if (this.options.type === "multiselect") {
        PROMISES.push(map(this.model, item => this.getHttp({
          url: this.setUrlWithSearchGlobal({ model: item }),
        })));
      } else {
        if (this.model) {
          PROMISES.push(this.getHttp({
            url: this.setUrlWithSearchGlobal({ model: this.model }),
          }));
        }
      }

      Promise.all(PROMISES).then(
        responses => {
          this.localCollection = keyBy(responses, this.options.keyId);
          this.statusListLoading = false;
        }
      );
    },

    setUrlWithSearchGlobal({ model }) {
      const URL_ARR = this.options.url.split("?");
      return `${ URL_ARR[0] }${ model }/${ URL_ARR[1] ? `?${ URL_ARR[1] }` : "" }`;
    },

    loadWithoutSearchGlobal() {
      this.getListHttp({ url: this.options.url, apiSaveId: this.options.apiSaveId, keyId: this.options.keyId }).then(
        response => {
          this.localCollection = response;
        }
      ).then(
        () => {
          this.statusListLoading = false;
        }
      );
    },
  },
};
