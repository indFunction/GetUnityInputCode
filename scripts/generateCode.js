const inputCodeElement = document.getElementById('code');
const inputTypeElement = document.getElementById('type');
const optionElement = document.getElementById('output').getElementsByClassName('option')[0];

const optionData = [
    [
        { value: 'wasPressedThisFrame', text: '入力を開始した瞬間：<code>.wasPressedThisFrame</code>' },
        { value: 'wasReleasedThisFrame', text: '入力を終了した瞬間：<code>.wasReleasedThisFrame</code>' },
        { value: 'isPressed', text: '入力を続けている間：<code>.isPressed</code>' }
    ],
    [
        { value: 'position', text: 'ポインターの座標点：<code>.position</code>' },
        { value: 'delta', text: 'ポインターの移動量：<code>.delta</code>' }
    ],
    [
        { value: 'x', text: 'スクロールの横軸方向の移動量：<code>.x</code>' },
        { value: 'y', text: 'スクロールの縦軸方向の移動量：<code>.y</code>' }
    ],
    [
        { value: 'x', text: 'スティック／DパッドのX軸方向の移動量：<code>.x</code>' },
        { value: 'y', text: 'スティック／DパッドのY軸方向の移動量：<code>.y</code>' },
        { value: 'magnitude', text: 'スティック／Dパッドの移動量のベクトルの大きさ：<code>.magnitude</code>' }
    ]
];

let selectInputCode = '';
let selectOptionMode = -1;
let selectOptionItem = 0;

function setInputCode(code, mode) {
    selectInputCode = code;

    if (selectOptionMode != mode) {
        setOption(mode);

        selectOptionMode = mode;
        selectOptionItem = 0;
    }

    inputCodeElement.value = selectInputCode.replace('some', optionData[selectOptionMode][selectOptionItem].value);
    inputTypeElement.value = selectOptionMode == 0 ? 'bool' : 'Vector2';
}

function changeOption(num) {
    selectOptionItem = num;

    inputCodeElement.value = selectInputCode.replace('some', optionData[selectOptionMode][selectOptionItem].value);
}

function setOption(n) {
    optionElement.innerHTML = '';

    for (let i = 0; i < 3; i++) {
        if (i < optionData[n].length) {
            optionElement.insertAdjacentHTML(
                'beforeend',
                `
                    <div>
                        <input
                            type="radio"
                            name="property"
                            id="property${i}"
                            value="${optionData[n][i].value}"
                            ${i == selectOptionItem ? 'checked' : ''}
                            onclick='changeOption(${i})'
                        />
                        <label for="property${i}">${optionData[n][i].text}</label>
                    </div>
                `
            );
        } else {
            optionElement.insertAdjacentHTML(
                'beforeend',
                `
                    <div>&nbsp;</div>
                `
            );
        }
    }
}

function copyInputCode() {
    if (!navigator.clipboard) return;

    navigator.clipboard.writeText(inputCodeElement.value)
        .then(() => {
            //
        })
        .catch(err => {
            console.log('Something went wrong!', err);
        });
}

function copyInputType() {
    if (!navigator.clipboard) return;

    navigator.clipboard.writeText(inputTypeElement.value)
        .then(() => {
            //
        })
        .catch(err => {
            console.log('Something went wrong!', err);
        });
}
