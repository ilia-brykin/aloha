<template>
  <div>
    <h1>ABreadcrumb</h1>
    <p>Show how a page fits into the site hierarchy and provide links to its parent pages.</p>

    <h2>Vue Router</h2>
    <ABreadcrumb
      :items="routerItems"
      aria-label="Aloha route hierarchy"
    />

    <h2>HTML links and a custom separator</h2>
    <ABreadcrumb
      :items="htmlItems"
      aria-label="Aloha documentation path"
      separator="/"
    />

    <h2>Usage</h2>
    <p>
      Import <code>ABreadcrumb</code> from <code>aloha-vue</code>. Pass <code>items</code> in order
      from the root to the current page. Each item has a <code>label</code>, an optional stable
      <code>id</code>, and either an <code>href</code> or a Vue Router <code>to</code> destination.
      The last item is the current page and is rendered as text.
    </p>
    <pre><code>&lt;ABreadcrumb :items="[
  { label: 'Home', to: { name: 'PageStart' } },
  { label: 'Getting started', href: '/aloha/quick-start' },
  { label: 'Breadcrumb' }
]" /&gt;</code></pre>
    <p>
      Set <code>aria-label</code> to localize or distinguish the navigation landmark.
      Set <code>separator</code> to customize the decorative separator.
    </p>
  </div>
</template>

<script>
import {
  ABreadcrumb,
} from "aloha-vue";

const ROUTER_ITEMS = [
  { id: "home", label: "Home", to: { name: "PageStart" } },
  { id: "getting-started", label: "Getting started", to: { name: "PageQuickStart" } },
  { id: "breadcrumb", label: "Breadcrumb" },
];

const HTML_ITEMS = [
  { label: "Aloha", href: import.meta.env.BASE_URL },
  { label: "Breadcrumb" },
];

export default {
  name: "PageBreadcrumb",
  components: {
    ABreadcrumb,
  },
  setup() {
    return {
      routerItems: ROUTER_ITEMS,
      htmlItems: HTML_ITEMS,
    };
  },
};
</script>
