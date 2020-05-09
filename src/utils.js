export function uuid() {
  return Math.random()
    .toString(16)
    .slice(2);
}

// vuexの変更を検知して、localStorageへ保存
export function saveStatePlugin(store) {
  store.subscribe((mutation, state) =>
    localStorage.setItem("boards", JSON.stringify(state.boards))
  );
}
