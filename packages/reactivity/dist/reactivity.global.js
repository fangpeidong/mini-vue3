var VueReactivity = (() => {
  // packages/shared/src/index.ts
  var isObject = (val) => {
    console.log("isobject");
    return typeof val === "object" && val !== null;
  };

  // packages/reactivity/src/index.ts
  console.log(isObject({ ocunt: 1 }));
})();
//# sourceMappingURL=reactivity.global.js.map
