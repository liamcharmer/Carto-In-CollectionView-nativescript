<template>
  <Page>
    <ActionBar>
      <Label text="Home" />
    </ActionBar>

    <GridLayout>
      <CollectionView
        :items="items"
        @itemTap="onItemTap"
        @loadMoreItems="onLoadMoreItems"
        itemIdGenerator="index"
        colWidth="100%"
        reorderEnabled="true"
        height="100%"
        @loaded="onCollectionViewLoaded"
      >
        <v-template>
          <FlexboxLayout flexDirection="column">
            <CartoMap
              :ref="`map-${item.name}`"
              height="300px"
              zoom="12"
              width="100%"
              marginBottom="50"
              @mapReady="onMapReady"
              focusPos="45.19199, 5.7190"
            />
            <MapView
              lat="45.19199"
              height="300px"
              width="100%"
              lng="5.7190"
              @ready="onReady"
              @mapTap="onTap"
              @mapLongPress="onLongPress"
              @markerTap="onMarkerTap"
            />
          </FlexboxLayout>
        </v-template>
      </CollectionView>
    </GridLayout>
  </Page>
</template>

<script>
import { LocalVectorDataSource } from "@nativescript-community/ui-carto/datasources/vector";
import { VectorLayer } from "@nativescript-community/ui-carto/layers/vector";

import { HTTPTileDataSource } from "@nativescript-community/ui-carto/datasources/http";
import { RasterTileLayer } from "@nativescript-community/ui-carto/layers/raster";
export default {
  computed: {
    message() {
      return "Blank {N}-Vue app";
    },
  },
  methods: {
    onMapReady(e) {
      const mapView = e.object;
      mapView.setFocusPos({ longitude: 6, latitude: 45 }, 0);
      const dataSource = new HTTPTileDataSource({
        minZoom: 0,
        maxZoom: 22,
        subdomains: "abc",
        url: "http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      });
      const rasterLayer = new RasterTileLayer({
        dataSource,
        zoomLevelBias: 1,
      });
      mapView.addLayer(rasterLayer);
    },
  },
  data() {
    return {
      items: [
        {
          name: "test",
          else: "something",
        },
        {
          name: "test1",
          else: "something",
        },
        {
          name: "test2",
          else: "something",
        },
        {
          name: "test3",
          else: "something",
        },
        {
          name: "test4",
          else: "something",
        },
      ],
    };
  },
};
</script>

<style scoped lang="scss">
@import "@nativescript/theme/scss/variables/blue";

// Custom styles
.fas {
  @include colorize($color: accent);
}

.info {
  font-size: 20;
  horizontal-align: center;
  vertical-align: center;
}
</style>
