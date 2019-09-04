(function(){/* Generated from https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key/Key_Values using:
code = ["window.KeyGroups = {"];
for (var header of document.querySelectorAll("article h2")) {
  var group = header.firstChild.textContent.split(' ').slice(0,-1).map((w) => w[0].toUpperCase() + w.substr(1)).join("");
  var table = document.querySelector("h2#" + header.id + " ~ table");
  var keys  = table.querySelectorAll("td:first-child code");
  if (group == "Modifier") {
    keys.push("OS"); // https://bugzilla.mozilla.org/show_bug.cgi?id=1232918
  }
  code.push("  " + group + ": [");
  for (var key of keys) {
    code.push('    ' + key.textContent + ',');
  }
  code.push("  ],")
  code.push("")
}
code.push("}")
console.log(code.join("\n"))
*/

window.KeyGroups = {
  Special: [
    "Unidentified",
  ],

  Modifier: [
    "Alt",
    "AltGraph",
    "CapsLock",
    "Control",
    "Fn",
    "FnLock",
    "Hyper",
    "Meta",
    "NumLock",
    "ScrollLock",
    "Shift",
    "Super",
    "Symbol",
    "SymbolLock",
    "OS",
  ],

  Whitespace: [
    "Enter",
    "Tab",
    " ",
  ],

  Navigation: [
    "ArrowDown",
    "ArrowLeft",
    "ArrowRight",
    "ArrowUp",
    "End",
    "Home",
    "PageDown",
    "PageUp",
  ],

  Editing: [
    "Backspace",
    "Clear",
    "Copy",
    "CrSel",
    "Cut",
    "Delete",
    "EraseEof",
    "ExSel",
    "Insert",
    "Paste",
    "Redo",
    "Undo",
  ],

  UI: [
    "Accept",
    "Again",
    "Attn",
    "Cancel",
    "ContextMenu",
    "Escape",
    "Execute",
    "Find",
    "Finish",
    "Help",
    "Pause",
    "Play",
    "Props",
    "Select",
    "ZoomIn",
    "ZoomOut",
  ],

  Device: [
    "BrightnessDown",
    "BrightnessUp",
    "Eject",
    "LogOff",
    "Power",
    "PowerOff",
    "PrintScreen",
    "Hibernate",
    "Standby",
    "WakeUp",
  ],

  IMEAndComposition: [
    "AllCandidates",
    "Alphanumeric",
    "CodeInput",
    "Compose",
    "Convert",
    "Dead",
    "FinalMode",
    "GroupFirst",
    "GroupLast",
    "GroupNext",
    "GroupPrevious",
    "ModeChange",
    "NextCandidate",
    "NonConvert",
    "PreviousCandidate",
    "Process",
    "SingleCandidate",
  ],

  Function: [
    "F1",
    "F2",
    "F3",
    "F4",
    "F5",
    "F6",
    "F7",
    "F8",
    "F9",
    "F10",
    "F11",
    "F12",
    "F13",
    "F14",
    "F15",
    "F16",
    "F17",
    "F18",
    "F19",
    "F20",
    "Soft1",
    "Soft2",
    "Soft3",
    "Soft4",
  ],

  Phone: [
    "AppSwitch",
    "Call",
    "Camera",
    "CameraFocus",
    "EndCall",
    "GoBack",
    "GoHome",
    "HeadsetHook",
    "LastNumberRedial",
    "Notification",
    "MannerMode",
    "VoiceDial",
  ],

  Multimedia: [
    "ChannelDown",
    "ChannelUp",
    "MediaFastForward",
    "MediaPause",
    "MediaPlay",
    "MediaPlayPause",
    "MediaRecord",
    "MediaRewind",
    "MediaStop",
    "MediaTrackNext",
    "MediaTrackPrevious",
  ],

  AudioControl: [
    "AudioBalanceLeft",
    "AudioBalanceRight",
    "AudioBassDown",
    "AudioBassBoostDown",
    "AudioBassBoostToggle",
    "AudioBassBoostUp",
    "AudioBassUp",
    "AudioFaderFront",
    "AudioFaderRear",
    "AudioSurroundModeNext",
    "AudioTrebleDown",
    "AudioTrebleUp",
    "AudioVolumeDown" [1],
    "AudioVolumeMute" [1],
    "AudioVolumeUp" [1],
    "MicrophoneToggle",
    "MicrophoneVolumeDown",
    "MicrophoneVolumeMute",
    "MicrophoneVolumeUp",
  ],

  TVControl: [
    "TV",
    "TV3DMode",
    "TVAntennaCable",
    "TVAudioDescription",
    "TVAudioDescriptionMixDown",
    "TVAudioDescriptionMixUp",
    "TVContentsMenu",
    "TVDataService",
    "TVInput",
    "TVInputComponent1",
    "TVInputComponent2",
    "TVInputComposite1",
    "TVInputComposite2",
    "TVInputHDMI1",
    "TVInputHDMI2",
    "TVInputHDMI3",
    "TVInputHDMI4",
    "TVInputVGA1",
    "TVMediaContext",
    "TVNetwork",
    "TVNumberEntry",
    "TVPower",
    "TVRadioService",
    "TVSatellite",
    "TVSatelliteBS",
    "TVSatelliteCS",
    "TVSatelliteToggle",
    "TVTerrestrialAnalog",
    "TVTerrestrialDigital",
    "TVTimer",
  ],

  MediaController: [
    "AVRInput",
    "AVRPower",
    "ColorF0Red",
    "ColorF1Green",
    "ColorF2Yellow",
    "ColorF3Blue",
    "ColorF4Grey",
    "ColorF5Brown",
    "ClosedCaptionToggle",
    "Dimmer",
    "DisplaySwap",
    "DVR",
    "Exit",
    "FavoriteClear0",
    "FavoriteClear1",
    "FavoriteClear2",
    "FavoriteClear3",
    "FavoriteRecall0",
    "FavoriteRecall1",
    "FavoriteRecall2",
    "FavoriteRecall3",
    "FavoriteStore0",
    "FavoriteStore1",
    "FavoriteStore2",
    "FavoriteStore3",
    "Guide",
    "GuideNextDay",
    "GuidePreviousDay",
    "Info",
    "InstantReplay",
    "Link",
    "ListProgram",
    "LiveContent",
    "Lock",
    "MediaApps",
    "MediaAudioTrack",
    "MediaLast",
    "MediaSkipBackward",
    "MediaSkipForward",
    "MediaStepBackward",
    "MediaStepForward",
    "MediaTopMenu",
    "NavigateIn",
    "NavigateNext",
    "NavigateOut",
    "NavigatePrevious",
    "NextFavoriteChannel",
    "NextUserProfile",
    "OnDemand",
    "Pairing",
    "PinPDown",
    "PinPMove",
    "PinPToggle",
    "PinPUp",
    "PlaySpeedDown",
    "PlaySpeedReset",
    "PlaySpeedUp",
    "RandomToggle",
    "RcLowBattery",
    "RecordSpeedNext",
    "RfBypass",
    "ScanChannelsToggle",
    "ScreenModeNext",
    "Settings",
    "SplitScreenToggle",
    "STBInput",
    "STBPower",
    "Subtitle",
    "Teletext",
    "VideoModeNext",
    "Wink",
    "ZoomToggle",
  ],

  SpeechRecognition: [
    "SpeechCorrectionList",
    "SpeechInputToggle",
  ],

  Document: [
    "Close",
    "New",
    "Open",
    "Print",
    "Save",
    "SpellCheck",
    "MailForward",
    "MailReply",
    "MailSend",
  ],

  ApplicationSelector: [
    "LaunchCalculator",
    "LaunchCalendar",
    "LaunchContacts",
    "LaunchMail",
    "LaunchMediaPlayer",
    "LaunchMusicPlayer",
    "LaunchMyComputer",
    "LaunchPhone",
    "LaunchScreenSaver",
    "LaunchSpreadsheet",
    "LaunchWebBrowser",
    "LaunchWebCam",
    "LaunchWordProcessor",
    "LaunchApplication1",
    "LaunchApplication2",
    "LaunchApplication3",
    "LaunchApplication4",
    "LaunchApplication5",
    "LaunchApplication6",
    "LaunchApplication7",
    "LaunchApplication8",
    "LaunchApplication9",
    "LaunchApplication10",
    "LaunchApplication11",
    "LaunchApplication12",
    "LaunchApplication13",
    "LaunchApplication14",
    "LaunchApplication15",
    "LaunchApplication16",
  ],

  BrowserControl: [
    "BrowserBack",
    "BrowserFavorites",
    "BrowserForward",
    "BrowserHome",
    "BrowserRefresh",
    "BrowserSearch",
    "BrowserStop",
  ],

  NumericKeypad: [
    "Decimal",
    "Key11",
    "Key12",
    "Multiply",
    "Add",
    "Clear",
    "Divide",
    "Subtract",
    "Separator",
  ],
}
})();
  window.addEventListener("load", function() {
    const CellSelectedClassName = "selected";
    const CellSelectedBottomClassName = "bottom";
    const CellSelectedTopClassName = "top";
    const CellSelectedLeftClassName = "left";
    const CellSelectedRightClassName = "right";
    const CellSelectedFocusClassName = "focus";
    const CellSelectedClasses = [
      CellSelectedClassName,
      CellSelectedFocusClassName,
      CellSelectedBottomClassName,
      CellSelectedTopClassName,
      CellSelectedLeftClassName,
      CellSelectedRightClassName
    ];

    // From waffle.scm
    const InputElementsSelector = "input, button, select, textarea, xmlarea, isindex";

    // https://stackoverflow.com/a/30753870/3729369
    const FocusableElementsXPaths = [
      "a[@href]",
      "area[@href]",
      "input",
      "select",
      "textarea",
      "button",
      "iframe",
      "*[@tabindex]",
      "*[@contentEditable=true]"
    ].map(x => x + "[not(@tabindex='-1')]")

    const FocusableElementsOutsideTable = FocusableElementsXPaths
      .map(x => "//" + x + "[not(ancestor::table[contains(@class, 'register')])]")
      .join("|")  ;

    let EventState = class {
      constructor(name) {
        this.name = name;
        this.events = [];
      }

      enter(element) {
        console.debug(element.nodeName + ": entering " + this.name + " mode");
        for (var event of this.events) {
          console.debug("\tAdd " + event.handler.name + " as handler for " + event.name);
          element.addEventListener(event.name, event.handler);
        }
      }

      leave(element) {
        console.debug(element.nodeName + ": leaving " + this.name + " mode");
        for (var event of this.events) {
          console.debug("\tRemove " + event.handler.name + " as handler for " + event.name);
          element.removeEventListener(event.name, event.handler);
        }
      }

      addEvent(name, handler) {
        this.events.push({name: name, handler: handler});
      }
    }

    let DocumentSelectMode = new EventState("select");
    let DocumentEditMode = new EventState("edit");
    let DocumentUnfocusedMode = new EventState("unfocused");

    let CellRef = class {
      constructor(element) {
        this.node = element.closest("td, th");
        this.col = this.node.cellIndex;
        this.row = this.node.parentElement.rowIndex;
        this.table = this.node.closest("table");
      };

      get left()  { return CellRef.fromCoords(this.table, this.row + 0, this.col - 1); }
      get right() { return CellRef.fromCoords(this.table, this.row + 0, this.col + 1); }
      get above() { return CellRef.fromCoords(this.table, this.row - 1, this.col + 0); }
      get below() { return CellRef.fromCoords(this.table, this.row + 1, this.col + 0); }

      static fromCoords(table, row, col) {
        if (row < 0 || table.rows.length <= row) {
          console.error("tried to get cell at row " + row + " but rows go from 0 to " + (table.rows.length - 1));
          return null;
        } else if (col < 0 || table.rows[row].cells.length <= col) {
          console.error("tried to get cell at col " + col + " but cols go from 0 to " + (table.rows[row].cells.length - 1));
          return null;
        } else {
          return new CellRef(table.rows[row].cells[col]);
        }
      }
    }

    let TableSelection = class {
      constructor(startCell, endCell) {
        this.startCell = startCell;
        this.endCell = (endCell === undefined) ? startCell : endCell;
      }

      get table()    { return this.endCell.table; }
      get focus()    { return this.startCell; }
      get rowStart() { return Math.min(this.startCell.row, this.endCell.row); }
      get rowEnd()   { return Math.max(this.startCell.row, this.endCell.row); }
      get colStart() { return Math.min(this.startCell.col, this.endCell.col); }
      get colEnd()   { return Math.max(this.startCell.col, this.endCell.col); }

      getRangeOfCells(rowStart, rowEnd, colStart, colEnd) {
        var cells = new Array();
        for (var row = rowStart; row <= rowEnd; row++) {
          for (var col = colStart; col <= colEnd; col++) {
            cells.push(CellRef.fromCoords(this.table, row, col));
          }
        }
        return cells;
      }

      get cells() { return this.getRangeOfCells(this.rowStart, this.rowEnd, this.colStart, this.colEnd); }
      get topCells() { return this.getRangeOfCells(this.rowStart, this.rowStart, this.colStart, this.colEnd); }
      get bottomCells() { return this.getRangeOfCells(this.rowEnd, this.rowEnd, this.colStart, this.colEnd); }
      get leftCells() { return this.getRangeOfCells(this.rowStart, this.rowEnd, this.colStart, this.colStart); }
      get rightCells() { return this.getRangeOfCells(this.rowStart, this.rowEnd, this.colEnd, this.colEnd); }

      get rows() {
        var rows = [];
        for (var row = this.rowStart; row <= this.rowEnd; row++) {
          var rowCells = this.getRangeOfCells(row, row, this.colStart, this.colEnd);
          rows.push(new TableSelection(rowCells[0], rowCells[rowCells.length - 1]));
        }
        return rows;
      }

      intersectsCell(tableCell) {
        return this.table == tableCell.table &&
          this.rowStart >= tableCell.row &&
          this.rowEnd   <= tableCell.row &&
          this.colStart >= tableCell.col &&
          this.colEnd   <= tableCell.col;
      }

      static fromElement(element) {
        if (element.nodeName == "TR") {
          var startCell = new CellRef(element.cells[0]);
          var endCell = new CellRef(element.cells[element.cells.length - 1]);
          return new TableSelection(startCell, endCell);
        } else if (element.nodeName == "TD" || element.nodeName == "TH") {
          var cell = new CellRef(element);
          return new TableSelection(cell, cell);
        } else if (element instanceof Element) {
          return TableSelection.fromElement(element.closest("tr, td, th"));
        } else {
          return NilSelection;
        }
      }
    };

    const changeValue = function(input, newValue) {
      input.value = newValue;
      input.dispatchEvent(new Event("change", {"bubbles": true, "cancelable": false, "target": input}));
    }

    const NilSelection = Symbol();

    var tables = document.querySelectorAll("table.register");
    for (var table of tables) {
      var selection = NilSelection;

      const changeSelection = function(startCell, endCell) {
        startCell = (startCell === null) ? selection.startCell : startCell;
        endCell = (endCell === null) ? selection.endCell : endCell;
        return applySelection(new TableSelection(startCell, endCell));
      }

      // Updates the internal selection and screen display
      const applySelection = function(newSelection) {
        var oldCells = (selection == NilSelection) ? new Set() : selection.cells;
        for (var cell of oldCells) {
          for (var className of CellSelectedClasses) {
            cell.node.classList.remove(className);
          }
        }

        selection = newSelection;
        if (selection == NilSelection) { return; }
        selection.focus.node.classList.add(CellSelectedFocusClassName);
        for (var cell of selection.cells) { cell.node.classList.add(CellSelectedClassName); }
        for (var cell of selection.bottomCells) { cell.node.classList.add(CellSelectedBottomClassName); }
        for (var cell of selection.topCells) { cell.node.classList.add(CellSelectedTopClassName); }
        for (var cell of selection.leftCells) { cell.node.classList.add(CellSelectedLeftClassName); }
        for (var cell of selection.rightCells) { cell.node.classList.add(CellSelectedRightClassName); }
      }

      var scanInputElements = function() {
        var inputs = new Set();
        for (var cell of (selection == NilSelection ? [] : selection.cells)) {
          for (var input of cell.node.querySelectorAll(InputElementsSelector)) {
            inputs.add(input);
          }
        }
        return inputs;
      }

      // We make some assumptions that makes implementing undo and redo easy:
      //  1. All state is present in form fields (i.e. inline editors are stateless)
      //     This is a reasonable assumption because anything important has to go
      //     to the server in a form field anyway.
      //  2. All actions only take effect on the table selection.
      //
      // Our approach to undo and redo is then quite simple: keep two stacks
      // of values, and whenever we make a change to the cells record the old
      // and new values onto the undo stack. When we undo, swap them onto the redo stack.
      var undoStack = [];
      var redoStack = [];

      // Take a record of all the input values in the current selection
      // and place them on the supplied stack to maybe be restored later.
      var unapplyableAction = function(stack, callable) {
        var inputs = Array.from(scanInputElements());
        var oldValues = inputs.map((input) => ({name: input.name, value: input.value}));
        var result = callable.call();
        var newValues = inputs.map((input) => ({name: input.name, value: input.value}));
        stack.push({old: oldValues, new: newValues});
        return result;
      }

      // Perform an action that can be undone with Ctrl+Z.
      // This also clears the redo stack because it wouldn't make sense
      // to be redoing old changes on top of new data
      var undoableAction = function(callable) {
        redoStack = [];
        return unapplyableAction(undoStack, callable);
      }

      // Clears the values of all the cells in the current selection
      var clearSelectedCells = function() {
        var inputs = Array.from(scanInputElements());
        inputs.forEach(input => changeValue(input, "")); // TODO: types may require different defaults
      }

      // Take the last set of values from the passed stack
      // and restore the named elements so that they have those values
      var applyLast = function(poppingStack, pushingStack) {
        if (poppingStack.length <= 0) { return; }
        var action = poppingStack.pop();
        for (var oldValue of action.old) {
          changeValue(document.getElementsByName(oldValue.name)[0], oldValue.value);
        }
        pushingStack.push({old: action.new, new: action.old});
      }

      // Undo the last action and place the old state on the redo stack
      var undoLast = function() {
        applyLast(undoStack, redoStack);
      }

      // Redo the last action and place the old state on the undo stack
      var redoLast = function() {
        applyLast(redoStack, undoStack);
      }

      var preventDefault = function(event) {
        event.preventDefault();
      }

      // Remove focus when we make a table selection.
      var removeFocus = function(focusEvent) {
        var currentFocus = document.querySelector(":focus");
        if (currentFocus !== null) { currentFocus.blur(); }
      }

      // Only give fields focus when they're double clicked
      // If the cell is double clicked, focus the first element
      var enterCell = function(event) {
        var target = event.target;
        var input = (target.nodeName === "TD") ? cell.querySelector("input") : target;
        var cell = new CellRef(target);
        rememberCurrentValue(cell);
        cellEditMode(cell, input);
      }

      var leaveCell = function(event) {
        var target = event.target;
        cellSelectMode(new CellRef(target));
      }

      table.addEventListener("dblclick", enterCell);

      // When we enter edit mode for a cell, we remember the
      // current values of the inputs. If a user changes the input
      // we add an entry to the undo stack.
      var startRemembering = function(input) {
        var previousValue = {name: input.name, value: input.value};

        var addToUndoStack = function() {
          var newValue = {name: input.name, value: input.value};
          undoStack.push({old: [previousValue], new: [newValue]});
          redoStack = [];
          previousValue = newValue;
        }

        var stopRemembering = function() {
          input.removeEventListener("change", addToUndoStack);
          input.removeEventListener("blur", stopRemembering);
        }

        input.addEventListener("change", addToUndoStack);
        input.addEventListener("blur", stopRemembering);
      }

      var rememberCurrentValue = function(cell) {
        for (var input of cell.node.querySelectorAll(InputElementsSelector)) {
          startRemembering(input);
        }
      }

      var TableSelectMode = new EventState("select");
      var TableEditMode   = new EventState("edit");
      var InputSelectMode  = new EventState("select");
      var InputEditMode    = new EventState("edit");
      var InputAliveState  = new EventState("alive");

      // Stop input elements from taking focus on a single click
      // This would also prevent the drag selection from working
      // because the caret ends up in the input and mouseevents
      // end up with their target as the input, not the cell
      InputSelectMode.addEvent("mousedown", preventDefault);
      InputSelectMode.addEvent("click", preventDefault);

      // If we click on another cell when one cell is in edit mode,
      // we should remove focus from that cell.
      InputSelectMode.addEvent("mousedown", removeFocus);

      // If an input gains focus somehow, it's cell should be in edit mode.
      InputSelectMode.addEvent("focus", enterCell);
      InputSelectMode.addEvent("blur", leaveCell);
      InputEditMode.addEvent("blur", leaveCell);

      var cellEditMode = function(cell, input) {
        DocumentSelectMode.leave(document);
        TableSelectMode.leave(table)
        for (var input of cell.node.querySelectorAll(InputElementsSelector)) {
          InputSelectMode.leave(input);
        }
        changeSelection(cell);
        input.focus();
        for (var input of cell.node.querySelectorAll(InputElementsSelector)) {
          InputEditMode.enter(input);
        }
        TableEditMode.enter(table);
        DocumentEditMode.enter(document);
      }

      var cellSelectMode = function(cell) {
        var inputs = Array.from(cell.node.querySelectorAll(InputElementsSelector));
        DocumentEditMode.leave(document);
        TableEditMode.leave(table)
        for (var input of cell.node.querySelectorAll(InputElementsSelector)) {
          InputEditMode.leave(input);
          input.blur();
          InputSelectMode.enter(input);
        }
        TableSelectMode.enter(table);
        DocumentSelectMode.enter(document);
      }

      var startDrag = function(startEvent) {
        // Triggered when the user has finished dragging a selection
        const stopDrag = function(stopEvent) {
          table.removeEventListener("mouseup", stopDrag);
          table.removeEventListener("mouseover", handleEntry);
        }

        // Triggered when the user enters a new cell
        // To take into account that the user might be selecting rows,
        // we make a range from the new cell and use the end cell of that range
        const handleEntry = function(entryEvent) {
          var newRange = TableSelection.fromElement(entryEvent.target);
          var startCell = (selection == NilSelection) ? newCell : selection.startCell;
          changeSelection(startCell, newRange.endCell);
        }

        applySelection(TableSelection.fromElement(startEvent.target));
        table.addEventListener("mouseup", stopDrag);
        table.addEventListener("mouseover", handleEntry);
      }

      var selectAll = function() {
        var topLeft = table.rows[0].cells[0];
        var lastRow = table.rows[table.rows.length - 1];
        var bottomRight = lastRow.cells[lastRow.cells.length - 1];
        changeSelection(new CellRef(topLeft), new CellRef(bottomRight));
      }

      // List of key codes that we think shouldn't trigger cell editing
      const ControlKeyCodes = Object.keys(KeyGroups)
        .filter(g => g != "Whitespace" && g != "IMEAndComposition")
        .map(k => KeyGroups[k])
        .reduce((acc, cur) => acc.concat(cur), [])
        .filter(k => k != "Backspace");

      var selectModeKeyboardShortcuts = function(keyEvent) {
        if (keyEvent.ctrlKey && keyEvent.key.toLowerCase() == "z") { undoLast(); }
        else if (keyEvent.ctrlKey && keyEvent.key.toLowerCase() == "y") { redoLast(); }
        else if (keyEvent.key == "Delete" || keyEvent.key == "Clear") { undoableAction(clearSelectedCells); }
        else if (keyEvent.ctrlKey && keyEvent.key.toLowerCase() == "a") { selectAll(); keyEvent.preventDefault(); }
        else if (!keyEvent.shiftKey && keyEvent.key == "ArrowLeft")  { changeSelection(selection.focus.left); }
        else if (!keyEvent.shiftKey && keyEvent.key == "ArrowRight") { changeSelection(selection.focus.right); }
        else if (!keyEvent.shiftKey && keyEvent.key == "ArrowDown")  { changeSelection(selection.focus.below); }
        else if (!keyEvent.shiftKey && keyEvent.key == "ArrowUp")    { changeSelection(selection.focus.above); }
        else if (keyEvent.shiftKey && keyEvent.key == "ArrowLeft")  { changeSelection(selection.focus, selection.endCell.left); }
        else if (keyEvent.shiftKey && keyEvent.key == "ArrowRight") { changeSelection(selection.focus, selection.endCell.right); }
        else if (keyEvent.shiftKey && keyEvent.key == "ArrowDown")  { changeSelection(selection.focus, selection.endCell.below); }
        else if (keyEvent.shiftKey && keyEvent.key == "ArrowUp")    { changeSelection(selection.focus, selection.endCell.above); }
        else if (keyEvent.key == "Enter") { changeSelection(selection.focus.below); keyEvent.preventDefault(); }
        else if (keyEvent.key == "Tab")   { changeSelection(selection.focus.right); keyEvent.preventDefault(); }
        else if (!ControlKeyCodes.includes(keyEvent.key) && !keyEvent.ctrlKey && !keyEvent.metaKey) {
          var input = selection.focus.node.querySelector(InputElementsSelector);
          var event = new KeyboardEvent(keyEvent.type, keyEvent);
          event.stopPropagation();
          changeSelection(selection.focus);
          rememberCurrentValue(selection.focus);
          input.value = "";
          cellEditMode(selection.focus, input);
          input.dispatchEvent(event);
        }
      };

      var editModeKeyboardShortcuts = function(keyEvent) {
        if (keyEvent.key == "Enter") {
          cellSelectMode(selection.focus);
          changeSelection(selection.focus.below);
        }
        if (keyEvent.key == "Tab") {
          cellSelectMode(selection.focus);
          changeSelection(selection.focus.right);
        }
        if (keyEvent.key == "Escape") {
          // Bringing the cell out of edit mode causes an entry
          // to appear on the undo stack. If we pressed Escape,
          // then we want to revert to the original value, so undo.
          cellSelectMode(selection.focus);
          undoLast();
        }
      }

      DocumentSelectMode.addEvent("keydown", selectModeKeyboardShortcuts);
      DocumentEditMode.addEvent("keydown", editModeKeyboardShortcuts);

      var loseFocus = function(event) {
        if (event.target.closest("table") !== table) {
          DocumentSelectMode.leave(document);
          applySelection(NilSelection);
          DocumentUnfocusedMode.enter(document);
        }
      }
      DocumentSelectMode.addEvent("click", loseFocus);
      var elementsOutsideTable = document.evaluate(FocusableElementsOutsideTable, document, null, XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE, null);
      for (var e = 0; e < elementsOutsideTable.snapshotLength; e++) {
        elementsOutsideTable.snapshotItem(e).addEventListener("focus", loseFocus);
      }

      var getFocus = function(event) {
        DocumentUnfocusedMode.leave(document);
        DocumentSelectMode.enter(document);
      }
      DocumentUnfocusedMode.addEvent("mousedown", getFocus);

      var getCellContents = function(cell) {
        var input = cell.node.querySelector(InputElementsSelector);
        return (input !== undefined && input !== null) ? input.value : cell.node.textContent;
      }

      var copySelection = function(copyEvent) {
        if (selection == NilSelection) { return; }

        var tabSeperated = selection.rows.map(row => row.cells.map(getCellContents).join("\t")).join("\n");
        copyEvent.clipboardData.setData("text/plain", tabSeperated);
        copyEvent.preventDefault();
      };

      var pasteSelection = function(pasteEvent) {
        if (selection == NilSelection) { return; }
        if (!pasteEvent.clipboardData.types.includes("text/plain")) { return; }

        var data = pasteEvent.clipboardData.getData("text/plain").split("\n").map(s => s.split("\t"));
        var maxColumns = data.map(a => a.length).reduce((a, b) => Math.max(a,b), 0);

        // Expand selection to match size of paste
        // Always expand away from the focus point
        var endCell = CellRef.fromCoords(table,
          selection.focus.row + (selection.rowStart == selection.focus.row ? data.length - 1 : -(data.length - 1)),
          selection.focus.col + (selection.colStart == selection.focus.col ? maxColumns - 1 : -(maxColumns - 1)));
        changeSelection(selection.focus, endCell);

        var cells = selection.cells;
        var oldValues = [], newValues = [];
        for (var row = 0; row < data.length; row++) {
          for (var col = 0; col < data[row].length; col++) {
            var cell = CellRef.fromCoords(table, selection.rowStart + row, selection.colStart + col);
            if (cell === null) { continue; }
            var input = cell.node.querySelector(InputElementsSelector);
            if (input === null) { continue; }
            oldValues.push({name: input.name, value: input.value});
            changeValue(input, data[row][col]);
            newValues.push({name: input.name, value: input.value});
          }
        }
        undoStack.push({old: oldValues, new: newValues});
      }

      DocumentSelectMode.addEvent("copy", copySelection);
      DocumentSelectMode.addEvent("paste", pasteSelection);
      TableSelectMode.addEvent("selectstart", preventDefault);

      const NewRowInputSelector = "tbody *[name*='/new/']";
      const NumberOfNewRows = 4;
      var initialNewInputs = table.querySelectorAll(NewRowInputSelector);
      if (initialNewInputs.length > 0) {
        var templateRow = initialNewInputs[0].closest('tr').cloneNode(true);
        var createNewRows = function(event) {
          var newRows = new Set(Array.from(table.querySelectorAll(NewRowInputSelector)).map(x => x.closest('tr')));
          var blankNewRows = new Set();
          for (var row of newRows) {
            var inputs = Array.from(row.querySelectorAll(NewRowInputSelector));
            if (inputs.every(i => i.value === i.defaultValue)) {
              blankNewRows.add(row);
            }
          }

          for (var r = NumberOfNewRows - blankNewRows.size; r > 0; r--) {
            var newRowNumber = newRows.size;
            var newRow = templateRow.cloneNode(true);
            var namedElements = newRow.querySelectorAll('*[name]');
            for (var i = 0; i < namedElements.length; i++) {
              namedElements[i].name = namedElements[i].name.replace("new/0", "new/" + newRowNumber);
              namedElements[i].value = namedElements[i].defaultValue;
              InputAliveState.enter(namedElements[i]);
              InputSelectMode.enter(namedElements[i]);
            }
            table.querySelector("tbody").appendChild(newRow);
          }
        }
        InputAliveState.addEvent("input", createNewRows);
        InputAliveState.addEvent("change", createNewRows);
      }

      var groupByColumn = function(cellElement, nodeList) {
        var columns = new Map();
        for (var node of nodeList) {
          var cell = node.closest(cellElement);
          var colIndex = Array.from(cell.parentElement.cells).indexOf(cell);
          if (!columns.has(colIndex)) { columns.set(colIndex, []); }
          columns.get(colIndex).push(cell);
        }
        return Array.from(columns.values());
      }

      const NewColumnInputSelector = "thead *[name*='/new/']";
      const NumberOfNewColumns = 2;
      var initialNewInputs = table.querySelectorAll(NewColumnInputSelector);
      if (initialNewInputs.length > 0) {
        var columns = groupByColumn("th", initialNewInputs);
        var templateElements = columns[0].map(th => ({node: th.cloneNode(true), parent: th.parentElement}));
        var createNewColumns = function(event) {
          var newColumns = groupByColumn("th", table.querySelectorAll(NewColumnInputSelector));
          var blankNewColumns = new Set();
          for (var column of newColumns.values()) {
            var allAreBlank = column.every(cell => {
              var inputs = Array.from(cell.querySelectorAll(NewColumnInputSelector));
              return inputs.every(i => i.value === i.defaultValue);
            });
            if (allAreBlank) {
              blankNewColumns.add(column);
            }
          }

          for (var r = NumberOfNewColumns - blankNewColumns.size; r > 0; r--) {
            var newColumnNumber = newColumns.length;
            for (var templateColumn of templateElements) {
              var newColumn = templateColumn.node.cloneNode(true);
              var namedElements = newColumn.querySelectorAll('*[name]');
              for (var i = 0; i < namedElements.length; i++) {
                namedElements[i].name = namedElements[i].name.replace("new/0", "new/" + newColumnNumber);
                namedElements[i].value = namedElements[i].defaultValue;
                InputAliveState.enter(namedElements[i]);
                InputSelectMode.enter(namedElements[i]);
              }
              templateColumn.parent.appendChild(newColumn);
            }
          }
        };
        InputAliveState.addEvent("input", createNewColumns);
        InputAliveState.addEvent("change", createNewColumns);
      }

      var addRowClasses = function(event) {
        var row = event.target.closest('tr'); //FIXME: IE
        var siblingInputs = row.querySelectorAll("input");
        var rowEdited = false;
        var rowDeleted = (siblingInputs.length > 0);
        var rowAdded = (siblingInputs.length > 0);
        for (var j = 0; j < siblingInputs.length; j++) {
          rowEdited = rowEdited || (siblingInputs[j].value !== siblingInputs[j].defaultValue);
          rowDeleted = rowDeleted && (siblingInputs[j].value === ""); // TODO: types
          rowAdded = rowAdded && (siblingInputs[j].name.indexOf("/new/") > 0);
        }
        row.classList.toggle("edited", rowEdited); //FIXME: IE 11
        row.classList.toggle("added", rowAdded);
        row.classList.toggle("deleted", rowDeleted);
      }
      InputAliveState.addEvent("input", addRowClasses);
      InputAliveState.addEvent("change", addRowClasses);

      table.addEventListener("mousedown", startDrag);

      DocumentUnfocusedMode.enter(document);
      TableSelectMode.enter(table)
      for (var input of table.querySelectorAll(InputElementsSelector)) {
        InputAliveState.enter(input);
        InputSelectMode.enter(input);
      }
    }
  });
