const gamepadElement = document.getElementById('gamepad');

gamepadElement.innerHTML = `
    <div class="side">
        <div>
            <button class="trigger" onclick='receiveGamepadInput("leftTrigger.some", 0)'>
                <div>Left Trigger</div>
            </button>
            <button class="shoulder" onclick='receiveGamepadInput("leftShoulder.some", 0)'>
                <div>Left Shoulder</div>
            </button>
        </div>
        <div>
            <button class="trigger" onclick='receiveGamepadInput("rightTrigger.some", 0)'>
                <div>Right Trigger</div>
            </button>
            <button class="shoulder" onclick='receiveGamepadInput("rightShoulder.some", 0)'>
                <div>Right Shoulder</div>
            </button>
        </div>
    </div>
    <div class="top">
        <div>
            <div class="stick">
                <button onclick='receiveGamepadInput("leftStick.ReadValue().some", 3)'>
                    <div>Left Stick</div>
                </button>
            </div>
            <div class="voidA"></div>
            <div class="home">
                <button onclick='receiveGamepadInput("selectButton.some", 0)'>
                    <div>Select</div>
                </button>
                <button>
                    <div></div>
                </button>
                <button onclick='receiveGamepadInput("startButton.some", 0)'>
                    <div>Start</div>
                </button>
            </div>
            <div class="voidA"></div>
            <div class="r_button">
                <div>
                    <div>
                        <div class="void"></div>
                        <button class="button" onclick='receiveGamepadInput("buttonNorth.some", 0)'>
                            <div>N</div>
                        </button>
                        <div class="void"></div>
                        <button class="button" onclick='receiveGamepadInput("buttonWest.some", 0)'>
                            <div>W</div>
                        </button>
                        <div class="void"></div>
                        <button class="button" onclick='receiveGamepadInput("buttonEast.some", 0)'>
                            <div>E</div>
                        </button>
                        <div class="void"></div>
                        <button class="button" onclick='receiveGamepadInput("buttonSouth.some", 0)'>
                            <div>S</div>
                        </button>
                        <div class="void"></div>
                    </div>
                </div>
            </div>
        </div>
        <div>
            <div class="voidA"></div>
            <div class="d_pad">
                <div>
                    <div>
                        <div class="void"></div>
                        <button class="button up" onclick='receiveGamepadInput("dpad.ReadValue().some", 3)'>
                            <div>↑</div>
                        </button>
                        <div class="void"></div>
                        <button class="button left" onclick='receiveGamepadInput("dpad.ReadValue().some", 3)'>
                            <div>←</div>
                        </button>
                        <div class="center">
                            <div class="start_start">
                                <div></div>
                            </div>
                            <div class="start_end">
                                <div></div>
                            </div>
                            <div class="end_start">
                                <div></div>
                            </div>
                            <div class="end_end">
                                <div></div>
                            </div>
                        </div>
                        <button class="button right" onclick='receiveGamepadInput("dpad.ReadValue().some", 3)'>
                            <div>→</div>
                        </button>
                        <div class="void"></div>
                        <button class="button down" onclick='receiveGamepadInput("dpad.ReadValue().some", 3)'>
                            <div>↓</div>
                        </button>
                        <div class="void"></div>
                    </div>
                </div>
            </div>
            <div class="voidB"></div>
            <div class="stick">
                <button onclick='receiveGamepadInput("rightStick.ReadValue().some", 3)'>
                    <div>Right Stick</div>
                </button>
            </div>
            <div class="voidA"></div>
        </div>
    </div>
`;

function receiveGamepadInput(code, mode) {
    setInputCode(`Gamepad.current.${code}`, mode);
}
