import { ExtensionContext, StatusBarAlignment, window } from "vscode";
//all of this is after that first quick pick menu, specified in extension.ts

let arrString: string[] = ["a", "b", "c"];
//module for next layer of quickpick, using context?? -- do research
export async function showQuickPick() {
  //actually creating the quickpick -- maybe define as a const?
  await window.showQuickPick(
    //below are readonly strings, or "items" in the quickpick menu
    [
      "coffee shop radio // 24/7 lofi hip-hop beats",
      "inner city [lofi / jazzhop / chill beats]",
    ],
    //below are the options for the showQuickPick menu
    {
      placeHolder: "Create new station",
      //when item from above is selected, show a now playing message

      //NEED FIX - Statusbar now SHOWS, but creates more than one instance
      onDidSelectItem: (item) => {
        window.showInformationMessage(`Now playing: ${item}`);
        let etc = item.toString();
        const statusBar = window.createStatusBarItem(
          StatusBarAlignment.Right,
          1000
        );
        statusBar.text = etc;
        if (statusBar.text === etc) {
          statusBar.show();
        } else {
          statusBar.dispose();
        }
      },
    }
  );
}

// inputbox is the second choise in the extension.ts quickpick menu
export async function showInputBox() {
  //create the input box
  await window.showInputBox({
    value: "Add the link to your station",
    placeHolder: "Type a link here",
    //validates text in the input box -- has to include a .com link
    validateInput: (text) => {
      return text.includes("com") ? null : "Has to contain a Youtube link";
    },
  });
}
