import {
  provide,
} from "vue";

import {
  AModelDependenciesInjection,
} from "../const/UiInjectionKeys";

export default function UiModelDependenciesProvideAPI(modelDependencies) {
  provide(AModelDependenciesInjection, modelDependencies);
}
