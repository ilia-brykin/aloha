import {
  ref,
} from "vue";

import {
  cloneDeep,
} from "lodash-es";

export default function DataKeyByKeyIdAPI() {
  const dataKeyByKeyIdPerFilter = ref({});

  const updateDataKeyByIdFromFilter = ({ dataKeyByKeyId, filterId, }) => {
    dataKeyByKeyIdPerFilter.value[filterId] = cloneDeep(dataKeyByKeyId);
  };

  return {
    dataKeyByKeyIdPerFilter,
    updateDataKeyByIdFromFilter,
  };
}
