const mouseElement = document.getElementById('mouse');

mouseElement.innerHTML = `
    <div class="top">
        <button class="button" onclick='receiveMouseInput("leftButton.some", 0)'>
            <div>Left Button</div>
        </button>
        <div class="scroll">
            <button class="button" onclick='receiveMouseInput("middleButton.some", 0)'>
                <div>Middle Button</div>
            </button>
            <button class="scroll" onclick='receiveMouseInput("scroll.ReadValue().some", 2)'>
                <div>Scroll</div>
            </button>
        </div>
        <button class="button" onclick='receiveMouseInput("rightButton.some", 0)'>
            <div>Right Button</div>
        </button>
    </div>
    <button class="body" onclick='receiveMouseInput("some.ReadValue()", 1)'>
        <div>Pad</div>
    </button>
`;

function receiveMouseInput(code, mode) {
    setInputCode(`Mouse.current.${code}`, mode);
}
