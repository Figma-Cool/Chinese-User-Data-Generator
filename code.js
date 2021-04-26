figma.showUI(__html__, { width: 250, height: 300 });
figma.root.setRelaunchData({ open: "" });

let selectionArr = figma.currentPage.selection;
figma.ui.postMessage({
  selectionArr: figma.currentPage.selection.length,
});

figma.on("selectionchange", () => {
  selectionArr = [];
  if (figma.currentPage.selection.length > 0) {
    selectionArr = [];
    selectionArr = figma.currentPage.selection;
    figma.ui.postMessage({
      selectionArr: selectionArr.length,
    });
  }
});

figma.ui.onmessage = (msg) => {
  async function nodeFont(nodeItem, index) {
    await figma.loadFontAsync(nodeItem.fontName);
    msg.name ? (nodeItem.characters = msg.name[index]) : null;
    msg.age ? (nodeItem.characters = msg.age[index]) : null;
    msg.gender ? (nodeItem.characters = msg.gender[index]) : null;
    msg.address ? (nodeItem.characters = msg.address[index]) : null;
    msg.job ? (nodeItem.characters = msg.job[index]) : null;
    msg.phone ? (nodeItem.characters = msg.phone[index]) : null;
    msg.mail ? (nodeItem.characters = msg.mail[index]) : null;
    msg.province ? (nodeItem.characters = msg.province[index]) : null;
    msg.city ? (nodeItem.characters = msg.city[index]) : null;
    msg.id ? (nodeItem.characters = msg.id[index]) : null;
    msg.text ? (nodeItem.characters = msg.text[index]) : null;
  }

  selectionArr.forEach((item, index) => {
    nodeFont(item, index);
  });
};
