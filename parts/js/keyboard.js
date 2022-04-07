const keyboardElement = document.getElementById('keyboard');

const letterData = [
    [
        { key: 'A', print: 'Esc', code: 'escapeKey' },
        { key: 'F' },
        { key: 'A', print: 'F1', code: 'f1Key' },
        { key: 'A', print: 'F2', code: 'f2Key' },
        { key: 'A', print: 'F3', code: 'f3Key' },
        { key: 'A', print: 'F4', code: 'f4Key' },
        { key: 'G' },
        { key: 'A', print: 'F5', code: 'f5Key' },
        { key: 'A', print: 'F6', code: 'f6Key' },
        { key: 'A', print: 'F7', code: 'f7Key' },
        { key: 'A', print: 'F8', code: 'f8Key' },
        { key: 'G' },
        { key: 'A', print: 'F9', code: 'f9Key' },
        { key: 'A', print: 'F10', code: 'f10Key' },
        { key: 'A', print: 'F11', code: 'f11Key' },
        { key: 'A', print: 'F12', code: 'f12Key' }
    ],
    [
        { key: 'A', print: '\`', code: 'backquoteKey' },
        { key: 'A', print: '1', code: 'digit1Key' },
        { key: 'A', print: '2', code: 'digit2Key' },
        { key: 'A', print: '3', code: 'digit3Key' },
        { key: 'A', print: '4', code: 'digit4Key' },
        { key: 'A', print: '5', code: 'digit5Key' },
        { key: 'A', print: '6', code: 'digit6Key' },
        { key: 'A', print: '7', code: 'digit7Key' },
        { key: 'A', print: '8', code: 'digit8Key' },
        { key: 'A', print: '9', code: 'digit9Key' },
        { key: 'A', print: '0', code: 'digit0Key' },
        { key: 'A', print: '-', code: 'minusKey' },
        { key: 'A', print: '=', code: 'equalsKey' },
        { key: 'C', print: 'Back Space', code: 'backspaceKey' }
    ],
    [
        { key: 'B', print: 'Tab', code: 'tabKey' },
        { key: 'A', print: 'Q', code: 'qKey' },
        { key: 'A', print: 'W', code: 'wKey' },
        { key: 'A', print: 'E', code: 'eKey' },
        { key: 'A', print: 'R', code: 'rKey' },
        { key: 'A', print: 'T', code: 'tKey' },
        { key: 'A', print: 'Y', code: 'yKey' },
        { key: 'A', print: 'U', code: 'uKey' },
        { key: 'A', print: 'I', code: 'iKey' },
        { key: 'A', print: 'O', code: 'oKey' },
        { key: 'A', print: 'P', code: 'pKey' },
        { key: 'A', print: '[', code: 'leftBracketKey' },
        { key: 'A', print: ']', code: 'rightBracketKey' },
        { key: 'B', print: '\\', code: 'backslashKey' }
    ],
    [
        { key: 'C', print: 'Caps Lock', code: 'capsLockKey' },
        { key: 'A', print: 'A', code: 'aKey' },
        { key: 'A', print: 'S', code: 'sKey' },
        { key: 'A', print: 'D', code: 'dKey' },
        { key: 'A', print: 'F', code: 'fKey' },
        { key: 'A', print: 'G', code: 'gKey' },
        { key: 'A', print: 'H', code: 'hKey' },
        { key: 'A', print: 'J', code: 'jKey' },
        { key: 'A', print: 'K', code: 'kKey' },
        { key: 'A', print: 'L', code: 'lKey' },
        { key: 'A', print: ';', code: 'semicolonKey' },
        { key: 'A', print: '\'', code: 'slashKey' },
        { key: 'C', print: 'Enter', code: 'enterKey' }
    ],
    [
        { key: 'D', print: 'L-Shift', code: 'leftShiftKey' },
        { key: 'A', print: 'Z', code: 'zKey' },
        { key: 'A', print: 'X', code: 'xKey' },
        { key: 'A', print: 'C', code: 'cKey' },
        { key: 'A', print: 'V', code: 'vKey' },
        { key: 'A', print: 'B', code: 'bKey' },
        { key: 'A', print: 'N', code: 'nKey' },
        { key: 'A', print: 'M', code: 'mKey' },
        { key: 'A', print: ',', code: 'commaKey' },
        { key: 'A', print: '.', code: 'periodKey' },
        { key: 'A', print: '/', code: 'slashKey' },
        { key: 'D', print: 'R-Shift', code: 'rightShiftKey' }
    ],
    [
        { key: 'A', print: 'L-Ctrl', code: 'leftCtrlKey' },
        { key: 'F' },
        { key: 'A', print: 'L-Win', code: 'leftWindowsKey' },
        { key: 'A', print: 'L-Alt', code: 'leftAltKey' },
        { key: 'E', print: 'Space', code: 'spaceKey' },
        { key: 'A', print: 'R-Alt', code: 'rightAltKey' },
        { key: 'A', print: 'R-Win', code: 'rightWindowsKey' },
        { key: 'A', print: 'Left Meta', code: 'leftMetaKey' },
        { key: 'A', print: 'R-Ctrl', code: 'rightCtrlKey' }
    ]
];

const operationData = [
    [
        { key: 'A', print: 'Print Screen', code: 'printScreenKey' },
        { key: 'A', print: 'Scroll Lock', code: 'scrollLockKey' },
        { key: 'A', print: 'Pause', code: 'pauseKey' }
    ],
    [
        { key: 'A', print: 'Insert', code: 'insertKey' },
        { key: 'A', print: 'Home', code: 'homeKey' },
        { key: 'A', print: 'Page Up', code: 'pageUpKey' }
    ],
    [
        { key: 'A', print: 'Delete', code: 'deleteKey' },
        { key: 'A', print: 'End', code: 'endKey' },
        { key: 'A', print: 'Page Down', code: 'pageDownKey' }
    ],
    [],
    [
        { key: 'B' },
        { key: 'A', print: '↑', code: 'upArrowKey' },
        { key: 'B' }
    ],
    [
        { key: 'A', print: '←', code: 'leftArrowKey' },
        { key: 'A', print: '↓', code: 'downArrowKey' },
        { key: 'A', print: '→', code: 'rightArrowKey' }
    ]
];

const padDataA = [
    [],
    [
        { key: 'A', print: 'Num Lock', code: 'numLockKey' },
        { key: 'A', print: '/', code: 'numpadDivideKey' },
        { key: 'A', print: '*', code: 'numpadMultiplyKey' }
    ],
    [
        { key: 'A', print: '7', code: 'numpad7Key' },
        { key: 'A', print: '8', code: 'numpad8Key' },
        { key: 'A', print: '9', code: 'numpad9Key' }
    ],
    [
        { key: 'A', print: '4', code: 'numpad4Key' },
        { key: 'A', print: '5', code: 'numpad5Key' },
        { key: 'A', print: '6', code: 'numpad6Key' }
    ],
    [
        { key: 'A', print: '1', code: 'numpad1Key' },
        { key: 'A', print: '2', code: 'numpad2Key' },
        { key: 'A', print: '3', code: 'numpad3Key' }
    ],
    [
        { key: 'B', print: '0', code: 'numpad0Key' },
        { key: 'A', print: '.', code: 'numpadPeriodKey' }
    ]
];

const padDataB = [
    [],
    [
        { key: 'A', print: '-', code: 'numpadMinusKey' }
    ],
    [
        { key: 'B', print: '+', code: 'numpadPlusKey' }
    ],
    [
        { key: 'C' }
    ],
    [
        { key: 'B', print: '=', code: 'numpadEqualsKey' }
    ],
    [
        { key: 'C' }
    ]
];

setButton(letterData, 'letter');
setButton(operationData, 'operation');
setButton(padDataA, 'padA');
setButton(padDataB, 'padB');

function setButton(keyData, baseName) {
    const baseElement = document.createElement('div');
    baseElement.className = baseName;

    for (let i in keyData) {
        const baseChildElement = document.createElement('div');

        for (let j in keyData[i]) {
            const buttonElement = keyData[i][j].print ? document.createElement('button') : document.createElement('div');
            buttonElement.className = `key${keyData[i][j].key}`;

            if (keyData[i][j].print) {
                buttonElement.onclick = (() => setInputCode(`Keyboard.current.${keyData[i][j].code}.some`, 0));

                const buttonChildElement = document.createElement('div');
                buttonChildElement.innerHTML = keyData[i][j].print;

                buttonElement.appendChild(buttonChildElement);
            }

            baseChildElement.appendChild(buttonElement);
        }

        baseElement.appendChild(baseChildElement);
    }

    keyboardElement.appendChild(baseElement);
}
