import Vue from "nativescript-vue";

import Home from "./components/Home";
import CollectionView from "@nativescript-community/ui-collectionview/vue";
Vue.use(CollectionView);
import Cargo from "@nativescript-community/ui-carto/vue";
Vue.use(Cargo);

new Vue({
  render: (h) => h("frame", [h(Home)]),
}).$start();
