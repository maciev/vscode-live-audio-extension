import { StatusBarAlignment, window, StatusBarItem } from "vscode";
import * as vscode from "vscode";

export async function showQuickPick() {
  await window.showQuickPick(
    //below are readonly strings, or "items" in the quickpick menu
    [
      "coffee shop radio // 24/7 lofi hip-hop beats",
      "inner city [lofi / jazzhop / chill beats]",
    ],
    {
      placeHolder: "Create new station",

      //when item from above is selected, show a now playing message
      onDidSelectItem: (item) => {
        //myStatusBarItem.text = etc;

        window.showInformationMessage(`Now playing: ${item}`);
        ShowStatusBar.nowPlayingBar.text = `Now playing: ${item}`;

        // Start scrolling animation
        let scrollAmount = 0;
        setInterval(() => {
          scrollAmount -= 1;
          const text = ShowStatusBar.nowPlayingBar.text;
          ShowStatusBar.nowPlayingBar.text =
            text.slice(scrollAmount) +
            text.slice(0, text.length + scrollAmount);

          // Reset transform when text fully scrolled
          if (scrollAmount <= -text.length) {
            scrollAmount = 0;
          }
        }, 1000);
      },
    }
  );
}

// inputbox is the second choice in the extension.ts quickpick menu
export async function showInputBox() {
  //create the input box
  await window.showInputBox({
    value: "Add the link to your station",
    placeHolder: "Type a link here",
    //validates text in the input box -- has to include a .com link
    validateInput: (text) => {
      return text.includes("com") ? null : "Enter a valid link";
    },
  });
}

//export class ShowStatusBar implements StatusBarType {
//  constructor({ nowPlayingBar }: StatusBarType) {
//    if (!nowPlayingBar) {
//      let nowPlayingBar = vscode.window.createStatusBarItem(
//        StatusBarAlignment.Right,
//        1000
//      );

//      nowPlayingBar.text = "hello";
//      nowPlayingBar.show();
//    } else {
//      nowPlayingBar.text = "not good mate";
//    }
//  }
//}

//let obj = {} as ShowStatusBar;

//export { obj as StatusBarType };
// influence from https://github.com/nickthegroot/vscode-gmusic/blob/master/src/googleMusic.ts
export default class ShowStatusBar {
  public static nowPlayingBar: StatusBarItem;
  public constructor(context: vscode.ExtensionContext) {
    if (!ShowStatusBar.nowPlayingBar) {
      ShowStatusBar.nowPlayingBar = vscode.window.createStatusBarItem(
        StatusBarAlignment.Right,
        1000
      );

      //ShowStatusBar.nowPlayingBar.text = "hello";
      ShowStatusBar.nowPlayingBar.show();
      context.globalState.update(
        "new bar who dis",
        ShowStatusBar.nowPlayingBar
      );
    }
  }
}
