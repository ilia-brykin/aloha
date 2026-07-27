import AlohaPage from "../../../global/components/AlohaPage/AlohaPage.vue";
import PageTableFormBasic from "./PageTableFormBasic/PageTableFormBasic.vue";
import PageTableFormDND from "./PageTableFormDND/PageTableFormDND.vue";
import PageTableFormEdit from "./PageTableFormEdit/PageTableFormEdit.vue";
import PageTableFormGrow from "./PageTableFormGrow/PageTableFormGrow.vue";
import PageTableFormList from "./PageTableFormList/PageTableFormList.vue";
import PageTableFormSticky from "./PageTableFormSticky/PageTableFormSticky.vue";

import PageTitleAPI from "./compositionAPI/PageTitleAPI";

export default {
  name: "PageTableForm",
  components: {
    AlohaPage,
    PageTableFormBasic,
    PageTableFormDND,
    PageTableFormEdit,
    PageTableFormGrow,
    PageTableFormList,
    PageTableFormSticky,
  },
  setup() {
    const {
      pageTitle,
    } = PageTitleAPI();

    return {
      pageTitle,
    };
  },
};
