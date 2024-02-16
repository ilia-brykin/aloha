import {
  computed,
  h,
  inject,
  ref,
} from "vue";

import ATableHeaderTh from "../../ATableHeaderTh/ATableHeaderTh";
import ATranslation from "../../../ATranslation/ATranslation";

import {
  cloneDeep,
  filter,
  get,
  includes,
  isArray,
  map,
  uniqBy,
} from "lodash-es";

export default function ColumnsGroupedAPI() {
  const columns = cloneDeep(inject("columnsFilteredForRender"));

  const columnsOrderedFromGroups = ref([]);

  const columnsWithIndexedGroups = computed(() => {
    return map(columns.value, column => {
      if (column.group && column.group.length) {
        column.group = map(column.group, (_group, groupIndex) => {
          return [
            _group,
            groupIndex,
          ].join("%%%");
        });
      }

      return column;
    });
  });

  const getRecursiveChildrenForGroup = ({ groups, group, level }) => {
    const foundGroupsForCurrentLevel = group ? filter(groups, _group => {
      return includes(_group, group[level - 1]);
    }) : groups;

    const uniqGroupsForCurrentLevel = uniqBy(foundGroupsForCurrentLevel, _group => _group[level]);

    return map(uniqGroupsForCurrentLevel, _group => {
      const groupObjectToReturn = {
        id: _group[level].split("%%%")[0],
      };

      if (_group.length > level + 1) {
        groupObjectToReturn.children = getRecursiveChildrenForGroup({ groups, group: _group, level: level + 1 });
      } else if (_group.length === level + 1) {
        groupObjectToReturn.columns = filter(columnsWithIndexedGroups.value, column => includes(column.group, _group[level]));
        columnsOrderedFromGroups.value.push(...groupObjectToReturn.columns);
      }

      return groupObjectToReturn;
    });
  };

  const plainGroupsAndColumns = computed(() => {
    return map(columnsWithIndexedGroups.value, column => {
      return get(column, "group", column);
    });
  });
  const onlyGroups = computed(() => {
    return filter(plainGroupsAndColumns.value, group => isArray(group));
  });
  const onlyColumns = computed(() => {
    return filter(plainGroupsAndColumns.value, group => !isArray(group));
  });
  const columnsOrdered = computed(() => {
    return [
      ...columnsOrderedFromGroups.value,
      ...onlyColumns.value,
    ];
  });
  const columnsGrouped = computed(() => {
    return getRecursiveChildrenForGroup({ groups: onlyGroups.value, group: null, level: 0 });
  });

  const getColumnsForRender = cols => {
    return map(cols, (column, columnIndex) => {
      return h(ATableHeaderTh, {
        ref: "th",
        column: column,
        columnIndex: columnIndex,
        class: "a_table__cell__child_group",
        columnGroupIds: column.group,
        hasMultipleActions: false,
      });
    });
  };
  const getRecursiveGroupForRender = cols => {
    return map(cols, col => h("div", {
      class: "a_table__th_group",
    }, [
      h("div", {
        class: "a_table__th_child_group",
      }, [
        h("div", {
          class: "a_table__cell_group",
        }, [
          col.id && h(ATranslation, {
            html: col.id,
            tag: "span",
            "aria-hidden": true,
          }),
        ]),
        h("div", {
          class: "a_table__th_group_container",
        }, col.children ? getRecursiveGroupForRender(col.children) : getColumnsForRender(col.columns)),
      ]),
    ]));
  };
  const renderedGroupedColumns = computed(() => {
    return [
      ...getRecursiveGroupForRender(columnsGrouped.value),
      ...getColumnsForRender(onlyColumns.value),
    ];
  });

  return {
    columnsOrdered,
    renderedGroupedColumns,
  };
}
