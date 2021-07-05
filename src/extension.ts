"use strict";

import { createRequire } from "module";
import * as vscode from "vscode";
import { Memento } from "vscode";

//export class LocalStorageService {
//  constructor(private storage: Memento) {}

//  public getValue<T>(key: string): T {
//    return this.storage.get<T>(key, null as any);
//  }

//  public setValue<T>(key: string, value: T) {
//    this.storage.update(key, value);
//  }
//}

interface MusicAddItem extends vscode.QuickPickItem {
  label: string;
}

export function activate({ subscriptions }: vscode.ExtensionContext): any {
  //some notes - vscode memento, uri, globalstate, vscode quickpick menu

  const myCommandId = "vstodo.helloWorld";
  subscriptions.push(
    vscode.commands.registerCommand(myCommandId, () => {
      //var  inputBox = vscode.window.createQuickPick<MusicAddItem>();
      vscode.window.createQuickPick(items);
      //event listener here -> change first label

      var labels = [
        { label: "coffee shop radio // 24/7 lofi hip-hop beats" },
        { label: "inner city [lofi / jazzhop / chill beats]" },
      ];
      let items = labels.map((item) => item.label);
    })
  );
}

// click to bring up ctrl shift p search box
//input box to save youtube link to shortcut menu
//saved to some type of local storage?
//dialog box with 3 predefined options (AKA links to youtube videos)
// on option selection, change primary title (in status bar)
// load live youtube audio from windows player??
