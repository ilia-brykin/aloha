import {
  computed,
  h,
  ref,
  toRef,
} from "vue";

import ATableHeaderTh from "../ATableHeaderTh/ATableHeaderTh";
import ATranslation from "../../ATranslation/ATranslation";
import {
  aSortBy,
} from "../../utils/utils";
import {
  isColumnVisibleWithoutModel,
} from "../utils/utils";

import {
  filter,
  get,
  includes,
  isArray,
  map,
  min,
  uniqBy,
} from "lodash-es";

export default function ColumnsGroupedAPI(props, {
  modelSort = ref([]),
}) {
  const columns = toRef(props, "columns");
  const showFirstSortingSequenceNumber = toRef(props, "showFirstSortingSequenceNumber");
  const sortingSequenceNumberClass = toRef(props, "sortingSequenceNumberClass");

  const columnsVisible = computed(() => {
    return filter(columns.value, column => {
      return isColumnVisibleWithoutModel({ column });
    });
  });

  const columnsLocal = computed(() => {
    return map(columnsVisible.value, (column, index) => {
      return {
        ...column,
        _index: column.prio || index,
      };
    });
  });

  const columnsWithIndexedGroups = computed(() => {
    return map(columnsLocal.value, column => {
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

  const getRecursiveChildrenForGroup = ({ groups, group, level, columnsOrderedFromGroups, firstLevelGroupObject }) => {
    const foundGroupsForCurrentLevel = group
? filter(groups, _group => {
  return includes(_group, group[level - 1]);
})
: groups;

    const uniqGroupsForCurrentLevel = uniqBy(foundGroupsForCurrentLevel, _group => _group[level]);

    const recursiveGroup = map(uniqGroupsForCurrentLevel, _group => {
      const groupObjectToReturn = {
        id: _group[level].split("%%%")[0],
      };

      let _firstLevelGroupObject;
      if (level === 0) {
        _firstLevelGroupObject = groupObjectToReturn;
        _firstLevelGroupObject.columnIndexes = [];
      } else {
        _firstLevelGroupObject = firstLevelGroupObject;
      }

      if (_group.length > level + 1) {
        groupObjectToReturn.children = get(
          getRecursiveChildrenForGroup({
            groups,
            group: _group,
            level: level + 1,
            columnsOrderedFromGroups,
            firstLevelGroupObject: _firstLevelGroupObject,
          }),
          "recursiveGroup",
        );
      } else if (_group.length === level + 1) {
        groupObjectToReturn.columns = filter(columnsWithIndexedGroups.value, column => includes(column.group, _group[level]));
        _firstLevelGroupObject.columnIndexes.push(...map(groupObjectToReturn.columns, "_index"));
        columnsOrderedFromGroups.push(...groupObjectToReturn.columns);
      }

      return groupObjectToReturn;
    });

    return {
      columnsOrderedFromGroups,
      recursiveGroup,
    };
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
  const columnsGrouped = computed(() => {
    const columnsOrderedFromGroupsLocal = [];

    return getRecursiveChildrenForGroup({ groups: onlyGroups.value, group: null, level: 0, columnsOrderedFromGroups: columnsOrderedFromGroupsLocal });
  });
  const columnsOrderedFromSimpleTable = computed(() => {
    return aSortBy([
      ...columnsGrouped.value.columnsOrderedFromGroups,
      ...onlyColumns.value,
    ], "_index");
  });

  const getColumnsForRender = col => {
    return h(ATableHeaderTh, {
      ref: "th",
      class: "a_table__cell__child_group",
      column: col,
      columnGroupNames: map(col.group, group => group.split("%%%")[0]),
      columnIndex: col._index,
      hasMultipleActions: false,
      modelSort: modelSort.value,
      showFirstSortingSequenceNumber: showFirstSortingSequenceNumber.value,
      sortingSequenceNumberClass: sortingSequenceNumberClass.value,
    });
  };
  const getRecursiveGroupForRender = group => {
    return h("div", {
      class: "a_table__th_group",
    }, [
      h("div", {
        class: "a_table__th_child_group",
      }, [
        h("div", {
          class: "a_table__cell_group a_text_center",
        }, [
          group.id && h(ATranslation, {
            html: group.id,
            tag: "span",
            "aria-hidden": true,
          }),
        ]),
        h("div", {
          class: "a_table__th_group_container",
        }, group.children ?
          map(group.children, _gr => getRecursiveGroupForRender(_gr)) :
          map(group.columns, _col => getColumnsForRender(_col))),
      ]),
    ]);
  };
  const renderedGroupedColumns = computed(() => {
    const mixedColumnsAndGroups = aSortBy([
      ...columnsGrouped.value.recursiveGroup,
      ...onlyColumns.value,
    ], column => column.columnIndexes ? min(column.columnIndexes) : column._index);

    return map(mixedColumnsAndGroups, column => {
      return column.columnIndexes ? getRecursiveGroupForRender(column) : getColumnsForRender(column);
    });
  });

  return {
    columnsOrderedFromSimpleTable,
    renderedGroupedColumns,
  };
}
