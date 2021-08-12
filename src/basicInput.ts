import { StatusBarAlignment, window, StatusBarItem } from "vscode";
import * as vscode from "vscode";
import { ReadSyncOptions } from "fs";
import { AnyRecordWithTtl } from "dns";

export async function showQuickPick() {
  var firstNewBar = vscode.window.createStatusBarItem(
    StatusBarAlignment.Right,
    1000
  );
  firstNewBar.text = "hello";
  firstNewBar.show();

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

export default interface StatusBarType {
  nowPlayingBar?: StatusBarItem;
}

export class ShowStatusBar implements StatusBarType {
  constructor({ nowPlayingBar }: StatusBarType) {
    if (!nowPlayingBar) {
      let nowPlayingBar = vscode.window.createStatusBarItem(
        StatusBarAlignment.Right,
        1000
      );

      nowPlayingBar.text = "hello";
      nowPlayingBar.show();
    } else {
      nowPlayingBar.text = "not good mate";
    }
  }
}

let obj = {} as ShowStatusBar;

//export object
export { obj as StatusBarType };
