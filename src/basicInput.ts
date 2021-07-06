import { isContext } from "vm";
import { StatusBarAlignment, window } from "vscode";

/**
 * Shows a pick list using window.showQuickPick().
 */
export async function showQuickPick() {
  let i = 0;
  const result = await window.showQuickPick(
    [
      "coffee shop radio // 24/7 lofi hip-hop beats",
      "inner city [lofi / jazzhop / chill beats]",
    ],
    {
      placeHolder: "Create new station",
      onDidSelectItem: (item) =>
        window.showInformationMessage(`Now playing: ${item}`),
    }
  );
}

export async function showInputBox() {
  const result = await window.showInputBox({
    value: "Add the link to your station",
    valueSelection: [2, 4],
    placeHolder: "Type a link here",
    //validateInput: (text) => {
    //  if (text === "") return null;
    //},
  });
  //window.showInformationMessage(`Added station`);
}
export async function showStatusBar() {
  const result = window.createStatusBarItem(StatusBarAlignment.Right, 1000);
  result.backgroundColor = "#00AA00";
  result.text = "$(play) coffee shop radio // 24/7 lofi hip-hop beats ";
  result.show();
}
